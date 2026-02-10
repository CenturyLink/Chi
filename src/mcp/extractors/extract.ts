import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { CHI_SRC, KNOWN_WC_TAGS, CSS_TO_WC_OVERRIDES } from '../config.js';

const warnings: string[] = [];

export function warn(msg: string): void {
  warnings.push(msg);
  console.warn(`  ⚠️  ${msg}`);
}

export function getWarnings(): string[] {
  return [...warnings];
}

export function resetWarnings(): void {
  warnings.length = 0;
}

export function readFile(path: string): string {
  try {
    return readFileSync(path, 'utf-8');
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;

    if (code === 'ENOENT') warn(`File not found: ${path}`);
    else warn(`Error reading ${path}: ${(err as Error).message}`);

    return '';
  }
}

export function readJSON<T>(path: string): T | null {
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as T;
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;

    if (code === 'ENOENT') warn(`JSON file not found: ${path}`);
    else warn(`Error parsing JSON ${path}: ${(err as Error).message}`);

    return null;
  }
}

/** Returns the Web Component tag for a CSS base class, or null if unknown. */
export function getWcTag(baseClass: string): string | null {
  if (Object.hasOwn(CSS_TO_WC_OVERRIDES, baseClass)) return CSS_TO_WC_OVERRIDES[baseClass]!;
  if (KNOWN_WC_TAGS.has(baseClass)) return baseClass;

  return null;
}

/** Builds a Record<cssClass, wcTag> for all known tags plus override mappings. */
export function buildCssToWcMap(): Record<string, string> {
  const map: Record<string, string> = {};

  for (const tag of KNOWN_WC_TAGS) map[tag] = tag;
  for (const [css, wc] of Object.entries(CSS_TO_WC_OVERRIDES)) map[css] = wc;

  return map;
}

export interface ComponentInfo {
  name: string;
  baseClass: string;
  modifiers: string[];
  subcomponents: string[];
}

/** Deduplicates components by baseClass, merging modifiers and subcomponents. */
export function deduplicateComponents(rawComponents: ComponentInfo[]): ComponentInfo[] {
  const byBase = new Map<string, ComponentInfo>();

  for (const c of rawComponents) {
    const existing = byBase.get(c.baseClass);

    if (existing) {
      existing.modifiers = [...new Set([...existing.modifiers, ...c.modifiers])];
      existing.subcomponents = [...new Set([...existing.subcomponents, ...c.subcomponents])];
    } else {
      byBase.set(c.baseClass, { ...c, modifiers: [...c.modifiers], subcomponents: [...c.subcomponents] });
    }
  }

  return [...byBase.values()];
}

/** Parses SCSS map keys using balanced-paren matching to handle nested parentheses. */
function parseScssMapKeys(content: string, mapName: string): string[] {
  const startRegex = new RegExp(`\\$${mapName}:\\s*\\(`, 's');
  const startMatch = startRegex.exec(content);

  if (!startMatch) return [];

  let depth = 1;
  let i = startMatch.index + startMatch[0].length;
  let mapBody = '';

  while (i < content.length && depth > 0) {
    if (content[i] === '(') depth++;
    else if (content[i] === ')') depth--;
    if (depth > 0) mapBody += content[i];
    i++;
  }

  if (!mapBody) return [];

  return mapBody
    .split(',')
    .map((entry) => entry.split(':')[0]!.trim())
    .filter((key) => key && /^[a-z0-9][a-z0-9-]*$/i.test(key));
}

/**
 * Extracts component info from SCSS files under src/chi/components/.
 * @param mainFileOnly If true, only reads the main SCSS file per component.
 */
export function extractComponents(mainFileOnly = true): ComponentInfo[] {
  const compDir = join(CHI_SRC, 'components');

  if (!existsSync(compDir)) {
    warn(`Components directory not found: ${compDir}`);
    return [];
  }

  const components: ComponentInfo[] = [];
  const dirs = readdirSync(compDir, { withFileTypes: true }).filter((d) => d.isDirectory());

  for (const dir of dirs) {
    const scssFiles = readdirSync(join(compDir, dir.name)).filter((f) => f.endsWith('.scss'));
    const filesToRead = mainFileOnly
      ? ([scssFiles.find((f) => f === `${dir.name}.scss`) ?? scssFiles[0]].filter(Boolean) as string[])
      : scssFiles;

    for (const file of filesToRead) {
      const content = readFile(join(compDir, dir.name, file));
      const baseMatch = content.match(/^\.chi-([a-z-]+)\s*(?:\/\/[^\n]*)?\s*\{/m);

      if (!baseMatch) continue;

      const baseClass = `chi-${baseMatch[1]}`;
      const modifiers: string[] = [];
      const modRegex = /&\.-([a-z0-9][a-z0-9-]*)/g;
      let m;

      while ((m = modRegex.exec(content)) !== null) {
        modifiers.push(`-${m[1]}`);
      }

      const mapModRegex = /&\.-#\{\$([a-z_]+)\}/g;

      while ((m = mapModRegex.exec(content)) !== null) {
        const varName = m[1]!;
        const eachRegex = new RegExp(`@each\\s+\\$${varName}\\s+in\\s+map-keys\\(\\$([a-z0-9_-]+)\\)`, 'i');
        const eachMatch = content.match(eachRegex);

        if (eachMatch) {
          const keys = parseScssMapKeys(content, eachMatch[1]!);

          for (const key of keys) modifiers.push(`-${key}`);
        }
      }

      const subcomponents: string[] = [];
      const subRegex = /&__([a-z0-9-]+)/g;

      while ((m = subRegex.exec(content)) !== null) subcomponents.push(`${baseClass}__${m[1]}`);

      if (modifiers.length === 0 && content.length > 200) {
        warn(`Component "${baseClass}" in ${file} has 0 modifiers — possible parsing issue`);
      }

      components.push({
        name: dir.name,
        baseClass,
        modifiers: [...new Set(modifiers)],
        subcomponents: [...new Set(subcomponents)],
      });
    }
  }

  return components;
}

export interface TokenInfo {
  name: string;
  value: string;
}

/** Extracts SCSS variables from _global-variables.scss. */
export function extractTokens(): TokenInfo[] {
  const content = readFile(join(CHI_SRC, '_global-variables.scss'));
  const tokens: TokenInfo[] = [];
  const regex = /^\$([a-z0-9-_]+):\s*(.+?)\s*(?:!default|!global)?\s*;/gim;
  let m;

  while ((m = regex.exec(content)) !== null) {
    tokens.push({ name: m[1]!, value: m[2]! });
  }

  return tokens;
}

/** Returns the list of utility category names from SCSS filenames. */
export function extractUtilityCategories(): string[] {
  const utilDir = join(CHI_SRC, 'utilities');

  if (!existsSync(utilDir)) {
    warn(`Utilities directory not found: ${utilDir}`);
    return [];
  }

  const categories = readdirSync(utilDir)
    .filter((f) => f.endsWith('.scss'))
    .map((f) => basename(f, '.scss'));

  return [...new Set(categories)];
}
