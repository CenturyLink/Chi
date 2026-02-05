/**
 * HTML to Web Component Migration
 *
 * Validates and migrates CSS class-based components to Web Component properties.
 * Ensures correct mapping of modifiers to properties.
 */

import type { PropertyMapping, CssToWebComponentRule, MigrationRules } from '../types/index.js';
import { CSS_TO_WEB_COMPONENT_MAP, MODIFIER_TO_PROP_MAP } from '../config/constants.js';

interface ParsedHtmlElement {
  tag: string;
  classes: string[];
  attributes: Record<string, string>;
}

/**
 * Parses HTML to extract component classes and modifiers.
 * @param html - HTML string to parse
 * @returns Parsed element or null if parsing fails
 */
function parseHtmlElement(html: string): ParsedHtmlElement | null {
  const tagMatch = html.match(/<(\w+)([^>]*)>/);

  if (!tagMatch) return null;

  const tag = tagMatch[1];
  const attrString = tagMatch[2] ?? '';

  if (!tag) return null;

  const classMatch = attrString.match(/class=["']([^"']+)["']/);
  const classContent = classMatch?.[1] ?? '';
  const classes = classContent.split(/\s+/).filter(Boolean);
  const attributes: Record<string, string> = {};
  const attrRegex = /(\w+)=["']([^"']+)["']/g;
  let match;

  while ((match = attrRegex.exec(attrString)) !== null) {
    const attrName = match[1];
    const attrValue = match[2];

    if (attrName && attrValue && attrName !== 'class') {
      attributes[attrName] = attrValue;
    }
  }

  return { tag, classes, attributes };
}

/**
 * Identifies the base Chi component class from a list of classes.
 */
function findBaseClass(classes: string[]): string | null {
  return classes.find((cls) => cls.startsWith('chi-') && !cls.startsWith('-')) || null;
}

/**
 * Extracts modifier classes from a list of classes.
 */
function extractModifiers(classes: string[]): string[] {
  return classes.filter((cls) => cls.startsWith('-') && !cls.startsWith('--'));
}

/**
 * Maps CSS modifiers to Web Component properties.
 */
export function mapModifiersToProps(baseClass: string, modifiers: string[]): PropertyMapping[] {
  const mappings: PropertyMapping[] = [];
  const componentMappings = MODIFIER_TO_PROP_MAP[baseClass] || {};

  for (const modifier of modifiers) {
    const mapping = componentMappings[modifier];

    if (mapping) {
      mappings.push({
        cssClass: modifier,
        propName: mapping.prop,
        propValue: mapping.value,
        description: `Converts ${modifier} to ${mapping.prop}="${mapping.value}"`,
      });
    } else {
      const propName = modifier.replace(/^-+/, '').replace(/-/g, '');

      mappings.push({
        cssClass: modifier,
        propName,
        propValue: true,
        description: `Unknown modifier ${modifier}, suggest using as boolean prop`,
      });
    }
  }

  return mappings;
}

/**
 * Generates Web Component HTML from CSS component.
 */
export function generateWebComponentHtml(
  baseClass: string,
  modifiers: string[],
  content: string,
  attributes: Record<string, string>
): string {
  const webComponentTag = CSS_TO_WEB_COMPONENT_MAP[baseClass];

  if (!webComponentTag) return '';

  const propMappings = mapModifiersToProps(baseClass, modifiers);

  const props: string[] = [];
  for (const mapping of propMappings) {
    if (typeof mapping.propValue === 'boolean' && mapping.propValue) {
      props.push(mapping.propName);
    } else {
      props.push(`${mapping.propName}="${mapping.propValue}"`);
    }
  }

  for (const [key, value] of Object.entries(attributes)) {
    if (key !== 'class' && !props.some((p) => p.startsWith(key))) {
      props.push(`${key}="${value}"`);
    }
  }

  const propsString = props.length > 0 ? ' ' + props.join(' ') : '';

  return `<${webComponentTag}${propsString}>${content}</${webComponentTag}>`;
}

interface MigrationResult {
  isValid: boolean;
  canMigrate: boolean;
  originalHtml: string;
  migratedHtml: string;
  warnings: string[];
  suggestions: string[];
}

