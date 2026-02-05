/**
 * Color Utility Generator
 *
 * Generates background and text color utility classes using
 * Chi design system color tokens with proper double-dash syntax.
 */

import type { UtilityClass } from '../../types/index.js';

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
  'grey-80',
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
] as const;

const COLOR_USE_CASES: Record<string, string> = {
  primary: 'Main brand color - primary actions, headers',
  secondary: 'Secondary actions, subtle emphasis',
  white: 'Light backgrounds, text on dark',
  black: 'Dark backgrounds, high contrast text',
  navy: 'Dark brand color - headers, footers',
  grey: 'Neutral backgrounds, borders',
  muted: 'Subtle backgrounds, disabled states',
  success: 'Success states, confirmations',
  info: 'Informational messages, tips',
  warning: 'Warning states, caution messages',
  danger: 'Error states, destructive actions',
  none: 'Remove background',
};

const COLOR_COMBINATIONS: Record<string, string> = {
  primary: 'Combine with -text--white for buttons',
  success: 'Use -success-light for backgrounds, -success for borders',
  danger: 'Pair with -text--white for error buttons',
  white: 'Use with -text--black or -text--navy',
  black: 'Use with -text--white for high contrast',
};

/**
 * Gets use case description for a color.
 * @param color - Color name
 * @returns Use case description
 */
function getUseCase(color: string): string {
  const baseColor = color.split('-')[0];

  return COLOR_USE_CASES[color] ?? (baseColor ? COLOR_USE_CASES[baseColor] : undefined) ?? `${color} color`;
}

/**
 * Creates a background color utility class.
 * @param color - Color name
 * @returns UtilityClass for background color
 */
function createBackgroundClass(color: string): UtilityClass {
  const useCase = getUseCase(color);
  const combo = COLOR_COMBINATIONS[color] ?? '';
  const comboHint = combo ? ` Tip: ${combo}.` : '';

  return {
    className: `-bg--${color}`,
    description: `Background color: ${color}. ${useCase}.${comboHint} Supports hover: and focus: variants.`,
    cssProperties: [{ property: 'background-color', value: `var(--chi-color-${color})` }],
    responsive: false,
    examples: [
      `<div class="-bg--${color}">Background ${color}</div>`,
      `<button class="-bg--${color} hover:-bg--${color}-light">With hover state</button>`,
    ],
  };
}

/**
 * Creates a text color utility class.
 * @param color - Color name
 * @returns UtilityClass for text color
 */
function createTextClass(color: string): UtilityClass {
  const useCase = getUseCase(color);
  const combo = COLOR_COMBINATIONS[color] ?? '';
  const comboHint = combo ? ` Tip: ${combo}.` : '';

  return {
    className: `-text--${color}`,
    description: `Text color: ${color}. ${useCase}.${comboHint} Ensure WCAG contrast ratios.`,
    cssProperties: [{ property: 'color', value: `var(--chi-color-${color})` }],
    responsive: false,
    examples: [
      `<p class="-text--${color}">Text in ${color}</p>`,
      `<a class="-text--${color} hover:-text--${color}-light">Link with hover</a>`,
    ],
  };
}

/**
 * Generates all color utility classes for backgrounds and text.
 */
export function generateColorClasses(): UtilityClass[] {
  const classes: UtilityClass[] = [];

  for (const color of COLORS) {
    classes.push(createBackgroundClass(color));

    if (color !== 'none') {
      classes.push(createTextClass(color));
    }
  }

  return classes;
}
