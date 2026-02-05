/**
 * Interoperability Schema
 *
 * Defines the contract between this metadata package and the central
 * Chi MCP repository. This schema ensures compatibility and enables
 * the central repository to properly integrate all three approaches.
 */

import type { Metadata } from '../types/index.js';
import type { InteropMetadata, ComponentEquivalence, CacheManifest } from './types.js';

export const INTEROP_SCHEMA_VERSION = '1.0.0';

export interface McpContract {
  source: 'chi-html-css';
  schemaVersion: string;
  capabilities: McpCapabilities;
  exports: McpExports;
}

/**
 * Capabilities this MCP provides.
 */
export interface McpCapabilities {
  hasTokens: boolean;
  hasUtilities: boolean;
  hasCssComponents: boolean;
  hasWebComponentMappings: boolean;
  hasMigrationRules: boolean;
  hasCrossMcpValidation: boolean;
  hasSearchIndex: boolean;
  hasCaching: boolean;
}

/**
 * What this MCP exports.
 */
export interface McpExports {
  metadata: Metadata;
  interop: InteropMetadata;
  cacheManifest: CacheManifest;
  componentMappings: ComponentEquivalence[];
}

/**
 * Expected interface for the central repository to implement.
 */
export interface CentralRepoInterface {
  /**
   * Register this MCP's metadata.
   */
  registerMcp(contract: McpContract): void;

  /**
   * Get combined recommendations from all MCPs.
   */
  getUnifiedRecommendation(context: unknown): unknown;

  /**
   * Search across all MCPs.
   */
  unifiedSearch(query: string): unknown;

  /**
   * Validate code against all MCP rules.
   */
  validateAllMcps(code: string): unknown;
}

/**
 * Creates the contract for this MCP.
 */
export function createContract(
  metadata: Metadata,
  interop: InteropMetadata,
  cacheManifest: CacheManifest,
  componentMappings: ComponentEquivalence[]
): McpContract {
  return {
    source: 'chi-html-css',
    schemaVersion: INTEROP_SCHEMA_VERSION,
    capabilities: {
      hasTokens: Boolean(metadata.designTokens),
      hasUtilities: Boolean(metadata.utilities),
      hasCssComponents: Boolean(metadata.cssComponents),
      hasWebComponentMappings: componentMappings.length > 0,
      hasMigrationRules: Boolean(metadata.migration),
      hasCrossMcpValidation: Boolean(interop.crossMcpRules.length > 0),
      hasSearchIndex: Boolean(metadata.searchIndex),
      hasCaching: Boolean(cacheManifest),
    },
    exports: {
      metadata,
      interop,
      cacheManifest,
      componentMappings,
    },
  };
}

/**
 * Validates that the contract is complete.
 */
export function validateContract(contract: McpContract): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (contract.source !== 'chi-html-css') {
    errors.push(`Invalid source: expected 'chi-html-css', got '${contract.source}'`);
  }

  if (!contract.schemaVersion) {
    errors.push('Missing schemaVersion');
  }

  if (!contract.exports.metadata) {
    errors.push('Missing metadata export');
  }

  if (!contract.exports.interop) {
    errors.push('Missing interop export');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Schema for the unified tool call from central repository.
 */
export interface UnifiedToolCall {
  tool: string;
  params: Record<string, unknown>;
  targetMcps?: ('vue' | 'custom-elements' | 'html-css')[];
}

/**
 * Schema for unified tool response.
 */
export interface UnifiedToolResponse {
  source: 'chi-html-css';
  success: boolean;
  data?: unknown;
  error?: string;
  suggestions?: string[];
}

/**
 * Handles a unified tool call from the central repository.
 * @param call - Tool call to handle
 * @param _metadata - Metadata (reserved for future use)
 * @returns Unified tool response
 */
export function handleUnifiedToolCall(call: UnifiedToolCall, _metadata: Metadata): UnifiedToolResponse {
  if (call.targetMcps && !call.targetMcps.includes('html-css')) {
    return {
      source: 'chi-html-css',
      success: true,
      data: null,
    };
  }

  return {
    source: 'chi-html-css',
    success: true,
    data: { tool: call.tool, processed: true },
  };
}

/**
 * Event types for cross-MCP communication.
 */
export type McpEventType =
  | 'metadata-updated'
  | 'cache-invalidated'
  | 'recommendation-requested'
  | 'validation-requested'
  | 'search-requested';

/**
 * Event payload for cross-MCP communication.
 */
export interface McpEvent {
  type: McpEventType;
  source: 'chi-html-css';
  timestamp: string;
  payload: unknown;
}

/**
 * Creates an event for cross-MCP communication.
 */
export function createMcpEvent(type: McpEventType, payload: unknown): McpEvent {
  return {
    type,
    source: 'chi-html-css',
    timestamp: new Date().toISOString(),
    payload,
  };
}
