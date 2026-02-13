import { join } from 'path';
import { readFile, extractTokens as extractRawTokens } from './extract.js';
import { CHI_SRC, THEMES } from '../config.js';

export interface Token {
  name: string;
  value: string;
  sassVariable: string;
  description?: string;
  examples?: string[];
  category?: string;
}

export interface TokenCategory {
  tokens: Token[];
  description: string;
}

const CATEGORY_RULES: Record<string, (name: string) => boolean> = {
  colors: (n) => /color|grey|red|blue|green|pink|purple|teal|yellow|cyan|orange|indigo/.test(n),
  typography: (n) => /^font-|^line-height|^cap-height/.test(n),
  spacing: (n) => n === 'base-unit',
  shadows: (n) => /shadow/.test(n),
  breakpoints: (n) => /-breakpoint$/.test(n),
  zIndex: (n) => /^zindex-/.test(n),
  opacity: (n) => /^opacity-/.test(n),
  icons: (n) => /^icon-size-/.test(n),
};

const CATEGORY_DESCS: Record<string, string> = {
  colors: 'Color palette including brand colors, backgrounds, and text colors',
  typography: 'Typography tokens including font families, sizes, weights, and line heights',
  spacing: 'Spacing scale based on 8px base unit for consistent layouts',
  shadows: 'Box shadow tokens for elevation and depth',
  breakpoints: 'Responsive breakpoint values for different screen sizes',
  zIndex: 'Z-index scale for proper layering of UI elements',
  opacity: 'Opacity level tokens for transparency control',
  icons: 'Icon size tokens for consistent icon dimensions',
  other: 'Miscellaneous design tokens',
};

function categorizeToken(name: string): string {
  for (const [cat, test] of Object.entries(CATEGORY_RULES)) {
    if (test(name)) return cat;
  }

  return 'other';
}

function describeToken(name: string, value: string): { description: string; examples: string[] } {
  const fsMatch = name.match(/^font-size-(\d+)$/);

  if (fsMatch) {
    const remVal = parseFloat(value);
    const px = Math.round(remVal * 16);

    return {
      description: `Font size level ${fsMatch[1]} (${px}px / ${value})`,
      examples: [`font-size: $${name};`, `<p style="font-size: $${name}">Text</p>`],
    };
  }

  if (name === 'font-family-icon')
    return { description: 'Icon font family for Chi icon glyphs', examples: [`font-family: $${name};`] };

  if (name === 'line-height')
    return {
      description: `Default line height ratio (${value})`,
      examples: [`line-height: $${name};`, `p { line-height: $${name}; }`],
    };

  if (name === 'cap-height')
    return {
      description: `Cap height ratio (${value}) for vertical rhythm calculations`,
      examples: [`$cap-height * $font-size-5`],
    };

  if (name === 'base-unit') {
    const basePx = 8;

    return {
      description: `Foundation spacing unit (${value}). Spacing formula: space(N) = (N/2)rem. Each step = ${basePx}px at 16px root`,
      examples: [
        `padding: $base-unit;`,
        `margin: calc($base-unit * 2);`,
        `gap: $base-unit;`,
        `-p--1 = 0.5rem (${basePx}px), -p--2 = 1rem (${basePx * 2}px), -p--4 = 2rem (${basePx * 4}px)`,
      ],
    };
  }

  const opMatch = name.match(/^opacity-(\d+)$/);

  if (opMatch) {
    return {
      description: `Opacity level ${opMatch[1]}% (${value})`,
      examples: [`opacity: $${name};`, `<div class="-opacity--${opMatch[1]}">Semi-transparent</div>`],
    };
  }

  if (name === 'shadow')
    return {
      description: 'Shadow scale map (levels 0-5) for elevation and depth',
      examples: [`box-shadow: map-get($shadow, 2);`, `<div class="-shadow--2">Elevated card</div>`],
    };

  const bpMatch = name.match(/^(sm|md|lg|xl|xxl)-breakpoint$/);

  if (bpMatch) {
    const labels: Record<string, string> = {
      sm: 'Small',
      md: 'Medium',
      lg: 'Large',
      xl: 'Extra large',
      xxl: 'Extra extra large',
    };

    return {
      description: `${labels[bpMatch[1]] ?? bpMatch[1]} screen breakpoint (${value})`,
      examples: [`@media (min-width: $${name}) { ... }`, `@include respond-to(${bpMatch[1]}) { ... }`],
    };
  }

  if (name === 'screen-sizes')
    return {
      description: 'Ordered list of responsive breakpoint names',
      examples: [`@each $size in $screen-sizes { ... }`],
    };

  const ziMatch = name.match(/^zindex-(.+)$/);

  if (ziMatch) {
    const labels: Record<string, string> = {
      prominent: 'subtle layering above siblings',
      dropdown: 'dropdown menus and select overlays',
      fixed: 'sticky headers and fixed navigation',
      backdrop: 'overlay backgrounds behind modals',
      'fixed-with-backdrop': 'fixed elements that sit above backdrops',
      modal: 'modal dialogs and dialog overlays',
      popover: 'popovers and floating panels',
      tooltip: 'tooltip hints (highest layer)',
    };

    return {
      description: `Z-index for ${labels[ziMatch[1]] ?? ziMatch[1]} (${value})`,
      examples: [`z-index: $${name};`, `.my-element { z-index: $${name}; }`],
    };
  }

  if (name === 'state-colors')
    return {
      description: 'Semantic state color map (success, warning, danger, info)',
      examples: [`map-get($state-colors, success)`],
    };

  const iconMatch = name.match(/^icon-size-(.+)$/);

  if (iconMatch)
    return {
      description: `Icon size ${iconMatch[1]} (${value})`,
      examples: [`width: $${name}; height: $${name};`, `<chi-icon size="${iconMatch[1]}"></chi-icon>`],
    };

  if (/color/.test(name)) {
    const readable = name.replace(/-/g, ' ');

    return { description: `Design token: ${readable}`, examples: [`color: $${name};`, `background-color: $${name};`] };
  }

  return { description: `Design token: ${name} (${value})`, examples: [`$${name}`] };
}

