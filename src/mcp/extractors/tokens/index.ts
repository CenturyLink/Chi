/**
 * Design Token Extractor
 *
 * Extracts design tokens from Chi SCSS files including global tokens
 * and theme-specific overrides for all supported themes.
 */

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import type { DesignTokens, Token, TokenCategory, ThemeTokens } from '../../types/index.js';
import { THEMES } from '../../config/constants.js';
import { CATEGORY_DESCRIPTIONS } from './metadata.js';
import { extractGlobalTokens, extractThemeTokens } from './parser.js';
import { categorizeTokens } from './categorizer.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../../../..');

/**
 * Creates a token category with tokens and description.
 */
function createCategory(name: string, tokens: Token[]): TokenCategory {
  return {
    tokens,
    description: CATEGORY_DESCRIPTIONS[name] || `${name} tokens`,
  };
}

/**
 * Extracts theme-specific tokens with error handling.
 */
function extractThemeWithFallback(theme: string): ThemeTokens | null {
  try {
    return extractThemeTokens(ROOT, theme);
  } catch {
    return null;
  }
}

/**
 * Extracts all design tokens from Chi SCSS files.
 */
export function extractTokens(): DesignTokens {
  console.log('📊 Extracting design tokens...');

  const globalTokens = extractGlobalTokens(ROOT);
  const categorized = categorizeTokens(globalTokens);
  const byTheme: Record<string, ThemeTokens> = {};

  for (const theme of THEMES) {
    const themeTokens = extractThemeWithFallback(theme);

    if (themeTokens) {
      byTheme[theme] = themeTokens;
      console.log(`  ✓ ${theme}`);
    } else {
      console.warn(`  ⚠ ${theme} failed`);
    }
  }

  const tokenCount = Object.values(categorized).reduce((sum, arr) => sum + arr.length, 0);

  console.log(`  ✓ Total: ${tokenCount} tokens across ${Object.keys(categorized).length} categories`);

  return {
    colors: createCategory('colors', categorized.colors),
    typography: createCategory('typography', categorized.typography),
    spacing: createCategory('spacing', categorized.spacing),
    shadows: createCategory('shadows', categorized.shadows),
    breakpoints: createCategory('breakpoints', categorized.breakpoints),
    zIndex: createCategory('zIndex', categorized.zIndex),
    byTheme,
  };
}
