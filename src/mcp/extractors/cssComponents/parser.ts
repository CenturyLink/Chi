/**
 * SCSS Component Parser
 *
 * Parses SCSS files to extract component structure including
 * base classes, modifiers, and BEM subcomponents.
 */

import { existsSync, readFileSync } from 'fs';

interface ParsedComponent {
  baseClass: string;
  modifiers: string[];
  subcomponents: string[];
}

const COMMON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'sm--2', 'sm--3'] as const;
const COMMON_COLORS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
  'light',
  'dark',
  'muted',
] as const;

/**
 * Extracts modifiers from SCSS @each loops.
 * @param content - SCSS file content
 * @returns Array of modifier names found in @each loops
 */
function extractModifiersFromLoops(content: string): string[] {
  const modifiers: string[] = [];
  const eachMapKeysRegex = /@each\s+\$\w+\s+in\s+map-keys\(\$([a-z-]+)\)/g;
  let match;

  while ((match = eachMapKeysRegex.exec(content)) !== null) {
    const captured = match[1];

    if (!captured) continue;

    const mapName = captured.toLowerCase();

    if (mapName.includes('size') || mapName === 'spinner-sizes' || mapName === 'button-sizes') {
      modifiers.push(...COMMON_SIZES);
    }

    if (mapName.includes('color') || mapName === 'button-colors') {
      modifiers.push(...COMMON_COLORS);
    }
  }

  return modifiers;
}

/**
 * Extracts the base class from SCSS content.
 */
function extractBaseClass(lines: string[]): string {
  for (const line of lines) {
    const match = line.match(/^\.chi-([a-z-]+)\s*\{/);

    if (match) {
      return `chi-${match[1]}`;
    }
  }
  return '';
}

/**
 * Extracts modifier classes from SCSS content.
 */
function extractModifiers(lines: string[]): Set<string> {
  const modifiers = new Set<string>();
  const modifierRegex = /&\.-([a-z0-9-]+)/g;

  for (const line of lines) {
    let match;

    while ((match = modifierRegex.exec(line)) !== null) {
      modifiers.add(`-${match[1]}`);
    }
  }

  return modifiers;
}

/**
 * Extracts BEM subcomponents from SCSS content.
 */
function extractSubcomponents(lines: string[], baseClass: string): Set<string> {
  const subcomponents = new Set<string>();
  const subcompRegex = /&__([a-z0-9-]+)/g;

  for (const line of lines) {
    let match;

    while ((match = subcompRegex.exec(line)) !== null) {
      subcomponents.add(`${baseClass}__${match[1]}`);
    }
  }

  return subcomponents;
}

/**
 * Parses SCSS file to extract component structure.
 * @param filePath - Path to the SCSS file
 * @param _componentName - Component name (unused but kept for consistency)
 * @returns ParsedComponent or null if file cannot be parsed
 */
export function parseScssFile(filePath: string, _componentName: string): ParsedComponent | null {
  if (!existsSync(filePath)) return null;

  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const baseClass = extractBaseClass(lines);

  if (!baseClass) return null;

  const modifiers = extractModifiers(lines);
  const loopModifiers = extractModifiersFromLoops(content);

  for (const mod of loopModifiers) {
    modifiers.add(`-${mod}`);
  }

  const subcomponents = extractSubcomponents(lines, baseClass);

  return {
    baseClass,
    modifiers: Array.from(modifiers).sort(),
    subcomponents: Array.from(subcomponents).sort(),
  };
}
