/**
 * Types for Chi CSS Custom Properties generator.
 */

export type Theme = 'lumen' | 'connect' | 'centurylink';
export type Layer = 'foundation' | 'semantic';
export type ScssVariableLayer = Layer | 'component' | 'excluded';

export interface SyntheticToken {
  name: string;
  scssExpression: string;
  comment?: string;
  type: string;
  category: string;
}

export interface ScssVariable {
  name: string;
  rawValue: string;
  comment?: string;
  line: number;
  layer: ScssVariableLayer;
}

export interface GeneratedOutput {
  scss: string;
  foundationCount: number;
  semanticCount: number;
  totalCount: number;
}

export interface TokenEntry {
  scssVariable: string;
  cssVariable: string;
  rawValue: string;
  resolvedValue: string;
  type: string;
  category: string;
  comment?: string;
}

export interface TokenMetadata {
  theme: string;
  version: string;
  generatedAt: string;
  tokenCount: {
    foundation: number;
    semantic: number;
    component: number;
    total: number;
    cssCustomProperties: number;
  };
  tokens: {
    foundation: Record<string, TokenEntry>;
    semantic: Record<string, TokenEntry>;
  };
}
