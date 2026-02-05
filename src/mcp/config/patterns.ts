/**
 * Validation Patterns
 *
 * Centralized regex patterns for utility class validation.
 * Used across multiple modules for consistent validation.
 */

/**
 * Core validation patterns for utility classes.
 * All Chi utilities use DOUBLE DASH syntax.
 */
export const VALIDATION_PATTERNS = {
  spacing: /^-[pmg][trblxy]?--(?:0|1|2|3|4|5|6|7|8|9|10|auto)$/,
  color:
    /^-(bg|text)--(primary|secondary|white|black|navy|grey(?:-\d+)?|muted(?:-light(?:er)?)?|success(?:-light(?:er)?)?|info(?:-light(?:er)?)?|warning(?:-light(?:er)?)?|danger(?:-light(?:er)?)?|none)$/,
  opacity: /^-opacity--(0|20|40|60|80|100)$/,
  display: /^-d--(none|block|inline|inline-block|flex|inline-flex|grid)$/,
  flex: /^-(flex|justify-content|align-items|align-self|flex-wrap|flex-grow|flex-shrink)--[\w-]+$/,
  border: /^-(border|rounded|raindrop|circle)(?:--\d+)?$/,
  typography: /^-text--(bold|normal|light|center|left|right|uppercase|lowercase|capitalize|truncate|nowrap)$/,
  sizing: /^-(w|h|min-w|min-h|max-w|max-h)--(0|25|50|75|100|auto)$/,
  position: /^-(position|top|right|bottom|left)--(static|relative|absolute|fixed|sticky|\d+)$/,
  shadow: /^-shadow--\d+$/,
} as const;

/**
 * Pattern descriptions and examples for documentation.
 */
export const PATTERN_METADATA: Record<
  keyof typeof VALIDATION_PATTERNS,
  {
    description: string;
    examples: string[];
  }
> = {
  spacing: {
    description: 'Spacing utilities: padding, margin, gap',
    examples: ['-p--4', '-mt--2', '-mx--auto', '-g--3'],
  },
  color: {
    description: 'Color utilities: background and text colors',
    examples: ['-bg--primary', '-text--danger', '-bg--success-light'],
  },
  opacity: {
    description: 'Opacity utilities',
    examples: ['-opacity--0', '-opacity--60', '-opacity--100'],
  },
  display: {
    description: 'Display utilities',
    examples: ['-d--flex', '-d--none', '-d--block', '-d--grid'],
  },
  flex: {
    description: 'Flexbox utilities',
    examples: ['-justify-content--center', '-align-items--center', '-flex-wrap--wrap'],
  },
  border: {
    description: 'Border and radius utilities',
    examples: ['-rounded--3', '-border--1', '-circle'],
  },
  typography: {
    description: 'Typography utilities',
    examples: ['-text--bold', '-text--center', '-text--truncate'],
  },
  sizing: {
    description: 'Width and height utilities',
    examples: ['-w--100', '-h--50', '-max-w--100'],
  },
  position: {
    description: 'Position utilities',
    examples: ['-position--relative', '-position--absolute'],
  },
  shadow: {
    description: 'Shadow utilities',
    examples: ['-shadow--1', '-shadow--2', '-shadow--3'],
  },
};

/**
 * Validates a utility class against all patterns.
 */
export function matchesAnyPattern(className: string): boolean {
  return Object.values(VALIDATION_PATTERNS).some((pattern) => pattern.test(className));
}

/**
 * Gets the category of a utility class.
 */
export function getUtilityCategory(className: string): keyof typeof VALIDATION_PATTERNS | null {
  for (const [category, pattern] of Object.entries(VALIDATION_PATTERNS)) {
    if (pattern.test(className)) {
      return category as keyof typeof VALIDATION_PATTERNS;
    }
  }
  return null;
}

/**
 * Serializable version of patterns for JSON export.
 */
export function getPatternsForExport(): Record<string, { source: string; flags: string }> {
  const result: Record<string, { source: string; flags: string }> = {};

  for (const [key, pattern] of Object.entries(VALIDATION_PATTERNS)) {
    result[key] = {
      source: pattern.source,
      flags: pattern.flags,
    };
  }
  return result;
}
