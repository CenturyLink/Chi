/**
 * Metadata Exports
 *
 * Provides functions to export metadata in formats suitable for
 * the central Chi MCP repository and other consumers.
 */

import type { Metadata } from '../types/index.js';
import type { InteropMetadata, ComponentEquivalence, CacheManifest, SerializableCrossMcpRule } from './types.js';
import { RECOMMENDATION_CONDITIONS } from './recommendation.js';
import { CROSS_MCP_RULES } from '../validation/crossMcp.js';
import { CSS_TO_WEB_COMPONENT_MAP, MODIFIER_TO_PROP_MAP } from '../config/constants.js';
import { hashData } from '../utils/helpers.js';

/**
 * Serializes cross-MCP rules for JSON export.
 * Converts RegExp patterns to string format.
 */
function serializeCrossMcpRules(): SerializableCrossMcpRule[] {
  return CROSS_MCP_RULES.map((rule) => ({
    id: rule.id,
    pattern: rule.pattern.source,
    flags: rule.pattern.flags,
    description: rule.description,
    severity: rule.severity,
    affectedMcps: rule.affectedMcps,
    suggestion: rule.suggestion,
    autoFixable: rule.autoFixable,
  }));
}

/**
 * Creates component equivalence mappings for cross-MCP integration.
 */
export function createComponentMappings(): ComponentEquivalence[] {
  const mappings: ComponentEquivalence[] = [];

  for (const [cssClass, ceTag] of Object.entries(CSS_TO_WEB_COMPONENT_MAP)) {
    const modifiers = MODIFIER_TO_PROP_MAP[cssClass] || {};

    mappings.push({
      name: cssClass.replace('chi-', ''),
      customElement: {
        tag: ceTag,
        props: Object.entries(modifiers).reduce(
          (acc, [mod, mapping]) => {
            acc[mod] = `${mapping.prop}="${mapping.value}"`;
            return acc;
          },
          {} as Record<string, string>
        ),
      },
      htmlCss: {
        baseClass: cssClass,
        modifiers: Object.keys(modifiers),
      },
    });
  }

  return mappings;
}

/**
 * Exports metadata in the interop format for the central repository.
 * RegExp patterns are serialized to strings for JSON compatibility.
 */
export function exportForCentralRepo(metadata: Metadata): InteropMetadata {
  return {
    source: 'chi-html-css',
    version: metadata.version,
    componentMappings: createComponentMappings(),
    crossMcpRules: serializeCrossMcpRules(),
    recommendations: {
      defaultApproach: 'custom-elements',
      conditions: RECOMMENDATION_CONDITIONS,
    },
  };
}

/**
 * Generates a cache manifest for metadata versioning.
 */
export function generateCacheManifest(metadata: Metadata): CacheManifest {
  return {
    version: metadata.version,
    generated: metadata.generated,
    checksums: {
      tokens: hashData(metadata.designTokens),
      utilities: hashData(metadata.utilities),
      cssComponents: hashData(metadata.cssComponents),
      tools: hashData(metadata.tools),
    },
    counts: {
      tokens: metadata.quality.totalTokens,
      utilities: metadata.quality.totalUtilities,
      cssComponents: metadata.quality.totalCssComponents,
      tools: metadata.tools.length,
    },
  };
}

/**
 * Exports a lightweight index for quick lookups.
 */
export function exportLightweightIndex(metadata: Metadata): {
  version: string;
  counts: {
    tokens: number;
    utilities: number;
    cssComponents: number;
    tools: number;
  };
  componentTags: string[];
  utilityPrefixes: string[];
} {
  return {
    version: metadata.version,
    counts: {
      tokens: metadata.quality.totalTokens,
      utilities: metadata.quality.totalUtilities,
      cssComponents: metadata.quality.totalCssComponents,
      tools: metadata.tools.length,
    },
    componentTags: Object.values(CSS_TO_WEB_COMPONENT_MAP),
    utilityPrefixes: ['-p--', '-m--', '-g--', '-bg--', '-text--', '-opacity--', '-d--', '-rounded--'],
  };
}

