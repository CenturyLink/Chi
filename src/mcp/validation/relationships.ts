/**
 * Element Relationships
 *
 * Defines relationships between tokens, utilities, CSS components, and Web Components.
 * Helps with discovery and recommendations.
 */

import type { Relationship } from '../types/index.js';

export const UTILITY_RELATIONSHIPS: Record<string, Relationship> = {
  '-p--4': {
    tokens: ['base-unit'],
    utilities: ['-m--4', '-g--4', '-pt--4', '-px--4', '-py--4'],
    webComponents: ['chi-button', 'chi-card'],
    note: 'Part of spacing scale (16px). Use -m--4 for margin, -g--4 for gap',
  },
  '-m--4': {
    tokens: ['base-unit'],
    utilities: ['-p--4', '-g--4', '-mt--4', '-mx--4', '-my--4'],
    note: 'Part of spacing scale (16px). Use -p--4 for padding, -g--4 for gap',
  },
  '-mx--auto': {
    utilities: ['-m--auto', '-my--auto', '-d--block'],
    cssComponents: ['chi-container', 'chi-card'],
    note: 'Use for horizontal centering of block elements',
  },
  '-bg--primary': {
    tokens: ['color-background-primary'],
    utilities: ['-text--white', '-bg--secondary', '-text--primary'],
    webComponents: ['chi-button', 'chi-alert'],
    note: 'Primary brand color. Pair with -text--white for contrast',
  },
  '-bg--danger': {
    utilities: ['-text--danger', '-bg--danger-light', '-bg--danger-lighter'],
    webComponents: ['chi-alert'],
    note: 'Danger/error state background (red)',
  },
  '-d--flex': {
    utilities: ['-flex--row', '-flex--column', '-justify-content--center', '-align-items--center', '-g--3'],
    note: 'Flexbox container. Combine with flex utilities for layout',
  },
  '-opacity--60': {
    tokens: ['opacity-60'],
    utilities: ['-opacity--0', '-opacity--100', '-opacity--40', '-opacity--80'],
    note: 'Medium transparency (60%). Common for disabled states',
  },
  '-rounded--3': {
    tokens: ['border-radius'],
    utilities: ['-rounded--2', '-rounded--4', '-circle'],
    webComponents: ['chi-card', 'chi-badge', 'chi-button'],
    note: 'Medium border radius. Common for cards and buttons',
  },
};

export const COMPONENT_RELATIONSHIPS: Record<string, Relationship> = {
  'chi-button': {
    utilities: ['-p--3', '-p--4', '-bg--primary', '-text--white', '-rounded--2'],
    cssComponents: ['chi-button-group', 'chi-icon'],
    webComponents: ['chi-icon', 'chi-spinner'],
    note: 'PREFER <chi-button> Web Component. Combine with spacing utilities for custom padding.',
  },
  'chi-alert': {
    utilities: ['-p--3', '-m--4', '-text--danger', '-bg--danger-lighter', '-rounded--3'],
    cssComponents: ['chi-icon', 'chi-button'],
    webComponents: ['chi-icon', 'chi-button'],
    note: 'PREFER <chi-alert> Web Component. Use semantic modifiers: -success, -warning, -danger, -info',
  },
  'chi-modal': {
    cssComponents: ['chi-backdrop', 'chi-button', 'chi-icon'],
    webComponents: ['chi-backdrop', 'chi-button'],
    tokens: ['zindex-modal'],
    note: 'PREFER <chi-modal> Web Component. Handles focus trap and accessibility automatically.',
  },
  'chi-card': {
    utilities: ['-p--4', '-m--3', '-bg--white', '-rounded--3', '-elevation--2'],
    cssComponents: ['chi-button', 'chi-divider', 'chi-badge'],
    webComponents: ['chi-button', 'chi-badge'],
    note: 'Use BEM subcomponents: chi-card__header, chi-card__content, chi-card__footer',
  },
  'chi-tabs': {
    cssComponents: ['chi-tabs__panel'],
    webComponents: [],
    utilities: ['-active'],
    note: 'PREFER <chi-tabs> Web Component. Use -active on selected tab in CSS approach.',
  },
};

export const TOKEN_RELATIONSHIPS: Record<string, Relationship> = {
  'base-unit': {
    utilities: ['-p--1', '-p--2', '-p--3', '-p--4', '-m--1', '-m--2', '-m--3', '-m--4', '-g--1', '-g--2'],
    note: 'Foundation of spacing scale (8px). All spacing utilities are multiples: -p--2 = 8px, -p--4 = 16px',
  },
  'font-size-5': {
    utilities: ['-text--body'],
    tokens: ['line-height', 'font-weight-normal'],
    note: 'Default body text size (16px). Pairs with line-height token',
  },
  'color-background-primary': {
    utilities: ['-bg--primary', '-text--primary'],
    webComponents: ['chi-button'],
    note: 'Primary brand color. Used in buttons, links, and key UI elements',
  },
  'zindex-modal': {
    tokens: ['zindex-backdrop'],
    webComponents: ['chi-modal'],
    note: 'Z-index for modal dialogs (500). Always above backdrop (200)',
  },
};

/**
 * Gets all related elements for a given item.
 */
export function getRelatedElements(type: 'utility' | 'component' | 'token', name: string): Relationship | null {
  switch (type) {
    case 'utility':
      return UTILITY_RELATIONSHIPS[name] || null;
    case 'component':
      return COMPONENT_RELATIONSHIPS[name] || null;
    case 'token':
      return TOKEN_RELATIONSHIPS[name] || null;
    default:
      return null;
  }
}

/**
 * Suggests related utilities based on usage context.
 */
export function suggestRelated(currentUtilities: string[]): string[] {
  const suggestions = new Set<string>();

  for (const util of currentUtilities) {
    const relations = UTILITY_RELATIONSHIPS[util];

    if (relations?.utilities) {
      for (const u of relations.utilities) {
        suggestions.add(u);
      }
    }
  }

  for (const u of currentUtilities) {
    suggestions.delete(u);
  }

  return Array.from(suggestions);
}
