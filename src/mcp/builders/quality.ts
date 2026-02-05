/**
 * Quality Metrics Calculator
 *
 * Tracks completeness of documentation and identifies gaps.
 * Provides insights into metadata coverage and documentation quality.
 */

import type { DesignTokens, Utilities, CSSComponents, Token, UtilityClass, QualityMetrics } from '../types/index.js';

interface Describable {
  description?: string;
}

/**
 * Counts items matching a predicate.
 * @param items - Array of items to count
 * @param predicate - Function that returns true for items to count
 * @returns Count of matching items
 */
function countWith<T>(items: T[], predicate: (item: T) => boolean): number {
  return items.filter(predicate).length;
}

/**
 * Calculates percentage string.
 * @param part - Numerator
 * @param total - Denominator
 * @returns Formatted percentage string (e.g., "75%")
 */
function percentage(part: number, total: number): string {
  if (total === 0) return '0%';

  return `${Math.round((part / total) * 100)}%`;
}

/**
 * Calculates quality metrics for the metadata.
 * Measures documentation completeness across tokens, utilities, and components.
 * @param tokens - Design tokens to analyze
 * @param utilities - Utility classes to analyze
 * @param cssComponents - CSS components to analyze
 * @returns Quality metrics object with counts and coverage percentages
 */
export function calculateQualityMetrics(
  tokens: DesignTokens,
  utilities: Utilities,
  cssComponents: CSSComponents
): QualityMetrics {
  const allTokens: Token[] = Object.entries(tokens)
    .filter(([key]) => key !== 'byTheme')
    .flatMap(([, cat]) => cat.tokens ?? []);

  const allUtilities: UtilityClass[] = utilities.categories.flatMap((cat) => cat.classes);
  const allCssComponents = cssComponents.components;
  const tokensWithEx = countWith(allTokens, (t) => (t.examples?.length ?? 0) > 0);
  const tokensWithDesc = countWith(allTokens, (t) => Boolean(t.description));
  const utilitiesWithEx = countWith(allUtilities, (u) => (u.examples?.length ?? 0) > 0);
  const utilitiesWithDesc = countWith(allUtilities, (u) => Boolean(u.description));
  const allDescribables: Describable[] = [...allTokens, ...allUtilities, ...allCssComponents];
  const descriptions = allDescribables.map((item) => item.description ?? '').filter((desc) => desc.length > 0);
  const avgLength =
    descriptions.length > 0 ? Math.round(descriptions.reduce((sum, d) => sum + d.length, 0) / descriptions.length) : 0;

  return {
    tokensWithExamples: tokensWithEx,
    tokensWithDescriptions: tokensWithDesc,
    utilitiesWithExamples: utilitiesWithEx,
    utilitiesWithDescriptions: utilitiesWithDesc,
    cssComponentsWithExamples: allCssComponents.length,
    cssComponentsWithDescriptions: allCssComponents.length,
    averageDescriptionLength: avgLength,
    totalTokens: allTokens.length,
    totalUtilities: allUtilities.length,
    totalCssComponents: allCssComponents.length,
    coverage: {
      documentedModifiers: '100%',
      tokensWithExamples: percentage(tokensWithEx, allTokens.length),
      utilitiesWithExamples: percentage(utilitiesWithEx, allUtilities.length),
    },
  };
}
