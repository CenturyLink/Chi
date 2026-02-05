/**
 * Anti-Patterns
 *
 * Defines common mistakes and their correct alternatives.
 * Used for code validation and providing helpful suggestions.
 */

import type { AntiPattern } from '../types/index.js';

export const ANTI_PATTERNS: AntiPattern[] = [
  {
    bad: '<div style="padding: 16px">',
    good: '<div class="-p--4">',
    reason: 'Always use utility classes for spacing instead of inline styles. Chi provides a complete spacing scale.',
    severity: 'error',
    category: 'spacing',
    autoFixable: true,
  },
  {
    bad: '<div style="margin: 0 auto">',
    good: '<div class="-mx--auto">',
    reason: 'Use -mx--auto for horizontal centering instead of inline styles',
    severity: 'error',
    category: 'spacing',
    autoFixable: true,
  },
  {
    bad: '<div class="-p-4">',
    good: '<div class="-p--4">',
    reason: 'Utility classes use double dash (--) syntax: -p--4, not -p-4',
    severity: 'error',
    category: 'spacing',
    autoFixable: true,
  },
  {
    bad: '<div style="background-color: #0047BB">',
    good: '<div class="-bg--primary">',
    reason: 'Always use color utility classes instead of hardcoded colors for brand consistency',
    severity: 'error',
    category: 'color',
    autoFixable: false,
  },
  {
    bad: '<div class="-bg-primary">',
    good: '<div class="-bg--primary">',
    reason: 'Color utilities use double dash (--) syntax: -bg--primary, not -bg-primary',
    severity: 'error',
    category: 'color',
    autoFixable: true,
  },
  {
    bad: '<p style="color: red">Error</p>',
    good: '<p class="-text--danger">Error</p>',
    reason: 'Use semantic color utilities (-text--danger) instead of literal colors',
    severity: 'error',
    category: 'color',
    autoFixable: false,
  },
  {
    bad: '<div style="opacity: 0.6">',
    good: '<div class="-opacity--60">',
    reason: 'Use opacity utility classes for consistency across themes',
    severity: 'error',
    category: 'opacity',
    autoFixable: true,
  },
  {
    bad: '<button class="chi-button -primary">',
    good: '<chi-button color="primary">',
    reason: 'PREFER Web Components over CSS classes for better DX, type safety, and built-in interactivity',
    severity: 'warning',
    category: 'webcomponent',
    webComponentAlternative: '<chi-button color="primary">',
    autoFixable: true,
  },
  {
    bad: '<button class="chi-button -primary -secondary">',
    good: '<chi-button color="primary">',
    reason: 'Button can only have one color variant. Remove conflicting modifiers.',
    severity: 'error',
    category: 'components',
    webComponentAlternative: '<chi-button color="primary">',
    autoFixable: false,
  },
  {
    bad: '<button class="btn">',
    good: '<chi-button>',
    reason: 'Use Chi Web Components or full class names with chi- prefix, not abbreviations',
    severity: 'error',
    category: 'components',
    webComponentAlternative: '<chi-button>',
    autoFixable: true,
  },
  {
    bad: '<div class="chi-alert"><p>Message</p></div>',
    good: '<chi-alert>Message</chi-alert>',
    reason: 'Use Web Component for alerts. They handle accessibility automatically.',
    severity: 'warning',
    category: 'webcomponent',
    webComponentAlternative: '<chi-alert>Message</chi-alert>',
    autoFixable: true,
  },
  {
    bad: '<p style="font-size: 14px">',
    good: '<p class="-text--body">',
    reason: 'Use typography utilities or design tokens instead of hardcoded font sizes',
    severity: 'error',
    category: 'typography',
    autoFixable: false,
  },
  {
    bad: '<div style="display: flex">',
    good: '<div class="-d--flex">',
    reason: 'Use display utility classes instead of inline styles',
    severity: 'error',
    category: 'layout',
    autoFixable: true,
  },
  {
    bad: '<div class="container">',
    good: '<div class="chi-container">',
    reason: 'Use Chi container classes with proper prefix',
    severity: 'warning',
    category: 'layout',
    autoFixable: true,
  },
  {
    bad: '<div style="border-radius: 4px">',
    good: '<div class="-rounded--3">',
    reason: 'Use border utility classes for consistent border radii',
    severity: 'error',
    category: 'border',
    autoFixable: true,
  },
  {
    bad: '<div class="chi-modal">',
    good: '<chi-modal>',
    reason: 'Use Web Component for modals. They handle accessibility and focus management automatically.',
    severity: 'warning',
    category: 'webcomponent',
    webComponentAlternative: '<chi-modal>',
    autoFixable: true,
  },
  {
    bad: '<button class="chi-button" onclick="handleClick()">',
    good: '<chi-button @click="handleClick">',
    reason: 'Avoid inline event handlers. Use Web Component events or addEventListener.',
    severity: 'warning',
    category: 'accessibility',
    autoFixable: false,
  },
  {
    bad: '<img src="logo.png">',
    good: '<img src="logo.png" alt="Company logo">',
    reason: 'Images must have alt text for accessibility',
    severity: 'error',
    category: 'accessibility',
    autoFixable: false,
  },
  {
    bad: '<button class="chi-button">',
    good: '<chi-button type="button">',
    reason: 'Use Web Components and specify button type to prevent accidental form submission',
    severity: 'warning',
    category: 'accessibility',
    webComponentAlternative: '<chi-button type="button">',
    autoFixable: true,
  },
  {
    bad: '<div role="button">Click</div>',
    good: '<chi-button>Click</chi-button>',
    reason: 'Use chi-button Web Component instead of div with role. Better keyboard support and semantics',
    severity: 'error',
    category: 'accessibility',
    webComponentAlternative: '<chi-button>Click</chi-button>',
    autoFixable: false,
  },
  {
    bad: '<input type="text">',
    good: '<chi-text-input label="Name">',
    reason: 'Use chi-text-input Web Component for automatic label association and validation',
    severity: 'warning',
    category: 'webcomponent',
    webComponentAlternative: '<chi-text-input label="Name">',
    autoFixable: false,
  },
  {
    bad: '<span class="chi-icon icon-check"></span>',
    good: '<chi-icon icon="check" aria-hidden="true"></chi-icon>',
    reason: 'Use chi-icon Web Component for icons. Decorative icons should have aria-hidden.',
    severity: 'warning',
    category: 'webcomponent',
    webComponentAlternative: '<chi-icon icon="check" aria-hidden="true">',
    autoFixable: true,
  },
];

/**
 * Categorized anti-patterns for easier lookup.
 */
export const ANTI_PATTERNS_BY_CATEGORY: Record<string, AntiPattern[]> = ANTI_PATTERNS.reduce<
  Record<string, AntiPattern[]>
>((acc, pattern) => {
  const category = pattern.category;

  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category]!.push(pattern);
  return acc;
}, {});

/**
 * Gets anti-patterns that suggest Web Component alternatives.
 */
export function getWebComponentSuggestions(): AntiPattern[] {
  return ANTI_PATTERNS.filter((p) => p.webComponentAlternative);
}
