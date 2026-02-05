/**
 * Token Parser
 *
 * Parses SCSS variable definitions and extracts token information.
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import type { Token, ThemeTokens } from '../../types/index.js';
import { TOKEN_DESCRIPTIONS, TOKEN_EXAMPLES } from './metadata.js';

const VARIABLE_REGEX = /^\$([a-z0-9-_]+):\s*(.+?)\s*;/i;
const MAX_THEME_TOKENS = 50;

/**
 * Parses a SCSS variable line and extracts token information.
 * @param line - Single line from SCSS file
 * @returns Token object or null if line is not a valid variable
 */
export function parseVariable(line: string): Token | null {
  const match = line.match(VARIABLE_REGEX);

  if (!match) return null;

  const name = match[1];
  const value = match[2];

  if (!name || !value) return null;
  if (value.includes('(') && !value.includes('rgb')) return null;

  return {
    name,
    value: value.trim(),
    sassVariable: `$${name}`,
    description: TOKEN_DESCRIPTIONS[name],
    examples: TOKEN_EXAMPLES[name],
  };
}

/**
 * Extracts tokens from a SCSS file.
 * @param filePath - Path to SCSS file
 * @returns Array of tokens found in the file
 * @throws Error if file cannot be read
 */
function extractTokensFromFile(filePath: string): Token[] {
  if (!existsSync(filePath)) {
    throw new Error(`SCSS file not found: ${filePath}`);
  }

  const content = readFileSync(filePath, 'utf-8');

  return content
    .split('\n')
    .map(parseVariable)
    .filter((token): token is Token => token !== null);
}

/**
 * Extracts tokens from global variables file.
 * @param rootPath - Root path of the project
 * @returns Array of global tokens
 */
export function extractGlobalTokens(rootPath: string): Token[] {
  const path = join(rootPath, 'src/chi/_global-variables.scss');

  return extractTokensFromFile(path);
}

/**
 * Extracts theme-specific token overrides.
 * @param rootPath - Root path of the project
 * @param theme - Theme name to extract tokens for
 * @returns Theme tokens object with theme name and tokens array
 */
export function extractThemeTokens(rootPath: string, theme: string): ThemeTokens {
  const path = join(rootPath, `src/chi/themes/${theme}/_variables.scss`);
  const tokens = extractTokensFromFile(path).slice(0, MAX_THEME_TOKENS);

  return { theme, tokens };
}
