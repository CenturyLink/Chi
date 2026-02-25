import { join, basename } from 'path';
import { readdirSync, existsSync } from 'fs';
import { readFile } from './extract.js';
import { CHI_SRC } from '../config.js';

export interface CssProperty {
  property: string;
  value: string;
}

export interface UtilityClass {
  className: string;
  description: string;
  cssProperties: CssProperty[];
  responsive: boolean;
  examples?: string[];
}

export interface UtilityCategory {
  name: string;
  description: string;
  classes: UtilityClass[];
}

const SPACING_TYPES = ['p', 'm', 'g'] as const;
const SPACING_POSITIONS = ['', 't', 'r', 'b', 'l', 'x', 'y'] as const;
const SPACING_VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;

const PROP_MAP: Record<string, Record<string, string>> = {
  p: {
    '': 'padding',
    t: 'padding-top',
    r: 'padding-right',
    b: 'padding-bottom',
    l: 'padding-left',
    x: 'padding-inline',
    y: 'padding-block',
  },
  m: {
    '': 'margin',
    t: 'margin-top',
    r: 'margin-right',
    b: 'margin-bottom',
    l: 'margin-left',
    x: 'margin-inline',
    y: 'margin-block',
  },
  g: { '': 'gap', x: 'column-gap', y: 'row-gap' },
};

const COLORS = [
  'primary',
  'secondary',
  'white',
  'black',
  'navy',
  'grey',
  'grey-10',
  'grey-15',
  'grey-20',
  'grey-25',
  'grey-30',
  'muted',
  'muted-light',
  'muted-lighter',
  'success',
  'success-light',
  'success-lighter',
  'info',
  'info-light',
  'info-lighter',
  'warning',
  'warning-light',
  'warning-lighter',
  'danger',
  'danger-light',
  'danger-lighter',
  'none',
];

const CATEGORY_MAP: Record<string, string> = {
  spacing: 'Spacing',
  color: 'Color',
  opacity: 'Opacity',
  display: 'Display',
  flex: 'Flexbox',
  text: 'Typography',
  border: 'Border',
  sizing: 'Sizing',
  position: 'Position',
  shadow: 'Shadow',
  'focus-visibility': 'Focus',
  image: 'Image',
};

function generateSpacingUtilities(): UtilityClass[] {
  const classes: UtilityClass[] = [];
  const typeLabels: Record<string, string> = { p: 'padding', m: 'margin', g: 'gap' };
  const posLabels: Record<string, string> = {
    '': 'all sides',
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left',
    x: 'horizontal',
    y: 'vertical',
  };

  for (const type of SPACING_TYPES) {
    const positions = type === 'g' ? (['', 'x', 'y'] as const) : SPACING_POSITIONS;

    for (const pos of positions) {
      for (const val of SPACING_VALUES) {
        const className = `-${type}${pos}--${val}`;
        const prop = PROP_MAP[type]?.[pos] ?? type;
        const rem = parseInt(val) / 2;
        const px = parseInt(val) * 8;
        const cssValue = rem === 0 ? '0' : `${rem}rem`;
        const examples = [
          `<div class="${className}">Content</div>`,
          `<chi-button class="${className}">Button</chi-button>`,
        ];

        classes.push({
          className,
          description: `${typeLabels[type]} ${posLabels[pos] ?? ''}: ${cssValue} (${px}px)`.trim(),
          cssProperties: [{ property: prop, value: cssValue }],
          responsive: true,
          examples,
        });
      }

      if (type === 'm') {
        const className = `-${type}${pos}--auto`;
        const prop = PROP_MAP[type]?.[pos] ?? 'margin';
        const examples = [`<div class="${className}">Centered</div>`];

        if (pos === 'x' || pos === '')
          examples.push(`<div class="-d--block ${className}">Horizontally centered block</div>`);

        classes.push({
          className,
          description: `${prop}: auto`,
          cssProperties: [{ property: prop, value: 'auto' }],
          responsive: true,
          examples,
        });
      }
    }
  }

  return classes;
}

