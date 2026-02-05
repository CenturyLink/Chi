/**
 * MCP Tool Definitions
 *
 * Defines the tools available for the Chi MCP server.
 * Tools are designed to prioritize Web Components as the primary approach.
 */

import type { Tool } from '../types/index.js';
export type { Tool } from '../types/index.js';

export const TOOLS: Tool[] = [
  {
    name: 'get_chi_version',
    description:
      'Get current Chi Design System version, release date, and recent changes from the changelog. Use this to answer questions about the latest version of Chi or what has been added/changed/fixed recently.',
    inputSchema: {
      type: 'object',
      properties: {
        includeChanges: {
          type: 'boolean',
          default: true,
          description: 'Include recent changes from changelog',
        },
        versionsToShow: {
          type: 'number',
          default: 5,
          description: 'Number of recent versions to include (1-10)',
        },
        specificVersion: {
          type: 'string',
          description: 'Get changes for a specific version (e.g., "6.87.0")',
        },
      },
    },
  },
  {
    name: 'recommend_chi_implementation',
    description:
      'ALWAYS USE THIS FIRST to determine the best Chi implementation approach. Recommends Chi Custom Elements (Web Components) as the PRIMARY and PREFERRED option for modern, framework-agnostic projects. Only suggests Chi HTML/CSS approach when user explicitly requests HTML or has specific constraints (legacy browsers, static sites). Custom Elements provide better developer experience, type safety, and encapsulation.',
    inputSchema: {
      type: 'object',
      properties: {
        requirement: {
          type: 'string',
          description: 'What the user wants to build (e.g., "button", "modal", "form", "layout with form elements")',
        },
        projectType: {
          type: 'string',
          enum: ['react', 'vue', 'angular', 'vanilla-js', 'static-html', 'unknown'],
          description: 'Project framework/type if known',
        },
        explicitlyRequestedHTML: {
          type: 'boolean',
          default: false,
          description: 'Set to true ONLY if user explicitly asks for HTML/CSS (not web components)',
        },
        browserSupport: {
          type: 'string',
          enum: ['modern', 'legacy', 'unknown'],
          default: 'modern',
          description: 'Browser support requirements',
        },
      },
      required: ['requirement'],
    },
  },
  {
    name: 'migrate_html_to_webcomponent',
    description:
      'Migrates HTML/CSS Chi components to Web Components. Validates CSS class modifiers and maps them to Web Component properties. Use this when user has existing CSS-based code and wants to upgrade to Web Components.',
    inputSchema: {
      type: 'object',
      properties: {
        html: {
          type: 'string',
          description: 'HTML code using CSS classes (e.g., <button class="chi-button -primary">)',
        },
        includeUtilityClasses: {
          type: 'boolean',
          default: true,
          description: 'Whether to preserve utility classes on the Web Component',
        },
      },
      required: ['html'],
    },
  },
  {
    name: 'get_design_token_info',
    description:
      'Get detailed information about design tokens (colors, typography, spacing, shadows, etc.). These tokens are used consistently across both Chi Custom Elements and Chi HTML/CSS.',
    inputSchema: {
      type: 'object',
      properties: {
        tokenName: {
          type: 'string',
          description: 'Token name (e.g., "base-unit", "shadow-2")',
        },
        category: {
          type: 'string',
          enum: ['colors', 'typography', 'spacing', 'shadows', 'breakpoints', 'zIndex'],
        },
        theme: {
          type: 'string',
          enum: ['lumen', 'brightspeed', 'centurylink', 'colt', 'portal', 'connect'],
        },
      },
      required: ['tokenName'],
    },
  },
  {
    name: 'list_design_tokens',
    description:
      'List all available design tokens, optionally filtered by category or theme. Compatible with both Chi Custom Elements and Chi HTML/CSS.',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: ['colors', 'typography', 'spacing', 'shadows', 'breakpoints', 'zIndex'],
        },
        theme: {
          type: 'string',
          enum: ['lumen', 'brightspeed', 'centurylink', 'colt', 'portal', 'connect'],
        },
      },
    },
  },
  {
    name: 'get_chi_utility_info',
    description:
      'Get information about a Chi utility class. Utility classes use DOUBLE DASH syntax (e.g., -p--4, not -p-4). Can be used with both Web Components and HTML elements.',
    inputSchema: {
      type: 'object',
      properties: {
        className: {
          type: 'string',
          description:
            'Utility class name (e.g., "-p--4" for 16px padding, "-bg--primary" for primary background, "-opacity--60" for 60% opacity)',
        },
      },
      required: ['className'],
    },
  },
  {
    name: 'list_chi_utilities',
    description:
      'List all Chi utility classes, optionally filtered by category. Utilities use DOUBLE DASH syntax and can be combined with Web Components.',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: [
            'Spacing',
            'Display',
            'Flexbox',
            'Color',
            'Typography',
            'Sizing',
            'Border',
            'Position',
            'Shadow',
            'Opacity',
          ],
        },
      },
    },
  },
  {
    name: 'generate_chi_html_snippet',
    description:
      'Generate HTML snippet using Chi utility classes. WARNING: Chi Custom Elements is STRONGLY RECOMMENDED over this approach. Use this ONLY when user explicitly requests HTML/CSS code or static HTML.',
    inputSchema: {
      type: 'object',
      properties: {
        element: {
          type: 'string',
          default: 'div',
          description: 'HTML element type',
        },
        classes: {
          type: 'array',
          items: { type: 'string' },
          description: 'Utility class names to apply (use double dash syntax: -p--4, -bg--primary)',
        },
      },
      required: ['classes'],
    },
  },
  {
    name: 'get_chi_css_component_info',
    description:
      'Get information about a Chi CSS component. WARNING: Chi Custom Elements provide superior developer experience and should be used instead. Use this ONLY when user explicitly wants HTML/CSS code.',
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'CSS component base class (e.g., "chi-button", "chi-modal", "chi-card")',
        },
        includeModifiers: {
          type: 'boolean',
          default: true,
          description: 'Include available modifiers',
        },
        includeWebComponentMapping: {
          type: 'boolean',
          default: true,
          description: 'Include equivalent Web Component information',
        },
      },
      required: ['componentName'],
    },
  },
  {
    name: 'list_chi_css_components',
    description:
      'List all Chi CSS components. REMINDER: Chi Custom Elements is the recommended modern approach. Returns Web Component equivalents when available.',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: [
            'Actions',
            'Forms',
            'Data Display',
            'Feedback',
            'Navigation',
            'Overlays',
            'Layout',
            'Media',
            'Pickers',
          ],
        },
      },
    },
  },
  {
    name: 'validate_chi_code',
    description:
      'Validates HTML/CSS code against Chi Design System best practices. Checks for anti-patterns, validates utility class format (double dash syntax), suggests Web Component alternatives, and checks accessibility.',
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'HTML/CSS code to validate',
        },
        approach: {
          type: 'string',
          enum: ['custom-elements', 'html-css', 'auto'],
          default: 'auto',
          description: 'Chi implementation approach being validated',
        },
        checkAccessibility: {
          type: 'boolean',
          default: true,
          description: 'Check for accessibility issues',
        },
        checkAntiPatterns: {
          type: 'boolean',
          default: true,
          description: 'Check for anti-patterns',
        },
        suggestWebComponents: {
          type: 'boolean',
          default: true,
          description: 'Suggest Web Component alternatives for CSS components',
        },
      },
      required: ['code'],
    },
  },
  {
    name: 'suggest_related_utilities',
    description:
      'Suggests related utilities, CSS components, Web Components, and tokens based on current usage context. Helps discover complementary elements and common patterns.',
    inputSchema: {
      type: 'object',
      properties: {
        currentUtilities: {
          type: 'array',
          items: { type: 'string' },
          description: 'Currently used utility classes',
        },
        currentComponents: {
          type: 'array',
          items: { type: 'string' },
          description: 'Currently used components (custom element tags or CSS classes)',
        },
        context: {
          type: 'string',
          description: 'Usage context (e.g., "button", "card", "form")',
        },
      },
    },
  },
  {
    name: 'search_by_keyword',
    description:
      'Semantic search across all Chi elements using natural language or keywords. Searches through utilities, CSS components, Web Components, and tokens. Supports synonyms for better discoverability.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Natural language query or keyword (e.g., "center content", "error message", "spacing")',
        },
        type: {
          type: 'string',
          enum: ['all', 'utilities', 'components', 'tokens', 'webcomponents'],
          default: 'all',
          description: 'Type of elements to search',
        },
        maxResults: {
          type: 'number',
          default: 10,
          description: 'Maximum number of results to return',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_component_schema',
    description:
      'Get validation schema for a Chi component (CSS or Web Component). Includes allowed modifiers, conflicting modifiers, required attributes, and Web Component property mappings.',
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'Component name (e.g., "chi-button", "chi-modal", "chi-alert")',
        },
        includeExamples: {
          type: 'boolean',
          default: true,
          description: 'Include usage examples',
        },
        includeWebComponentMapping: {
          type: 'boolean',
          default: true,
          description: 'Include CSS to Web Component property mappings',
        },
      },
      required: ['componentName'],
    },
  },
  {
    name: 'validate_cross_mcp',
    description:
      'Validates code for cross-MCP conflicts when mixing Vue, Custom Elements, and HTML/CSS approaches. Detects redundant classes, improper modifier usage, and suggests fixes. Use this when code uses multiple Chi implementation approaches.',
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'HTML/Vue/JSX code to validate for cross-MCP conflicts',
        },
        autoFix: {
          type: 'boolean',
          default: false,
          description: 'Automatically fix fixable conflicts and return corrected code',
        },
        targetMcps: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['vue', 'custom-elements', 'html-css'],
          },
          description: 'Only check rules for specific MCPs',
        },
      },
      required: ['code'],
    },
  },
  {
    name: 'get_unified_recommendation',
    description:
      'Get a unified recommendation for which Chi implementation approach to use based on project context. Considers framework, browser support, existing code patterns, and user preferences to recommend Vue, Custom Elements, or HTML/CSS.',
    inputSchema: {
      type: 'object',
      properties: {
        framework: {
          type: 'string',
          enum: ['vue', 'react', 'angular', 'svelte', 'vanilla', 'unknown'],
          description: 'Project framework',
        },
        frameworkVersion: {
          type: 'string',
          description: 'Framework version (e.g., "3.4.0" for Vue)',
        },
        typescript: {
          type: 'boolean',
          description: 'Whether project uses TypeScript',
        },
        browserSupport: {
          type: 'string',
          enum: ['modern', 'legacy'],
          default: 'modern',
          description: 'Browser support requirements',
        },
        existingCode: {
          type: 'string',
          description: 'Sample of existing code to detect current approach',
        },
        preferWebComponents: {
          type: 'boolean',
          description: 'User prefers Web Components for framework-agnostic code',
        },
        preferCssOnly: {
          type: 'boolean',
          description: 'User prefers CSS-only approach',
        },
      },
    },
  },
  {
    name: 'get_migration_path',
    description:
      'Get step-by-step migration path between Chi implementation approaches. Useful when upgrading from HTML/CSS to Web Components, or transitioning between Vue and Custom Elements.',
    inputSchema: {
      type: 'object',
      properties: {
        from: {
          type: 'string',
          enum: ['html-css', 'custom-elements', 'vue'],
          description: 'Current approach',
        },
        to: {
          type: 'string',
          enum: ['html-css', 'custom-elements', 'vue'],
          description: 'Target approach',
        },
        componentType: {
          type: 'string',
          description: 'Specific component type to get detailed migration (e.g., "button", "modal")',
        },
      },
      required: ['from', 'to'],
    },
  },
  {
    name: 'get_interop_data',
    description:
      'Get interoperability data for integration with the central Chi MCP repository. Returns component mappings, cross-MCP rules, and recommendation conditions.',
    inputSchema: {
      type: 'object',
      properties: {
        includeComponentMappings: {
          type: 'boolean',
          default: true,
          description: 'Include CSS to Web Component mappings',
        },
        includeCrossMcpRules: {
          type: 'boolean',
          default: true,
          description: 'Include cross-MCP validation rules',
        },
        includeRecommendations: {
          type: 'boolean',
          default: true,
          description: 'Include recommendation conditions',
        },
      },
    },
  },
];