/** Extracts, categorizes, and enriches tokens with descriptions, examples, and theme data. */
export function extractTokens(): Record<string, TokenCategory> & {
  byTheme: Record<string, { theme: string; tokens: Token[] }>;
} {
  const rawTokens = extractRawTokens();

  const allTokens: Token[] = rawTokens.map((t) => {
    const { description, examples } = describeToken(t.name, t.value);

    return { name: t.name, value: t.value, sassVariable: `$${t.name}`, description, examples };
  });

  const categories: Record<string, Token[]> = {
    colors: [],
    typography: [],
    spacing: [],
    shadows: [],
    breakpoints: [],
    zIndex: [],
    opacity: [],
    icons: [],
    other: [],
  };

  for (const token of allTokens) {
    const cat = categorizeToken(token.name);

    if (categories[cat]) categories[cat]!.push(token);
  }

  const result: Record<string, TokenCategory> = {};

  for (const [cat, tokens] of Object.entries(categories)) {
    result[cat] = { tokens, description: CATEGORY_DESCS[cat] ?? cat };
  }

  const byTheme: Record<string, { theme: string; tokens: Token[] }> = {};

  for (const theme of THEMES) {
    const themeFile = readFile(join(CHI_SRC, `themes/${theme}/_variables.scss`));

    if (themeFile) {
      const regex = /^\$([a-z0-9-_]+):\s*(.+?)\s*(?:!default|!global)?\s*;/gim;
      const themeTokens: Token[] = [];
      let m;

      while ((m = regex.exec(themeFile)) !== null) {
        const { description, examples } = describeToken(m[1]!, m[2]!);

        themeTokens.push({ name: m[1]!, value: m[2]!, sassVariable: `$${m[1]}`, description, examples });
      }

      if (themeTokens.length > 0) byTheme[theme] = { theme, tokens: themeTokens };
    }
  }

  return { ...result, byTheme } as ReturnType<typeof extractTokens>;
}
