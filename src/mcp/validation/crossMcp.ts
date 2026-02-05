/**
 * Cross-MCP Validation
 *
 * Provides validation rules for detecting conflicts when multiple Chi
 * implementation approaches are used together. These rules are exported
 * for use by the central MCP repository that combines all metadata.
 */

import { detectApproach } from '../interop/recommendation.js';
import type { ChiApproach } from '../interop/types.js';

export type McpType = 'vue' | 'custom-elements' | 'html-css';
export type ConflictSeverity = 'error' | 'warning' | 'info';

export interface CrossMcpConflict {
  id: string;
  pattern: RegExp;
  description: string;
  severity: ConflictSeverity;
  affectedMcps: McpType[];
  suggestion: string;
  autoFixable: boolean;
  fix?: (code: string) => string;
}

export interface CrossMcpValidationResult {
  valid: boolean;
  conflicts: DetectedConflict[];
  suggestions: string[];
  recommendedApproach: ChiApproach | null;
}

/**
 * A detected conflict instance.
 */
export interface DetectedConflict {
  rule: CrossMcpConflict;
  match: string;
  line?: number;
  column?: number;
}

/**
 * Rules for detecting cross-MCP conflicts.
 * These are exported for the central repository to use.
 */
export const CROSS_MCP_RULES: CrossMcpConflict[] = [
  {
    id: 'redundant-css-class-on-webcomponent',
    pattern: /<chi-(\w+)[^>]*class="[^"]*chi-\1[^"]*"/gi,
    description: 'CSS base class on Web Component is redundant',
    severity: 'warning',
    affectedMcps: ['custom-elements', 'html-css'],
    suggestion: 'Remove the CSS base class from the Web Component. The Web Component already includes its own styling.',
    autoFixable: true,
    fix: (code) => code.replace(/(<chi-(\w+)[^>]*class="[^"]*)chi-\2\s*/gi, '$1'),
  },
  {
    id: 'modifier-instead-of-prop',
    pattern: /<chi-(\w+)[^>]*class="[^"]*-(?:primary|secondary|danger|success|warning|info|sm|md|lg|xl)[^"]*"/gi,
    description: 'CSS modifier used on Web Component instead of property',
    severity: 'warning',
    affectedMcps: ['custom-elements', 'html-css'],
    suggestion:
      'Use Web Component properties instead of CSS modifiers. Example: <chi-button color="primary"> instead of <chi-button class="-primary">',
    autoFixable: false,
  },
  {
    id: 'mixed-vue-and-ce',
    pattern: /<(Chi[A-Z]\w+)[^>]*>[\s\S]*<chi-/gi,
    description: 'Mixing Vue components and Custom Elements in same context',
    severity: 'info',
    affectedMcps: ['vue', 'custom-elements'],
    suggestion: 'Choose one approach per component tree. Vue components for Vue apps, Custom Elements for others.',
    autoFixable: false,
  },
  {
    id: 'html-button-with-chi-class',
    pattern: /<button[^>]*class="[^"]*chi-button[^"]*"[^>]*>/gi,
    description: 'Using CSS class on native button instead of Web Component',
    severity: 'info',
    affectedMcps: ['html-css', 'custom-elements'],
    suggestion: 'Consider using <chi-button> Web Component for better DX and built-in functionality.',
    autoFixable: true,
    fix: (code) => {
      return code;
    },
  },
  {
    id: 'inline-style-with-utility-equivalent',
    pattern: /style="[^"]*(?:padding|margin|background-color|opacity|display)[^"]*"/gi,
    description: 'Inline style used instead of Chi utility class',
    severity: 'error',
    affectedMcps: ['vue', 'custom-elements', 'html-css'],
    suggestion:
      'Use Chi utility classes instead of inline styles. Example: class="-p--4" instead of style="padding: 16px"',
    autoFixable: false,
  },
  {
    id: 'single-dash-utility',
    pattern: /class="[^"]*-(?:p|m|g|bg|text|opacity)-\d+[^"]*"/gi,
    description: 'Single dash utility syntax (should be double dash)',
    severity: 'error',
    affectedMcps: ['vue', 'custom-elements', 'html-css'],
    suggestion: 'Use double dash syntax: -p--4, -bg--primary, -opacity--60',
    autoFixable: true,
    fix: (code) => code.replace(/(-(?:p|m|g|bg|text|opacity))-(\d+)/g, '$1--$2'),
  },
  {
    id: 'deprecated-gap-modifier',
    pattern: /class="[^"]*-gap--\d+[^"]*"/gi,
    description: 'Using component-specific gap modifier instead of global utility',
    severity: 'warning',
    affectedMcps: ['html-css'],
    suggestion: 'Use global gap utility -g--X instead of component modifier -gap--X',
    autoFixable: true,
    fix: (code) => code.replace(/-gap--(\d+)/g, '-g--$1'),
  },
  {
    id: 'vue-component-without-v-bind',
    pattern: /<Chi[A-Z]\w+[^>]*(?:color|size|variant)="(?!:)[^"]*"[^>]*>/gi,
    description: 'Vue component with static prop that might need binding',
    severity: 'info',
    affectedMcps: ['vue'],
    suggestion: 'If the value is dynamic, use v-bind (:color) instead of static attribute (color)',
    autoFixable: false,
  },
];

