/**
 * Chi MCP Constants
 *
 * Central configuration values used throughout the metadata generator.
 */

export const THEMES = ['lumen', 'brightspeed', 'centurylink', 'colt', 'portal', 'connect'] as const;
export type Theme = (typeof THEMES)[number];
export const ROOT_DIR = '../../..';
export const MIN_KEYWORD_LENGTH = 4;
export const METADATA_FORMAT_VERSION = '1.0.0';
export { VALIDATION_PATTERNS as UTILITY_FORMAT_PATTERNS } from './patterns.js';
export const WEB_COMPONENT_PREFIX = 'chi-';

export const CSS_TO_WEB_COMPONENT_MAP: Record<string, string> = {
  'chi-button': 'chi-button',
  'chi-alert': 'chi-alert',
  'chi-modal': 'chi-modal',
  'chi-dropdown': 'chi-dropdown',
  'chi-tabs': 'chi-tabs',
  'chi-accordion': 'chi-accordion',
  'chi-drawer': 'chi-drawer',
  'chi-popover': 'chi-popover',
  'chi-tooltip': 'chi-tooltip',
  'chi-spinner': 'chi-spinner',
  'chi-badge': 'chi-badge',
  'chi-breadcrumb': 'chi-breadcrumb',
  'chi-card': 'chi-card',
  'chi-checkbox': 'chi-checkbox',
  'chi-date-picker': 'chi-date-picker',
  'chi-time-picker': 'chi-time-picker',
  'chi-expansion-panel': 'chi-expansion-panel',
  'chi-icon': 'chi-icon',
  'chi-label': 'chi-label',
  'chi-link': 'chi-link',
  'chi-number-input': 'chi-number-input',
  'chi-pagination': 'chi-pagination',
  'chi-phone-input': 'chi-phone-input',
  'chi-picker': 'chi-picker',
  'chi-progress': 'chi-progress',
  'chi-radio-button': 'chi-radio-button',
  'chi-search-input': 'chi-search-input',
  'chi-switch': 'chi-switch',
  'chi-text-input': 'chi-text-input',
  'chi-textarea': 'chi-textarea',
};

/**
 * CSS modifier to Web Component property mappings.
 * Complete mappings for all components with CSS modifiers.
 */
