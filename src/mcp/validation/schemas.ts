/**
 * Component Validation Schemas
 *
 * Defines rules for valid component composition and usage.
 */

import type { ComponentSchema } from '../types/index.js';
import { VALIDATION_PATTERNS } from '../config/patterns.js';

export const COMPONENT_SCHEMAS: Record<string, ComponentSchema> = {
  'chi-button': {
    name: 'button',
    baseClass: 'chi-button',
    webComponentTag: 'chi-button',
    allowedModifiers: [
      '-primary',
      '-secondary',
      '-dark',
      '-light',
      '-danger',
      '-sm',
      '-md',
      '-lg',
      '-xl',
      '-flat',
      '-outline',
      '-pill',
      '-icon',
      '-float',
      '-close',
      '-expand',
      '-fluid',
      '-justified',
    ],
    conflictingModifiers: [
      ['-primary', '-secondary', '-dark', '-light', '-danger'],
      ['-sm', '-md', '-lg', '-xl'],
      ['-flat', '-outline'],
    ],
    maxModifiers: 4,
    requiredAttributes: ['type'],
    recommendedAttributes: ['aria-label'],
    recommendedCombinations: [
      {
        modifiers: ['-primary', '-lg'],
        utilities: ['-p--3', '-rounded--2'],
        description: 'Primary call-to-action button',
        useCase: 'Main action buttons in forms and cards',
      },
      {
        modifiers: ['-flat', '-sm'],
        utilities: ['-p--2'],
        description: 'Secondary action button',
        useCase: 'Less prominent actions like cancel or close',
      },
      {
        modifiers: ['-icon'],
        utilities: [],
        description: 'Icon-only button',
        useCase: 'Toolbar buttons, close buttons (add aria-label for accessibility)',
      },
    ],
    accessibility: {
      keyboardSupport: 'Activates on Enter or Space',
      focusManagement: 'Receives focus in tab order',
      requiredAria: [],
    },
  },

  'chi-alert': {
    name: 'alert',
    baseClass: 'chi-alert',
    webComponentTag: 'chi-alert',
    allowedModifiers: [
      '-success',
      '-warning',
      '-danger',
      '-info',
      '-muted',
      '-sm',
      '-md',
      '-lg',
      '-banner',
      '-bubble',
      '-toast',
      '-center',
      '-close',
    ],
    conflictingModifiers: [
      ['-success', '-warning', '-danger', '-info', '-muted'],
      ['-sm', '-md', '-lg'],
      ['-banner', '-bubble', '-toast'],
    ],
    maxModifiers: 3,
    requiredAttributes: ['role'],
    accessibility: {
      requiredRoles: ['alert'],
      keyboardSupport: 'Dismissible alerts: Escape to close',
      focusManagement: 'Auto-announces to screen readers',
    },
  },

  'chi-modal': {
    name: 'modal',
    baseClass: 'chi-modal',
    webComponentTag: 'chi-modal',
    allowedModifiers: ['-sm', '-md', '-lg', '-xl', '-center'],
    conflictingModifiers: [['-sm', '-md', '-lg', '-xl']],
    requiredAttributes: ['role', 'aria-label', 'aria-modal'],
    requiredParent: 'body',
    dependencies: ['chi-backdrop'],
    forbiddenParents: ['chi-card', 'chi-dropdown'],
    accessibility: {
      requiredRoles: ['dialog'],
      requiredAria: ['aria-label', 'aria-modal'],
      keyboardSupport: 'Escape to close, Tab to cycle focus within modal',
      focusManagement: 'Traps focus inside modal, returns focus on close',
    },
  },

  'chi-dropdown': {
    name: 'dropdown',
    baseClass: 'chi-dropdown',
    webComponentTag: 'chi-dropdown',
    allowedModifiers: ['-animate', '-hover'],
    allowedChildren: ['chi-dropdown__trigger', 'chi-dropdown__menu', 'chi-dropdown__menu-item'],
    accessibility: {
      requiredAria: ['aria-haspopup', 'aria-expanded'],
      keyboardSupport: 'Arrow keys to navigate, Enter to select, Escape to close',
    },
  },

  'chi-card': {
    name: 'card',
    baseClass: 'chi-card',
    webComponentTag: 'chi-card',
    allowedModifiers: ['-portal', '-active', '-hover'],
    allowedChildren: [
      'chi-card__header',
      'chi-card__title',
      'chi-card__content',
      'chi-card__footer',
      'chi-card__caption',
    ],
    accessibility: {
      keyboardSupport: 'Interactive cards should be wrapped in <button> or <a>',
    },
  },

  'chi-spinner': {
    name: 'spinner',
    baseClass: 'chi-spinner',
    webComponentTag: 'chi-spinner',
    allowedModifiers: ['-sm', '-sm--2', '-sm--3', '-md', '-lg', '-xl', '-xxl', '-primary', '-inverse', '-backdrop'],
    conflictingModifiers: [
      ['-sm', '-sm--2', '-sm--3', '-md', '-lg', '-xl', '-xxl'],
      ['-primary', '-inverse'],
    ],
    requiredAttributes: ['role', 'aria-label'],
    accessibility: {
      requiredRoles: ['status'],
      requiredAria: ['aria-label', 'aria-live'],
      keyboardSupport: 'Announced to screen readers automatically',
    },
  },

  'chi-badge': {
    name: 'badge',
    baseClass: 'chi-badge',
    webComponentTag: 'chi-badge',
    allowedModifiers: [
      '-primary',
      '-success',
      '-warning',
      '-danger',
      '-info',
      '-light',
      '-dark',
      '-muted',
      '-sm',
      '-xs',
      '-outline',
      '-flat',
    ],
    conflictingModifiers: [
      ['-primary', '-success', '-warning', '-danger', '-info', '-light', '-dark', '-muted'],
      ['-sm', '-xs'],
      ['-outline', '-flat'],
    ],
    accessibility: {
      keyboardSupport: 'Not interactive by default',
    },
  },

  'chi-tabs': {
    name: 'tabs',
    baseClass: 'chi-tabs',
    webComponentTag: 'chi-tabs',
    allowedModifiers: ['-border', '-sliding-border', '-pills', '-sm', '-md', '-lg', '-xl', '-vertical', '-horizontal'],
    conflictingModifiers: [
      ['-border', '-sliding-border', '-pills'],
      ['-sm', '-md', '-lg', '-xl'],
      ['-vertical', '-horizontal'],
    ],
    allowedChildren: ['chi-tabs__panel'],
    requiredAttributes: ['role'],
    accessibility: {
      requiredRoles: ['tablist'],
      requiredAria: ['aria-selected', 'aria-controls'],
      keyboardSupport: 'Arrow keys to navigate tabs, Home/End for first/last',
    },
  },

  'chi-tooltip': {
    name: 'tooltip',
    baseClass: 'chi-tooltip',
    webComponentTag: 'chi-tooltip',
    allowedModifiers: ['-top', '-right', '-bottom', '-left'],
    conflictingModifiers: [['-top', '-right', '-bottom', '-left']],
    requiredAttributes: ['role'],
    accessibility: {
      requiredRoles: ['tooltip'],
      requiredAria: ['aria-label'],
      keyboardSupport: 'Shows on focus, hides on blur or Escape',
    },
  },

  'chi-popover': {
    name: 'popover',
    baseClass: 'chi-popover',
    webComponentTag: 'chi-popover',
    allowedModifiers: ['-top', '-right', '-bottom', '-left', '-w--sm', '-w--md', '-w--lg'],
    conflictingModifiers: [
      ['-top', '-right', '-bottom', '-left'],
      ['-w--sm', '-w--md', '-w--lg'],
    ],
    requiredAttributes: ['role'],
    dependencies: ['chi-button'],
    accessibility: {
      requiredRoles: ['dialog'],
      requiredAria: ['aria-label'],
      keyboardSupport: 'Escape to close, Tab to cycle focus',
      focusManagement: 'Traps focus when open',
    },
  },
};

