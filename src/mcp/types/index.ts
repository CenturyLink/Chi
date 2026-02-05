/**
 * Chi MCP Metadata Type Definitions
 *
 * This module contains all TypeScript interfaces for the MCP metadata generator.
 * These types ensure type safety across the entire metadata generation pipeline.
 */

/**
 * Root metadata structure containing all Chi Design System information.
 */
export interface Metadata {
  version: string;
  generated: string;
  description: string;
  summary: MetadataSummary;
  guidelines: Guidelines;
  tools: Tool[];
  designTokens: DesignTokens;
  utilities: Utilities;
  cssComponents: CSSComponents;
  searchIndex: SearchIndex;
  quality: QualityMetrics;
  antiPatterns?: AntiPattern[];
  schemas?: Record<string, ComponentSchema>;
  relationships?: RelationshipMap;
  migration?: MigrationRules;
  cache?: CacheInfo;
  changelog?: ChangelogInfo;
}

export interface ChangelogInfo {
  currentVersion: string;
  releaseDate: string;
  recentVersions: ChangelogEntry[];
  totalVersions: number;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: ChangeCategory[];
}

export interface ChangeCategory {
  category: string;
  type: 'Added' | 'Changed' | 'Fixed' | 'Removed' | 'Deprecated';
  items: string[];
}

/**
 * Checksum structure for cache invalidation.
 */
export interface MetadataChecksums {
  tokens: string;
  utilities: string;
  cssComponents: string;
  tools: string;
}

/**
 * Cache information for metadata versioning and invalidation.
 */
export interface CacheInfo {
  checksums: MetadataChecksums;
  ttl?: number;
}

/**
 * Summary statistics for the metadata.
 */
export interface MetadataSummary {
  totalTokenCategories: number;
  totalUtilityClasses: number;
  totalCssComponents: number;
  totalTools: number;
  themes: readonly string[];
  metadataFormatVersion: string;
}

/**
 * Best practices guidelines organized by category.
 */
export interface Guidelines {
  spacing: string[];
  styling: string[];
  components: string[];
  accessibility: string[];
  webComponents: string[];
}

/**
 * Complete design token structure organized by category.
 */
export interface DesignTokens {
  colors: TokenCategory;
  typography: TokenCategory;
  spacing: TokenCategory;
  shadows: TokenCategory;
  breakpoints: TokenCategory;
  zIndex: TokenCategory;
  byTheme: Record<string, ThemeTokens>;
}

/**
 * Token category containing tokens and description.
 */
export interface TokenCategory {
  tokens: Token[];
  description: string;
}

/**
 * Individual design token with metadata.
 */
export interface Token {
  name: string;
  value: string;
  sassVariable: string;
  description?: string;
  examples?: string[];
  category?: string;
}

/**
 * Theme-specific token overrides.
 */
export interface ThemeTokens {
  theme: string;
  tokens: Token[];
}

/**
 * Complete utility class structure.
 */
export interface Utilities {
  categories: UtilityCategory[];
  totalClasses: number;
}

/**
 * Utility category with classes and description.
 */
export interface UtilityCategory {
  name: string;
  description: string;
  classes: UtilityClass[];
}

/**
 * Individual utility class with complete metadata.
 */
export interface UtilityClass {
  className: string;
  description: string;
  cssProperties: CssProperty[];
  responsive: boolean;
  examples?: string[];
  tags?: string[];
  relatedTo?: Relationship;
  performance?: PerformanceHints;
  webComponentEquivalent?: WebComponentMapping;
}

/**
 * CSS property-value pair.
 */
export interface CssProperty {
  property: string;
  value: string;
}

/**
 * Complete CSS component structure.
 */
export interface CSSComponents {
  components: CSSComponent[];
  totalComponents: number;
  categories: string[];
}

/**
 * Individual CSS component with full metadata.
 */
export interface CSSComponent {
  name: string;
  baseClass: string;
  description: string;
  modifiers: string[];
  modifierDescriptions: Record<string, string>;
  subcomponents?: string[];
  schema?: ComponentSchema;
  relatedTo?: Relationship;
  accessibility?: AccessibilityInfo;
  performance?: PerformanceHints;
  category: string;
  example: string;
  webComponentTag?: string;
  webComponentMapping?: WebComponentMapping;
}

/**
 * Accessibility information for components.
 */
export interface AccessibilityInfo {
  requiredRoles?: string[];
  requiredAria?: string[];
  recommendedAria?: string[];
  keyboardSupport?: string;
}

/**
 * Performance hints for optimization.
 */
export interface PerformanceHints {
  requiresJavaScript?: boolean;
  bundleSize?: string;
  causesReflow?: boolean;
  causesRepaint?: boolean;
  optimizations?: string[];
  lazyLoadable?: boolean;
  renderingCost?: 'low' | 'medium' | 'high';
  notes?: string;
}

/**
 * Mapping between CSS classes and Web Component properties.
 */