export const MODIFIER_TO_PROP_MAP: Record<string, Record<string, { prop: string; value: string | boolean }>> = {
  'chi-button': {
    '-primary': { prop: 'color', value: 'primary' },
    '-secondary': { prop: 'color', value: 'secondary' },
    '-dark': { prop: 'color', value: 'dark' },
    '-light': { prop: 'color', value: 'light' },
    '-danger': { prop: 'color', value: 'danger' },
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-flat': { prop: 'variant', value: 'flat' },
    '-outline': { prop: 'variant', value: 'outline' },
    '-pill': { prop: 'pill', value: true },
    '-fluid': { prop: 'fluid', value: true },
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-alert': {
    '-success': { prop: 'color', value: 'success' },
    '-warning': { prop: 'color', value: 'warning' },
    '-danger': { prop: 'color', value: 'danger' },
    '-info': { prop: 'color', value: 'info' },
    '-muted': { prop: 'color', value: 'muted' },
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-closable': { prop: 'closable', value: true },
    '-center': { prop: 'center', value: true },
  },
  'chi-spinner': {
    '-sm': { prop: 'size', value: 'sm' },
    '-sm--2': { prop: 'size', value: 'sm--2' },
    '-sm--3': { prop: 'size', value: 'sm--3' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-xxl': { prop: 'size', value: 'xxl' },
    '-primary': { prop: 'color', value: 'primary' },
    '-inverse': { prop: 'color', value: 'inverse' },
  },
  'chi-badge': {
    '-primary': { prop: 'color', value: 'primary' },
    '-success': { prop: 'color', value: 'success' },
    '-warning': { prop: 'color', value: 'warning' },
    '-danger': { prop: 'color', value: 'danger' },
    '-info': { prop: 'color', value: 'info' },
    '-light': { prop: 'color', value: 'light' },
    '-dark': { prop: 'color', value: 'dark' },
    '-muted': { prop: 'color', value: 'muted' },
    '-sm': { prop: 'size', value: 'sm' },
    '-xs': { prop: 'size', value: 'xs' },
    '-flat': { prop: 'variant', value: 'flat' },
    '-outline': { prop: 'variant', value: 'outline' },
  },
  'chi-modal': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-center': { prop: 'center', value: true },
  },
  'chi-drawer': {
    '-active': { prop: 'active', value: true },
    '-left': { prop: 'position', value: 'left' },
    '-right': { prop: 'position', value: 'right' },
    '-top': { prop: 'position', value: 'top' },
    '-bottom': { prop: 'position', value: 'bottom' },
  },
  'chi-dropdown': {
    '-animate': { prop: 'animate', value: true },
    '-hover': { prop: 'hover', value: true },
  },
  'chi-tabs': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-vertical': { prop: 'vertical', value: true },
    '-border': { prop: 'border', value: true },
    '-sliding-border': { prop: 'sliding-border', value: true },
  },
  'chi-tooltip': {
    '-top': { prop: 'position', value: 'top' },
    '-right': { prop: 'position', value: 'right' },
    '-bottom': { prop: 'position', value: 'bottom' },
    '-left': { prop: 'position', value: 'left' },
  },
  'chi-popover': {
    '-top': { prop: 'position', value: 'top' },
    '-right': { prop: 'position', value: 'right' },
    '-bottom': { prop: 'position', value: 'bottom' },
    '-left': { prop: 'position', value: 'left' },
  },
  'chi-card': {
    '-active': { prop: 'active', value: true },
    '-hover': { prop: 'hover', value: true },
    '-portal': { prop: 'portal', value: true },
  },
  'chi-accordion': {
    '-portal': { prop: 'portal', value: true },
  },
  'chi-expansion-panel': {
    '-active': { prop: 'active', value: true },
    '-disabled': { prop: 'disabled', value: true },
    '-bordered': { prop: 'bordered', value: true },
  },
  'chi-text-input': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-disabled': { prop: 'disabled', value: true },
    '-danger': { prop: 'state', value: 'danger' },
    '-success': { prop: 'state', value: 'success' },
    '-warning': { prop: 'state', value: 'warning' },
  },
  'chi-textarea': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-checkbox': {
    '-disabled': { prop: 'disabled', value: true },
    '-checked': { prop: 'checked', value: true },
  },
  'chi-radio-button': {
    '-disabled': { prop: 'disabled', value: true },
    '-checked': { prop: 'checked', value: true },
  },
  'chi-switch': {
    '-disabled': { prop: 'disabled', value: true },
    '-sm': { prop: 'size', value: 'sm' },
    '-xs': { prop: 'size', value: 'xs' },
  },
  'chi-progress': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
  },
  'chi-pagination': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-compact': { prop: 'compact', value: true },
  },
  'chi-icon': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-xxl': { prop: 'size', value: 'xxl' },
    '-xs': { prop: 'size', value: 'xs' },
    '-sm--2': { prop: 'size', value: 'sm--2' },
    '-sm--3': { prop: 'size', value: 'sm--3' },
  },
  'chi-link': {
    '-cta': { prop: 'cta', value: true },
    '-disabled': { prop: 'disabled', value: true },
    '-no-underline': { prop: 'no-underline', value: true },
  },
  'chi-label': {
    '-required': { prop: 'required', value: true },
    '-optional': { prop: 'optional', value: true },
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
  },
  'chi-date-picker': {
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-time-picker': {
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-number-input': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-disabled': { prop: 'disabled', value: true },
    '-expanded': { prop: 'expanded', value: true },
  },
  'chi-search-input': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-phone-input': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-picker': {
    '-active': { prop: 'active', value: true },
    '-disabled': { prop: 'disabled', value: true },
  },
  'chi-breadcrumb': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
  },
};