function validateModifiers(schema: ComponentSchema, modifiers: string[], baseClass: string): string[] {
  const errors: string[] = [];
  const invalidMods = modifiers.filter((mod) => !schema.allowedModifiers.includes(mod));

  for (const mod of invalidMods) {
    errors.push(`Invalid modifier "${mod}" for ${baseClass}. Allowed: ${schema.allowedModifiers.join(', ')}`);
  }

  return errors;
}

function validateConflicts(schema: ComponentSchema, modifiers: string[]): string[] {
  if (!schema.conflictingModifiers) return [];

  return schema.conflictingModifiers
    .map((conflicts) => modifiers.filter((mod) => conflicts.includes(mod)))
    .filter((used) => used.length > 1)
    .map((used) => `Conflicting modifiers: ${used.join(', ')}. Only one of these can be used.`);
}

function validateModifierCount(schema: ComponentSchema, modifiers: string[]): string[] {
  if (!schema.maxModifiers || modifiers.length <= schema.maxModifiers) return [];

  return [`Too many modifiers (${modifiers.length}). Maximum allowed: ${schema.maxModifiers}`];
}

function validateRequiredAttributes(schema: ComponentSchema, attributes: Record<string, string>): string[] {
  if (!schema.requiredAttributes) return [];

  return schema.requiredAttributes
    .filter((attr) => !attributes[attr])
    .map((attr) => `Missing required attribute: ${attr}`);
}

