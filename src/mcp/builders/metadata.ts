/**
 * Metadata Builder
 *
 * Assembles the complete metadata structure from all extracted components.
 * This is the final step in the metadata generation pipeline.
 */

import type {
  Metadata,
  DesignTokens,
  Utilities,
  CSSComponents,
  SearchIndex,
  QualityMetrics,
  Tool,
  RelationshipMap,
  MigrationRules,
  AntiPattern,
  ComponentSchema,
} from '../types/index.js';
import { THEMES, METADATA_FORMAT_VERSION } from '../config/constants.js';
import { GUIDELINES } from '../config/guidelines.js';

/**
 * Parameters for building the complete metadata structure.
 */
export interface BuildMetadataParams {
  version: string;
  designTokens: DesignTokens;
  utilities: Utilities;
  cssComponents: CSSComponents;
  searchIndex: SearchIndex;
  quality: QualityMetrics;
  tools: Tool[];
  antiPatterns: AntiPattern[];
  schemas: Record<string, ComponentSchema>;
  relationships: RelationshipMap;
  migration?: MigrationRules;
}

/**
 * Builds the complete metadata structure from all extracted components.
 * @param params - All metadata components to assemble
 * @returns Complete Metadata object ready for JSON serialization
 */
export function buildMetadata(params: BuildMetadataParams): Metadata {
  const tokenCategoryCount = Object.keys(params.designTokens).length - 1;
  const summary = {
    totalTokenCategories: tokenCategoryCount,
    totalUtilityClasses: params.utilities.totalClasses,
    totalCssComponents: params.cssComponents.totalComponents,
    totalTools: params.tools.length,
    themes: THEMES,
    metadataFormatVersion: METADATA_FORMAT_VERSION,
  };

  const metadata: Metadata = {
    version: params.version,
    generated: new Date().toISOString(),
    description:
      'Chi Design System Metadata - Use with Chi Custom Elements (Web Components) as primary approach, HTML/CSS as fallback',
    summary,
    guidelines: GUIDELINES,
    tools: params.tools,
    designTokens: params.designTokens,
    utilities: params.utilities,
    cssComponents: params.cssComponents,
    searchIndex: params.searchIndex,
    quality: params.quality,
    antiPatterns: params.antiPatterns,
    schemas: params.schemas,
    relationships: params.relationships,
  };

  if (params.migration) {
    metadata.migration = params.migration;
  }

  return metadata;
}