/**
 * Exports search keywords for the central repository's unified search.
 */
export function exportSearchKeywords(metadata: Metadata): {
  source: 'chi-html-css';
  keywords: Record<string, string[]>;
} {
  return {
    source: 'chi-html-css',
    keywords: {
      ...metadata.searchIndex.tokens,
      ...metadata.searchIndex.utilities,
      ...metadata.searchIndex.cssComponents,
    },
  };
}

type ChangeType = 'added' | 'removed' | 'modified';

interface SectionChange {
  section: string;
  type: ChangeType;
  count: number;
}

function calculateSectionChange(section: string, oldCount: number, newCount: number): SectionChange | null {
  if (newCount === oldCount) return null;

  return {
    section,
    type: newCount > oldCount ? 'added' : 'removed',
    count: Math.abs(newCount - oldCount),
  };
}

/**
 * Creates a diff between two metadata versions.
 * Useful for the central repository to track changes.
 */
export function createMetadataDiff(
  oldMetadata: Metadata,
  newMetadata: Metadata
): {
  version: { old: string; new: string };
  changes: SectionChange[];
} {
  const sectionCounts: Array<{ section: string; oldCount: number; newCount: number }> = [
    {
      section: 'utilities',
      oldCount: oldMetadata.quality.totalUtilities,
      newCount: newMetadata.quality.totalUtilities,
    },
    {
      section: 'cssComponents',
      oldCount: oldMetadata.quality.totalCssComponents,
      newCount: newMetadata.quality.totalCssComponents,
    },
    { section: 'tools', oldCount: oldMetadata.tools.length, newCount: newMetadata.tools.length },
  ];

  const changes = sectionCounts
    .map(({ section, oldCount, newCount }) => calculateSectionChange(section, oldCount, newCount))
    .filter((change): change is SectionChange => change !== null);

  return {
    version: { old: oldMetadata.version, new: newMetadata.version },
    changes,
  };
}

/**
 * Validates that the metadata is compatible with the central repository.
 */
export function validateForCentralRepo(metadata: Metadata): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!metadata.version) errors.push('Missing version field');
  if (!metadata.generated) errors.push('Missing generated timestamp');
  if (!metadata.tools || metadata.tools.length === 0) errors.push('No tools defined');
  if (!metadata.utilities) errors.push('Missing utilities section');
  if (!metadata.cssComponents) errors.push('Missing cssComponents section');
  if (metadata.quality.totalUtilities === 0) warnings.push('No utilities found');
  if (metadata.quality.totalCssComponents === 0) warnings.push('No CSS components found');
  if (!metadata.searchIndex) warnings.push('Missing searchIndex - search functionality will be limited');
  if (!metadata.antiPatterns) warnings.push('Missing antiPatterns - validation will be limited');
  if (!metadata.schemas) warnings.push('Missing schemas - component validation will be limited');
  if (!metadata.migration) warnings.push('Missing migration rules - migration suggestions will be limited');

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

const DEFAULT_REQUIRED_SECTIONS = ['tools', 'cssComponents', 'utilities'];

/**
 * Gets the sections required for a specific operation.
 * @param operation - Operation type
 * @returns Array of required section names
 */
export function getRequiredSections(operation: string): string[] {
  const requirements: Record<string, string[]> = {
    search: ['searchIndex'],
    validate: ['antiPatterns', 'schemas', 'utilities'],
    recommend: ['tools', 'cssComponents', 'utilities'],
    generate: ['utilities', 'cssComponents', 'tokens'],
    migrate: ['migration', 'schemas', 'cssComponents'],
    full: ['all'],
  };

  return requirements[operation] ?? DEFAULT_REQUIRED_SECTIONS;
}
