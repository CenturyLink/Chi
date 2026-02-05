/**
 * Chi Design System Guidelines
 * 
 * Best practices and guidelines enforced through the MCP metadata.
 * These guidelines prioritize Web Components as the primary approach.
 */

import type { Guidelines } from '../types/index.js';

export const GUIDELINES: Guidelines = {
  webComponents: [
    'ALWAYS prefer Chi Web Components (Custom Elements) over HTML/CSS approach for modern projects',
    'Web Components provide better developer experience: type safety, encapsulation, and built-in interactivity',
    'Use <chi-button> instead of <button class="chi-button"> for buttons',
    'Use <chi-modal> instead of <div class="chi-modal"> for modals',
    'Web Components support all CSS utility classes: <chi-button class="-p--4 -m--2">',
    'Only use HTML/CSS approach when: legacy browser support is required, or user explicitly requests it',
    'Web Components automatically handle accessibility (ARIA attributes, keyboard navigation)',
  ],
  spacing: [
    'ALWAYS use utility classes for spacing (-p--*, -m--*, -g--*) instead of inline styles',
    'Utility classes use DOUBLE DASH syntax: -p--4 (correct), NOT -p-4 (incorrect)',
    'Use base-unit multiples: -p--2 (8px), -p--4 (16px), -p--6 (24px), etc.',
    'Use directional classes: -pt--* (top), -pr--* (right), -pb--* (bottom), -pl--* (left)',
    'Use axis classes: -px--* (horizontal), -py--* (vertical)',
    'For centering: use -mx--auto for horizontal centering',
    'For gap spacing, use GLOBAL utilities -g--X (e.g., -g--2), NOT chi-css-grid component modifiers -gap--X',
    'Gap utilities: -g--X (all directions), -gx--X (column-gap), -gy--X (row-gap)',
  ],
  styling: [
    'ALWAYS use utility classes for colors (-bg--*, -text--*) instead of inline styles',
    'ALWAYS use utility classes for opacity (-opacity--*) instead of inline styles',
    'Use design tokens for consistency (opacity-60, not 0.6)',
    'Prefer semantic colors: -bg--success, -bg--warning, -bg--danger',
    'Use color variations: -bg--success-light, -bg--success-lighter for subtle backgrounds',
    'NEVER write custom CSS or inline styles when a utility class exists',
  ],
  components: [
    'PREFER Web Components (<chi-button>) over CSS components (<button class="chi-button">)',
    'When using CSS approach, use component base classes: chi-button, chi-card, chi-alert',
    'Apply modifiers with dash prefix: -primary, -lg, -flat, -outline',
    'Combine utilities with components: <chi-button class="-p--4"> or <button class="chi-button -primary -p--4">',
    'Use BEM subcomponents when available: chi-card__header, chi-button__content',
    'Check cssComponents metadata for available modifiers before creating custom styles',
  ],
  accessibility: [
    'Web Components handle most accessibility automatically - prefer them over CSS approach',
    'Always include proper ARIA attributes for CSS-based interactive components',
    'Use semantic HTML elements when possible',
    'Ensure sufficient color contrast (use -text--* utilities)',
    'Provide keyboard navigation support for custom interactions',
  ],
};

/**
 * Guidelines for migrating from CSS to Web Components.
 */
export const MIGRATION_GUIDELINES = [
  'Step 1: Identify CSS components that have Web Component equivalents',
  'Step 2: Replace CSS class modifiers with Web Component properties',
  'Step 3: Move event handlers to Web Component event listeners',
  'Step 4: Keep utility classes on Web Components for additional styling',
  'Example: <button class="chi-button -primary -lg"> → <chi-button color="primary" size="lg">',
];

/**
 * Priority order for implementation approaches.
 */
export const IMPLEMENTATION_PRIORITY = [
  { approach: 'chi-vue', priority: 1, description: 'Vue 3 components for Vue projects' },
  { approach: 'chi-web-components', priority: 2, description: 'Custom Elements for any framework' },
  { approach: 'chi-html-css', priority: 3, description: 'CSS classes for static HTML or legacy support' },
];
