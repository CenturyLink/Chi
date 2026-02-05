/**
 * Interoperability Types
 *
 * Shared types for communication between Chi MCPs.
 * These types should be kept in sync with the central repository.
 */

/**
 * Available Chi implementation approaches.
 */
export type ChiApproach = 'vue' | 'custom-elements' | 'html-css';

/**
 * Project context for making recommendations.
 */
export interface ProjectContext {
  framework?: 'vue' | 'react' | 'angular' | 'svelte' | 'vanilla' | 'unknown';
  frameworkVersion?: string;
  typescript?: boolean;
  browserSupport?: 'modern' | 'legacy';
  existingApproach?: ChiApproach;
  preferences?: {
    preferWebComponents?: boolean;
    preferCssOnly?: boolean;
  };
}

/**
 * Recommendation result from the unified tool.
 */
export interface RecommendationResult {
  primary: ChiApproach;
  fallback: ChiApproach;
  reasoning: string[];
  confidence: 'high' | 'medium' | 'low';
  codeExamples: {
    approach: ChiApproach;
    code: string;
    note?: string;
  }[];
}

/**
 * Component equivalence across MCPs.
 */
export interface ComponentEquivalence {
  name: string;
  vue?: {
    component: string;
    props: Record<string, string>;
  };
  customElement?: {
    tag: string;
    props: Record<string, string>;
  };
  htmlCss?: {
    baseClass: string;
    modifiers: string[];
  };
}

/**
 * Interop metadata format for the central repository.
 */
export interface InteropMetadata {
  source: 'chi-html-css';
  version: string;
  componentMappings: ComponentEquivalence[];
  crossMcpRules: unknown[];
  recommendations: {
    defaultApproach: ChiApproach;
    conditions: RecommendationCondition[];
  };
}

/**
 * Condition for approach recommendation.
 */
export interface RecommendationCondition {
  when: Partial<ProjectContext>;
  recommend: ChiApproach;
  reasoning: string;
}

/**
 * Cache manifest for metadata versioning.
 */
export interface CacheManifest {
  version: string;
  generated: string;
  checksums: {
    tokens: string;
    utilities: string;
    cssComponents: string;
    tools: string;
  };
  counts: {
    tokens: number;
    utilities: number;
    cssComponents: number;
    tools: number;
  };
}

/**
 * Serializable cross-MCP rule (RegExp converted to string).
 */
export interface SerializableCrossMcpRule {
  id: string;
  pattern: string;
  flags: string;
  description: string;
  severity: 'error' | 'warning' | 'info';
  affectedMcps: ('vue' | 'custom-elements' | 'html-css')[];
  suggestion: string;
  autoFixable: boolean;
}
