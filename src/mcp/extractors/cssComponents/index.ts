/**
 * CSS Component Extractor
 *
 * Extracts CSS component information from SCSS files automatically.
 * Scans component directories and parses SCSS for base classes, modifiers, and subcomponents.
 */

import { existsSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import type { CSSComponent } from '../../types/index.js';
import { CSS_TO_WEB_COMPONENT_MAP } from '../../config/constants.js';
import { COMPONENT_DESCRIPTIONS, getCategoryForComponent } from './metadata.js';
import { generateModifierDescriptions, generateExample } from './generators.js';
import { parseScssFile } from './parser.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = join(__dirname, '../../../../src/chi/components');

/**
 * Gets the Web Component tag for a CSS component if available.
 * @param baseClass - CSS base class name
 * @returns Web Component tag or undefined
 */
function getWebComponentTag(baseClass: string): string | undefined {
  return CSS_TO_WEB_COMPONENT_MAP[baseClass];
}

/**
 * Processes a single component directory.
 * @param componentName - Name of the component directory
 * @returns CSSComponent or null if processing fails
 */
function processComponentDirectory(componentName: string): CSSComponent | null {
  const componentPath = join(COMPONENTS_DIR, componentName);

  if (!existsSync(componentPath)) return null;

  const scssFiles = readdirSync(componentPath).filter((file) => file.endsWith('.scss') && !file.startsWith('_'));

  if (scssFiles.length === 0) return null;

  const mainFile = scssFiles.find((f) => f === `${componentName}.scss`) ?? scssFiles[0];

  if (!mainFile) return null;

  const scssPath = join(componentPath, mainFile);
  const parsed = parseScssFile(scssPath, componentName);

  if (!parsed) return null;

  const modifierDescriptions = generateModifierDescriptions(parsed.modifiers);
  const webComponentTag = getWebComponentTag(parsed.baseClass);

  return {
    name: componentName,
    baseClass: parsed.baseClass,
    description: COMPONENT_DESCRIPTIONS[componentName] ?? `${componentName} component`,
    modifiers: parsed.modifiers,
    modifierDescriptions,
    subcomponents: parsed.subcomponents.length > 0 ? parsed.subcomponents : undefined,
    example: generateExample(componentName, parsed.baseClass),
    category: getCategoryForComponent(componentName),
    webComponentTag,
  };
}

/**
 * Extracts CSS component information from SCSS files.
 * Scans the components directory and parses each component's SCSS.
 * @returns Array of CSS components sorted alphabetically by name
 */
export function extractCSSComponents(): CSSComponent[] {
  if (!existsSync(COMPONENTS_DIR)) {
    console.warn(`Components directory not found: ${COMPONENTS_DIR}`);

    return [];
  }

  const componentDirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const components: CSSComponent[] = [];

  for (const componentName of componentDirs) {
    const component = processComponentDirectory(componentName);

    if (component) {
      components.push(component);
    }
  }

  return components.sort((a, b) => a.name.localeCompare(b.name));
}