export interface WebComponentMapping {
  tag: string;
  props: PropertyMapping[];
  events?: EventMapping[];
  slots?: SlotMapping[];
  preferWebComponent: boolean;
  migrationNotes?: string;
}

/**
 * Property mapping from CSS modifier to Web Component prop.
 */
export interface PropertyMapping {
  cssClass: string;
  propName: string;
  propValue: string | boolean;
  description: string;
}

/**
 * Event mapping for Web Components.
 */
export interface EventMapping {
  eventName: string;
  description: string;
}

/**
 * Slot mapping for Web Components.
 */
export interface SlotMapping {
  slotName: string;
  description: string;
}

/**
 * Anti-pattern definition with correction.
 */
export interface AntiPattern {
  bad: string;
  good: string;
  reason: string;
  severity: 'error' | 'warning';
  category: string;
  autoFixable?: boolean;
  webComponentAlternative?: string;
}

/**
 * Component validation schema.
 */
export interface ComponentSchema {
  name: string;
  baseClass: string;
  allowedModifiers: string[];
  requiredModifiers?: string[];
  conflictingModifiers?: string[][];
  maxModifiers?: number;
  requiredAttributes?: string[];
  recommendedAttributes?: string[];
  allowedChildren?: string[];
  requiredParent?: string;
  forbiddenParents?: string[];
  dependencies?: string[];
  recommendedCombinations?: RecommendedCombination[];
  accessibility: ComponentAccessibility;
  webComponentTag?: string;
}

/**
 * Recommended modifier and utility combinations.
 */
export interface RecommendedCombination {
  modifiers: string[];
  utilities?: string[];
  description: string;
  useCase: string;
}

/**
 * Component accessibility requirements.
 */
export interface ComponentAccessibility {
  requiredRoles?: string[];
  requiredAria?: string[];
  keyboardSupport?: string;
  focusManagement?: string;
}

/**
 * Relationship between design system elements.
 */
export interface Relationship {
  tokens?: string[];
  utilities?: string[];
  cssComponents?: string[];
  webComponents?: string[];
  note?: string;
}

/**
 * Complete relationship map for all element types.
 */
export interface RelationshipMap {
  utilities: Record<string, Relationship>;
  components: Record<string, Relationship>;
  tokens: Record<string, Relationship>;
}

/**
 * Search index for semantic search across all elements.
 */
export interface SearchIndex {
  tokens: Record<string, string[]>;
  utilities: Record<string, string[]>;
  cssComponents: Record<string, string[]>;
  webComponents?: Record<string, string[]>;
}

/**
 * Quality metrics tracking documentation completeness.
 */
export interface QualityMetrics {
  tokensWithExamples: number;
  tokensWithDescriptions: number;
  utilitiesWithExamples: number;
  utilitiesWithDescriptions: number;
  cssComponentsWithExamples: number;
  cssComponentsWithDescriptions: number;
  averageDescriptionLength: number;
  totalTokens: number;
  totalUtilities: number;
  totalCssComponents: number;
  coverage: CoverageMetrics;
}

/**
 * Coverage metrics as percentages.
 */
export interface CoverageMetrics {
  documentedModifiers: string;
  tokensWithExamples: string;
  utilitiesWithExamples: string;
}

/**
 * MCP tool definition.
 */
export interface Tool {
  name: string;
  description: string;
  inputSchema: ToolInputSchema;
}

/**
 * Tool input schema following JSON Schema format.
 */
export interface ToolInputSchema {
  type: 'object';
  properties: Record<string, unknown>;
  required?: string[];
}

/**
 * Migration rules for HTML to Web Component conversion.
 */
export interface MigrationRules {
  cssToWebComponent: CssToWebComponentRule[];
  utilityToProperty: UtilityToPropertyRule[];
  deprecatedPatterns: DeprecatedPattern[];
}

/**
 * Rule for migrating CSS component to Web Component.
 */
export interface CssToWebComponentRule {
  cssSelector: string;
  webComponentTag: string;
  propertyMappings: PropertyMapping[];
  example: {
    before: string;
    after: string;
  };
}

/**
 * Rule for migrating utility class to Web Component property.
 */
export interface UtilityToPropertyRule {
  utilityPattern: RegExp | string;
  applicableComponents: string[];
  propertyName: string;
  valueTransform?: (value: string) => string;
}

/**
 * Deprecated pattern with migration guidance.
 */
export interface DeprecatedPattern {
  pattern: string;
  replacement: string;
  reason: string;
  migrationGuide: string;
}

/**
 * Utility class format specification.
 */
export interface UtilityFormat {
  pattern: RegExp;
  description: string;
  examples: string[];
  antiExamples: string[];
}

/**
 * Validation result for utility format checking.
 */
export interface UtilityValidationResult {
  valid: boolean;
  errors: UtilityFormatError[];
}

/**
 * Utility format error details.
 */
export interface UtilityFormatError {
  className: string;
  expectedFormat: string;
  actualFormat: string;
  suggestion: string;
}