/**
 * Validates code against cross-MCP rules.
 * This is a lightweight validator for this metadata package.
 * The full validation with context is done in the central repository.
 * @param code - Code to validate
 * @returns Validation result with conflicts and suggestions
 */
export function validateCrossMcp(code: string): CrossMcpValidationResult {
  const conflicts: DetectedConflict[] = [];
  const suggestionsSet = new Set<string>();

  for (const rule of CROSS_MCP_RULES) {
    const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
    const matches = code.matchAll(regex);

    for (const match of matches) {
      conflicts.push({
        rule,
        match: match[0],
      });
      suggestionsSet.add(rule.suggestion);
    }
  }

  const recommendedApproach = detectApproach(code);
  const errorCount = conflicts.filter((c) => c.rule.severity === 'error').length;

  return {
    valid: errorCount === 0,
    conflicts,
    suggestions: Array.from(suggestionsSet),
    recommendedApproach,
  };
}

/**
 * Applies auto-fixes for fixable conflicts.
 * @param code - Original code
 * @param conflicts - List of detected conflicts
 * @returns Code with auto-fixes applied
 */
export function applyAutoFixes(code: string, conflicts: DetectedConflict[]): string {
  let fixedCode = code;

  for (const conflict of conflicts) {
    if (conflict.rule.autoFixable && conflict.rule.fix) {
      fixedCode = conflict.rule.fix(fixedCode);
    }
  }

  return fixedCode;
}

/**
 * Gets rules that affect a specific MCP.
 * @param mcp - MCP type to filter by
 * @returns Array of rules affecting the specified MCP
 */
export function getRulesForMcp(mcp: McpType): CrossMcpConflict[] {
  return CROSS_MCP_RULES.filter((rule) => rule.affectedMcps.includes(mcp));
}

const CROSS_MCP_RULES_VERSION = '1.0.0';

export interface CrossMcpRulesExport {
  version: string;
  rules: CrossMcpConflict[];
  ruleCount: number;
  autoFixableCount: number;
}

/**
 * Exports rules in a format suitable for the central repository.
 * @returns Rules export object
 */
export function exportRulesForCentralRepo(): CrossMcpRulesExport {
  const autoFixableCount = CROSS_MCP_RULES.filter((r) => r.autoFixable).length;

  return {
    version: CROSS_MCP_RULES_VERSION,
    rules: CROSS_MCP_RULES,
    ruleCount: CROSS_MCP_RULES.length,
    autoFixableCount,
  };
}
