/**
 * Chi MCP HTML/CSS Metadata
 * Main export file for integration with the central Chi MCP repository.
 */

export type {
  Metadata,
  MetadataChecksums,
  CacheInfo,
  DesignTokens,
  Utilities,
  CSSComponents,
  Token,
  UtilityClass,
  CSSComponent,
  Tool,
  AntiPattern,
  ComponentSchema,
  SearchIndex,
  QualityMetrics,
  MigrationRules,
  WebComponentMapping,
  PropertyMapping,
} from './types/index.js';

export type {
  ChiApproach,
  ProjectContext,
  RecommendationResult,
  ComponentEquivalence,
  InteropMetadata,
  CacheManifest,
  SerializableCrossMcpRule,
} from './interop/types.js';

export { extractTokens } from './extractors/tokens/index.js';
export { extractUtilities, validateAllUtilities } from './extractors/utilities/index.js';
export { extractCSSComponents } from './extractors/cssComponents/index.js';
export { buildMetadata } from './builders/metadata.js';
export { buildSearchIndex } from './builders/searchIndex.js';
export { calculateQualityMetrics } from './builders/quality.js';
export { applyPerformanceMetadata } from './builders/performance.js';
export { ANTI_PATTERNS, ANTI_PATTERNS_BY_CATEGORY, getWebComponentSuggestions } from './validation/antiPatterns.js';
export { COMPONENT_SCHEMAS, UTILITY_SCHEMAS, validateComponent, validateUtility } from './validation/schemas.js';

export {
  UTILITY_RELATIONSHIPS,
  COMPONENT_RELATIONSHIPS,
  TOKEN_RELATIONSHIPS,
  getRelatedElements,
  suggestRelated,
} from './validation/relationships.js';

export {
  validateAndMigrate,
  mapModifiersToProps,
  generateWebComponentHtml,
  createMigrationRules,
} from './validation/migration.js';

export {
  CROSS_MCP_RULES,
  validateCrossMcp,
  applyAutoFixes,
  getRulesForMcp,
  exportRulesForCentralRepo,
  type CrossMcpConflict,
  type CrossMcpValidationResult,
  type DetectedConflict,
} from './validation/crossMcp.js';

export { recommend, detectApproach, getMigrationPath, RECOMMENDATION_CONDITIONS } from './interop/recommendation.js';

export {
  createComponentMappings,
  exportForCentralRepo,
  exportLightweightIndex,
  exportSearchKeywords,
  createMetadataDiff,
  validateForCentralRepo,
  getRequiredSections,
  generateCacheManifest,
} from './interop/exports.js';

export { THEMES, CSS_TO_WEB_COMPONENT_MAP, MODIFIER_TO_PROP_MAP, UTILITY_FORMAT_PATTERNS } from './config/constants.js';
export { GUIDELINES } from './config/guidelines.js';
export { TOOLS } from './tools/index.js';
export { getVersion, extractKeywords, addToIndex, hashData, createChecksums, logger } from './utils/helpers.js';
