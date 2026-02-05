/**
 * Spacing Utility Generator
 *
 * Generates padding, margin, and gap utility classes following
 * the Chi 8px grid system with proper double-dash syntax.
 */

import type { UtilityClass } from '../../types/index.js';

const SPACING_TYPES = [
  { prefix: 'p', property: 'padding', desc: 'Padding' },
  { prefix: 'm', property: 'margin', desc: 'Margin' },
  { prefix: 'g', property: 'gap', desc: 'Gap' },
] as const;

const POSITIONS = [
  { suffix: '', desc: 'all sides' },
  { suffix: 't', property: '-top', desc: 'top' },
  { suffix: 'r', property: '-right', desc: 'right' },
  { suffix: 'b', property: '-bottom', desc: 'bottom' },
  { suffix: 'l', property: '-left', desc: 'left' },
  { suffix: 'x', property: '-left and -right', desc: 'horizontal' },
  { suffix: 'y', property: '-top and -bottom', desc: 'vertical' },
] as const;

const SPACING_VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;

const USE_CASES: Record<string, string> = {
  p: 'Inner spacing for cards, buttons, containers',
  m: 'Outer spacing between elements, sections',
  g: 'Space between flex/grid children (GLOBAL UTILITY)',
};

const SIZE_CONTEXT: Record<string, string> = {
  '0': 'Remove spacing',
  '1': 'Tight spacing (4px) - compact UIs',
  '2': 'Small spacing (8px) - base unit',
  '3': 'Medium spacing (12px) - default',
  '4': 'Large spacing (16px) - common for cards',
  '5': 'Extra large (20px) - section spacing',
  '6': 'XXL spacing (24px) - major sections',
  '7': '28px - large component spacing',
  '8': '32px - hero sections',
  '9': '36px - major layout spacing',
  '10': '40px - maximum spacing',
  auto: 'Auto spacing - centering',
};

/**
 * Creates a single spacing utility class with full metadata.
 */
function createSpacingClass(
  type: (typeof SPACING_TYPES)[number],
  position: (typeof POSITIONS)[number],
  value: string
): UtilityClass {
  const className = `-${type.prefix}${position.suffix}--${value}`;
  const isAuto = value === 'auto';
  const remValue = isAuto ? 'auto' : `${parseInt(value) / 2}rem`;
  const pxValue = isAuto ? 'auto' : `${parseInt(value) * 4}px`;
  const useCase = USE_CASES[type.prefix];
  const context = SIZE_CONTEXT[value] || `${pxValue} spacing`;
  const gapNote =
    type.prefix === 'g' ? ' [GLOBAL UTILITY - Not to be confused with chi-css-grid component modifier -gap--X]' : '';
  const cssProperty = position.suffix ? `${type.property}${position.property}` : type.property;

  return {
    className,
    description: `${type.desc} ${position.desc}: ${pxValue}. ${context}. Use case: ${useCase}. Responsive: Add md:, lg:, xl: prefix for breakpoints.${gapNote}`,
    cssProperties: [{ property: cssProperty, value: remValue }],
    responsive: true,
    examples: generateSpacingExamples(className, type.desc, value),
  };
}

/**
 * Generates usage examples for spacing utilities.
 */
function generateSpacingExamples(className: string, desc: string, value: string): string[] {
  const examples = [`<div class="${className}">Basic ${desc}</div>`];

  if (value !== 'auto' && parseInt(value) < 8) {
    const nextValue = Math.min(parseInt(value) + 2, 10);

    examples.push(
      `<div class="${className} md:${className.replace(`--${value}`, `--${nextValue}`)}">Responsive ${desc}</div>`
    );
  }

  return examples;
}

/**
 * Determines which positions are valid for a given spacing type.
 */
function isValidPosition(type: (typeof SPACING_TYPES)[number], position: (typeof POSITIONS)[number]): boolean {
  if (type.prefix === 'g') {
    return ['', 'x', 'y'].includes(position.suffix);
  }

  return true;
}

/**
 * Generates all spacing utility classes for padding, margin, and gap.
 */
export function generateSpacingClasses(): UtilityClass[] {
  const classes: UtilityClass[] = [];

  for (const type of SPACING_TYPES) {
    for (const position of POSITIONS) {
      if (!isValidPosition(type, position)) continue;

      for (const value of SPACING_VALUES) {
        classes.push(createSpacingClass(type, position, value));
      }

      if (type.prefix === 'm') {
        classes.push(createSpacingClass(type, position, 'auto'));
      }
    }
  }

  return classes;
}
