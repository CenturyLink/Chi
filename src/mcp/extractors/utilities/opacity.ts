/**
 * Opacity Utility Generator
 *
 * Generates opacity utility classes using Chi design system
 * opacity tokens with proper double-dash syntax.
 */

import type { UtilityClass } from '../../types/index.js';

const OPACITY_LEVELS = ['0', '20', '40', '60', '80', '100'] as const;
const OPACITY_USE_CASES: Record<string, string> = {
  '0': 'Fully transparent - hide without removing from layout',
  '20': 'Very subtle - watermarks, ghost elements',
  '40': 'Light transparency - disabled states, placeholders',
  '60': 'Medium transparency - overlays, loading states',
  '80': 'Slight transparency - hover states, secondary content',
  '100': 'Fully opaque - default state',
};

/**
 * Creates an opacity utility class.
 */
function createOpacityClass(level: string): UtilityClass {
  const value = parseInt(level) / 100;
  const useCase = OPACITY_USE_CASES[level];

  return {
    className: `-opacity--${level}`,
    description: `Opacity: ${value} (${level}%). ${useCase}. Combine with -bg--* or -text--* for layered effects. Supports hover: and group-hover: variants.`,
    cssProperties: [{ property: 'opacity', value: value.toString() }],
    responsive: false,
    examples: [
      `<div class="-opacity--${level}">Semi-transparent element</div>`,
      `<div class="-bg--primary -opacity--${level}">Transparent background</div>`,
      `<button class="-opacity--60 hover:-opacity--100">Fade in on hover</button>`,
    ],
  };
}

/**
 * Generates all opacity utility classes.
 */
export function generateOpacityClasses(): UtilityClass[] {
  return OPACITY_LEVELS.map(createOpacityClass);
}