function createMigrationResult(html: string): MigrationResult {
  return {
    isValid: true,
    canMigrate: false,
    originalHtml: html,
    migratedHtml: '',
    warnings: [],
    suggestions: [],
  };
}

function buildMigratedHtml(
  baseClass: string,
  modifiers: string[],
  utilityClasses: string[],
  content: string,
  attributes: Record<string, string>
): string {
  let migratedHtml = generateWebComponentHtml(baseClass, modifiers, content, attributes);

  if (utilityClasses.length > 0) {
    migratedHtml = migratedHtml.replace('>', ` class="${utilityClasses.join(' ')}">`);
  }

  return migratedHtml;
}

function getUnmappedModifierWarnings(baseClass: string, modifiers: string[]): string[] {
  const propMappings = mapModifiersToProps(baseClass, modifiers);

  return propMappings
    .filter((mapping) => !MODIFIER_TO_PROP_MAP[baseClass]?.[mapping.cssClass])
    .map((mapping) => `Modifier ${mapping.cssClass} may not have a direct property equivalent`);
}

/**
 * Validates HTML and suggests Web Component migration.
 */
export function validateAndMigrate(html: string): MigrationResult {
  const result = createMigrationResult(html);
  const parsed = parseHtmlElement(html);

  if (!parsed) {
    result.isValid = false;
    result.warnings.push('Could not parse HTML element');
    return result;
  }

  const baseClass = findBaseClass(parsed.classes);

  if (!baseClass) return result;

  const webComponentTag = CSS_TO_WEB_COMPONENT_MAP[baseClass];

  if (!webComponentTag) {
    result.suggestions.push(`No Web Component equivalent found for ${baseClass}`);

    return result;
  }

  result.canMigrate = true;
  result.suggestions.push(`RECOMMENDED: Use <${webComponentTag}> instead of <${parsed.tag} class="${baseClass}">`);

  const modifiers = extractModifiers(parsed.classes);
  const utilityClasses = parsed.classes.filter((cls) => cls.startsWith('-') && !modifiers.includes(cls));
  const contentMatch = html.match(/>([^<]*)</);
  const content = contentMatch?.[1] ?? '';

  result.migratedHtml = buildMigratedHtml(baseClass, modifiers, utilityClasses, content, parsed.attributes);

  if (utilityClasses.length > 0) {
    result.suggestions.push(`Utility classes ${utilityClasses.join(', ')} can remain on Web Component`);
  }

  result.warnings.push(...getUnmappedModifierWarnings(baseClass, modifiers));

  return result;
}

/**
 * Creates migration rules for all known component mappings.
 */
export function createMigrationRules(): MigrationRules {
  const cssToWebComponent: CssToWebComponentRule[] = [];

  for (const [cssClass, webTag] of Object.entries(CSS_TO_WEB_COMPONENT_MAP)) {
    const modifierMappings = MODIFIER_TO_PROP_MAP[cssClass] || {};
    const propertyMappings: PropertyMapping[] = [];

    for (const [modifier, mapping] of Object.entries(modifierMappings)) {
      propertyMappings.push({
        cssClass: modifier,
        propName: mapping.prop,
        propValue: mapping.value,
        description: `${modifier} → ${mapping.prop}="${mapping.value}"`,
      });
    }

    const firstMapping = propertyMappings[0];
    const exampleModifier = firstMapping?.cssClass ?? '-primary';
    const exampleProp = firstMapping ? `${firstMapping.propName}="${firstMapping.propValue}"` : 'color="primary"';

    cssToWebComponent.push({
      cssSelector: cssClass,
      webComponentTag: webTag,
      propertyMappings,
      example: {
        before: `<button class="${cssClass} ${exampleModifier}">Click</button>`,
        after: `<${webTag} ${exampleProp}>Click</${webTag}>`,
      },
    });
  }

  return {
    cssToWebComponent,
    utilityToProperty: [],
    deprecatedPatterns: [
      {
        pattern: 'class="chi-button"',
        replacement: '<chi-button>',
        reason: 'Web Components provide better DX and type safety',
        migrationGuide: 'Replace CSS class with Web Component tag',
      },
      {
        pattern: '-p-4',
        replacement: '-p--4',
        reason: 'Incorrect syntax: use double dash for values',
        migrationGuide: 'Change single dash to double dash before value',
      },
    ],
  };
}