/**
 * Validates component usage against schema.
 */
export function validateComponent(
  baseClass: string,
  modifiers: string[],
  attributes: Record<string, string>
): { valid: boolean; errors: string[]; webComponentSuggestion?: string } {
  const schema = COMPONENT_SCHEMAS[baseClass];

  if (!schema) {
    return { valid: true, errors: [] };
  }

  const errors = [
    ...validateModifiers(schema, modifiers, baseClass),
    ...validateConflicts(schema, modifiers),
    ...validateModifierCount(schema, modifiers),
    ...validateRequiredAttributes(schema, attributes),
  ];

  const webComponentSuggestion = schema.webComponentTag
    ? `Consider using <${schema.webComponentTag}> Web Component for better DX`
    : undefined;

  return { valid: errors.length === 0, errors, webComponentSuggestion };
}

/**
 * Utility class validation schemas.
 * Uses centralized patterns from config/patterns.ts
 */
export const UTILITY_SCHEMAS: Record<string, { pattern: RegExp; description: string; examples: string[] }> = {
  spacing: {
    pattern: VALIDATION_PATTERNS.spacing,
    description: 'Spacing utilities: -p--4, -mt--2, -mx--auto',
    examples: ['-p--4', '-mt--2', '-mx--auto', '-pb--0'],
  },
  color: {
    pattern: VALIDATION_PATTERNS.color,
    description: 'Color utilities: -bg--primary, -text--danger',
    examples: ['-bg--primary', '-text--danger', '-bg--success-light'],
  },
  opacity: {
    pattern: VALIDATION_PATTERNS.opacity,
    description: 'Opacity utilities: -opacity--60',
    examples: ['-opacity--0', '-opacity--60', '-opacity--100'],
  },
  display: {
    pattern: VALIDATION_PATTERNS.display,
    description: 'Display utilities: -d--flex, -d--none',
    examples: ['-d--flex', '-d--none', '-d--block'],
  },
  flex: {
    pattern: VALIDATION_PATTERNS.flex,
    description: 'Flexbox utilities: -justify-content--center, -align-items--center',
    examples: ['-justify-content--center', '-align-items--center', '-flex-wrap--wrap'],
  },
  border: {
    pattern: VALIDATION_PATTERNS.border,
    description: 'Border utilities: -rounded--3, -border--1',
    examples: ['-rounded--3', '-border--1', '-circle'],
  },
  typography: {
    pattern: VALIDATION_PATTERNS.typography,
    description: 'Typography utilities: -text--bold, -text--center',
    examples: ['-text--bold', '-text--center', '-text--truncate'],
  },
  sizing: {
    pattern: VALIDATION_PATTERNS.sizing,
    description: 'Sizing utilities: -w--100, -h--50',
    examples: ['-w--100', '-h--50', '-max-w--100'],
  },
  position: {
    pattern: VALIDATION_PATTERNS.position,
    description: 'Position utilities: -position--relative',
    examples: ['-position--relative', '-position--absolute'],
  },
  shadow: {
    pattern: VALIDATION_PATTERNS.shadow,
    description: 'Shadow utilities: -shadow--1, -shadow--2',
    examples: ['-shadow--1', '-shadow--2', '-shadow--3'],
  },
};

/**
 * Validates a utility class against all patterns.
 */
export function validateUtility(className: string): { valid: boolean; error?: string; category?: string } {
  for (const [category, schema] of Object.entries(UTILITY_SCHEMAS)) {
    if (schema.pattern.test(className)) {
      return { valid: true, category };
    }
  }

  return {
    valid: false,
    error: `Invalid utility class: ${className}. Check documentation for valid patterns.`,
  };
}
