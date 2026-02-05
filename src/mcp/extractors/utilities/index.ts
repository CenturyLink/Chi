/**
 * Utility Class Extractor
 *
 * Main entry point for extracting all utility classes from Chi SCSS files.
 * Orchestrates generators for dynamic utilities and parser for static ones.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Utilities, UtilityCategory, UtilityClass } from '../../types/index.js';
import { CATEGORIES } from './categories.js';
import { generateSpacingClasses } from './spacing.js';
import { generateColorClasses } from './color.js';
import { generateOpacityClasses } from './opacity.js';
import { parseUtilityClasses } from './parser.js';
import { validateAllUtilities } from './validator.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../../../..');

type GeneratorType = 'spacing' | 'color' | 'opacity';

const GENERATORS: Record<GeneratorType, () => UtilityClass[]> = {
  spacing: generateSpacingClasses,
  color: generateColorClasses,
  opacity: generateOpacityClasses,
};

/**
 * Routes to appropriate parser based on category type.
 */
function getClassesForCategory(content: string, category: string): UtilityClass[] {
  if (category in GENERATORS) {
    return GENERATORS[category as GeneratorType]();
  }

  return parseUtilityClasses(content, category);
}

/**
 * Processes a single SCSS utility file.
 */
function processUtilityFile(filePath: string, baseName: string): { category: UtilityCategory; count: number } | null {
  const categoryInfo = CATEGORIES[baseName];

  if (!categoryInfo) return null;

  try {
    const content = readFileSync(filePath, 'utf-8');
    const classes = getClassesForCategory(content, baseName);

    if (classes.length === 0) return null;

    return {
      category: {
        name: categoryInfo.name,
        description: categoryInfo.description,
        classes,
      },
      count: classes.length,
    };
  } catch {
    return null;
  }
}

/**
 * Extracts all utility classes from Chi SCSS files with validation.
 */
export function extractUtilities(): Utilities {
  console.log('🎨 Extracting utilities...');

  const utilitiesPath = join(ROOT, 'src/chi/utilities');
  const files = readdirSync(utilitiesPath).filter((f) => f.endsWith('.scss'));
  const categories: UtilityCategory[] = [];
  let totalClasses = 0;

  for (const file of files) {
    const baseName = file.replace('.scss', '');
    const result = processUtilityFile(join(utilitiesPath, file), baseName);

    if (result) {
      categories.push(result.category);
      totalClasses += result.count;
      console.log(`  ✓ ${file} (${result.count})`);
    }
  }

  const allClasses = categories.flatMap((cat) => cat.classes);
  const validation = validateAllUtilities(allClasses);

  if (!validation.valid) {
    console.warn(`  ⚠ Found ${validation.errors.length} format issues:`);
    validation.errors.slice(0, 5).forEach((err) => {
      console.warn(`    - ${err.className}: ${err.suggestion}`);
    });
  }

  console.log(`  ✓ Total: ${totalClasses} utility classes`);

  return { categories, totalClasses };
}

export { validateAllUtilities, validateUtilityFormat } from './validator.js';
