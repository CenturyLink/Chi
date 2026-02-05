/**
 * Token Categorizer
 *
 * Categorizes design tokens by type based on naming conventions.
 */

import type { Token } from '../../types/index.js';

type TokenCategories = {
  colors: Token[];
  typography: Token[];
  spacing: Token[];
  shadows: Token[];
  breakpoints: Token[];
  zIndex: Token[];
};

const CATEGORY_MATCHERS: Array<{
  category: keyof TokenCategories;
  patterns: RegExp[];
}> = [
  {
    category: 'colors',
    patterns: [/color/, /bg-/, /text-/],
  },
  {
    category: 'typography',
    patterns: [/font/, /line-height/, /weight/],
  },
  {
    category: 'spacing',
    patterns: [/spacing/, /^base-unit$/],
  },
  {
    category: 'shadows',
    patterns: [/shadow/],
  },
  {
    category: 'breakpoints',
    patterns: [/breakpoint/],
  },
  {
    category: 'zIndex',
    patterns: [/z-index/, /zindex/],
  },
];

/**
 * Determines the category for a token based on its name.
 */
function getCategoryForToken(tokenName: string): keyof TokenCategories | null {
  const nameLower = tokenName.toLowerCase();

  for (const { category, patterns } of CATEGORY_MATCHERS) {
    for (const pattern of patterns) {
      if (pattern.test(nameLower)) {
        return category;
      }
    }
  }

  return null;
}

/**
 * Categorizes tokens by type.
 */
export function categorizeTokens(tokens: Token[]): TokenCategories {
  const categories: TokenCategories = {
    colors: [],
    typography: [],
    spacing: [],
    shadows: [],
    breakpoints: [],
    zIndex: [],
  };

  for (const token of tokens) {
    const category = getCategoryForToken(token.name);

    if (category) {
      categories[category].push({ ...token, category });
    }
  }

  return categories;
}