function generateColorUtilities(): UtilityClass[] {
  const classes: UtilityClass[] = [];
  const semanticHints: Record<string, string> = {
    primary: 'brand actions and links',
    secondary: 'secondary actions',
    success: 'positive feedback',
    warning: 'caution indicators',
    danger: 'errors and destructive actions',
    info: 'informational messages',
    muted: 'de-emphasized content',
    white: 'light surfaces',
    black: 'dark surfaces',
    navy: 'dark brand surfaces',
  };

  for (const color of COLORS) {
    const hint = semanticHints[color] ?? color;

    classes.push({
      className: `-bg--${color}`,
      description: `Background color: ${color} — ${hint}`,
      cssProperties: [{ property: 'background-color', value: `var(--chi-color-${color})` }],
      responsive: false,
      examples: [`<div class="-bg--${color}">Content</div>`, `<chi-alert class="-bg--${color}">Message</chi-alert>`],
    });

    classes.push({
      className: `-text--${color}`,
      description: `Text color: ${color} — ${hint}`,
      cssProperties: [{ property: 'color', value: `var(--chi-color-${color})` }],
      responsive: false,
      examples: [
        `<p class="-text--${color}">Colored text</p>`,
        `<chi-button class="-text--${color}">Button</chi-button>`,
      ],
    });
  }

  return classes;
}

function generateOpacityUtilities(): UtilityClass[] {
  const hints: Record<number, string> = {
    0: 'fully transparent / hidden',
    20: 'barely visible',
    40: 'semi-transparent',
    60: 'moderately transparent',
    80: 'mostly opaque',
    100: 'fully opaque',
  };

  return [0, 20, 40, 60, 80, 100].map((v) => ({
    className: `-opacity--${v}`,
    description: `Opacity ${v}% (${v / 100}) — ${hints[v]}`,
    cssProperties: [{ property: 'opacity', value: `${v / 100}` }],
    responsive: false,
    examples: [
      `<div class="-opacity--${v}">Content</div>`,
      `<chi-icon class="-opacity--${v}" icon="check"></chi-icon>`,
    ],
  }));
}

function parseStaticUtilities(content: string, category: string): UtilityClass[] {
  const classes: UtilityClass[] = [];
  const classRegex = /\.-([a-z0-9-_]+)\s*\{/gi;
  let classMatch;

  while ((classMatch = classRegex.exec(content)) !== null) {
    const className = `-${classMatch[1]!}`;
    const startIdx = classMatch.index + classMatch[0].length;

    let depth = 1;
    let i = startIdx;

    while (i < content.length && depth > 0) {
      if (content[i] === '{') depth++;
      else if (content[i] === '}') depth--;
      i++;
    }

    const blockBody = content.substring(startIdx, i - 1);
    const cssProperties: CssProperty[] = [];
    const topLevelLines = blockBody.split('\n').filter((line) => {
      const trimmed = line.trim();

      return (
        trimmed &&
        !trimmed.startsWith('&') &&
        !trimmed.startsWith('//') &&
        !trimmed.startsWith('@') &&
        trimmed.includes(':')
      );
    });

    for (const line of topLevelLines) {
      const colonIdx = line.indexOf(':');

      if (colonIdx === -1) continue;

      const property = line.substring(0, colonIdx).trim();
      const value = line
        .substring(colonIdx + 1)
        .replace(/;.*$/, '')
        .trim();

      if (property && value && /^[a-z-]+$/.test(property)) {
        cssProperties.push({ property, value });
      }
    }

    const propDesc = cssProperties.map((p) => `${p.property}: ${p.value}`).join('; ');
    const description = propDesc || `${category} utility: ${className}`;
    const examples = [`<div class="${className}">Content</div>`];

    classes.push({ className, description, cssProperties, responsive: false, examples });
  }

  return classes;
}

/** Generates all utility classes: spacing, color, opacity, and SCSS-parsed static utilities. */
export function extractUtilities(): { categories: UtilityCategory[]; totalClasses: number } {
  const categories: UtilityCategory[] = [
    { name: 'Spacing', description: 'Padding, margin, and gap utilities', classes: generateSpacingUtilities() },
    { name: 'Color', description: 'Background and text color utilities', classes: generateColorUtilities() },
    { name: 'Opacity', description: 'Transparency utilities', classes: generateOpacityUtilities() },
  ];

  const utilDir = join(CHI_SRC, 'utilities');

  if (existsSync(utilDir)) {
    const files = readdirSync(utilDir).filter(
      (f) => f.endsWith('.scss') && !['spacing.scss', 'color.scss', 'opacity.scss'].includes(f)
    );

    for (const file of files) {
      const name = basename(file, '.scss');
      const catName = CATEGORY_MAP[name] ?? name.charAt(0).toUpperCase() + name.slice(1);
      const content = readFile(join(utilDir, file));
      const classes = parseStaticUtilities(content, catName);

      if (classes.length > 0) categories.push({ name: catName, description: `${catName} utilities`, classes });
    }
  }

  const totalClasses = categories.reduce((sum, c) => sum + c.classes.length, 0);

  return { categories, totalClasses };
}
