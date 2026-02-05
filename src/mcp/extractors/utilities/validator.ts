/**
 * Utility Class Format Validator
 *
 * Validates that all utility classes follow the correct Chi format.
 * Ensures double-dash syntax (-p--4) and catches common mistakes (-p-4).
 */

import type { UtilityClass, UtilityValidationResult, UtilityFormatError } from '../../types/index.js';
import { UTILITY_FORMAT_PATTERNS } from '../../config/constants.js';

interface ValidationRule {
  pattern: RegExp;
  condition?: (className: string) => boolean;
  getError: (className: string) => UtilityFormatError;
}

const VALIDATION_RULES: ValidationRule[] = [
  {
    pattern: /^-[pmg][trblxy]?-\d+$/,
    getError: (className) => ({
      className,
      expectedFormat: 'Double dash syntax: -p--4',
      actualFormat: 'Single dash syntax: -p-4',
      suggestion: className.replace(/^(-[pmg][trblxy]?)-(\d+)$/, '$1--$2'),
    }),
  },
  {
    pattern: /^-(bg|text)-\w+$/,
    condition: (className) => !className.includes('--'),
    getError: (className) => ({
      className,
      expectedFormat: 'Double dash syntax: -bg--primary',
      actualFormat: 'Single dash syntax: -bg-primary',
      suggestion: className.replace(/^(-(bg|text))-/, '$1--'),
    }),
  },
  {
    pattern: /^-opacity-\d+$/,
    getError: (className) => ({
      className,
      expectedFormat: 'Double dash syntax: -opacity--60',
      actualFormat: 'Single dash syntax: -opacity-60',
      suggestion: className.replace('-opacity-', '-opacity--'),
    }),
  },
  {
    pattern: /["']$/,
    getError: (className) => ({
      className,
      expectedFormat: 'No trailing quotes',
      actualFormat: 'Has trailing quote',
      suggestion: className.replace(/["']$/, ''),
    }),
  },
  {
    pattern: /(^\s)|(\s$)/,
    getError: (className) => ({
      className,
      expectedFormat: 'No leading/trailing whitespace',
      actualFormat: 'Has whitespace',
      suggestion: className.trim(),
    }),
  },
];

/**
 * Validates a single utility class name format.
 */
export function validateUtilityFormat(className: string): { valid: boolean; error?: UtilityFormatError } {
  for (const rule of VALIDATION_RULES) {
    const patternMatches = rule.pattern.test(className);
    const conditionMet = rule.condition ? rule.condition(className) : true;

    if (patternMatches && conditionMet) {
      return { valid: false, error: rule.getError(className) };
    }
  }

  return { valid: true };
}

/**
 * Validates all utility classes and returns detailed results.
 */
export function validateAllUtilities(utilities: UtilityClass[]): UtilityValidationResult {
  const errors: UtilityFormatError[] = [];

  for (const util of utilities) {
    const result = validateUtilityFormat(util.className);

    if (!result.valid && result.error) {
      errors.push(result.error);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Auto-corrects common utility format mistakes.
 */
export function autoCorrectUtilityFormat(className: string): string {
  let corrected = className.trim();

  corrected = corrected.replace(/["']$/, '');
  corrected = corrected.replace(/^(-[pmg][trblxy]?)-(\d+|auto)$/, '$1--$2');
  corrected = corrected.replace(/^(-(bg|text))-(\w)/, '$1--$3');
  corrected = corrected.replace(/^(-opacity)-(\d+)$/, '$1--$2');
  corrected = corrected.replace(/^(-d)-(\w+)$/, '$1--$2');

  return corrected;
}

/**
 * Checks if a utility class matches any known valid pattern.
 */
export function isKnownUtilityPattern(className: string): boolean {
  for (const pattern of Object.values(UTILITY_FORMAT_PATTERNS)) {
    if (pattern.test(className)) {
      return true;
    }
  }

  return false;
}

/**
 * Gets the category of a utility class based on its pattern.
 */
export function getUtilityCategory(className: string): string | null {
  for (const [category, pattern] of Object.entries(UTILITY_FORMAT_PATTERNS)) {
    if (pattern.test(className)) {
      return category;
    }
  }
  return null;
}
