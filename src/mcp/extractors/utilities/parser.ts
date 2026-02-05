/**
 * Utility Class Parser
 *
 * Parses utility classes from SCSS files and generates metadata.
 * Extracts CSS properties, creates descriptions, and generates examples.
 */

import type { UtilityClass, CssProperty } from '../../types/index.js';
import { autoCorrectUtilityFormat } from './validator.js';

const EXAMPLE_TEMPLATES: Record<string, (className: string) => string[]> = {
  spacing: (cls) => [
    `<div class="${cls}">Content with spacing</div>`,
    `<button class="${cls}">Button with spacing</button>`,
  ],
  display: (cls) => [`<div class="${cls}">Display element</div>`, `<nav class="${cls}">Navigation</nav>`],
  flex: (cls) => [
    `<div class="-d--flex ${cls}">Flex container</div>`,
    `<div class="-d--flex ${cls}"><div>Item 1</div><div>Item 2</div></div>`,
  ],
  border: (cls) => [
    `<div class="${cls}">Element with border style</div>`,
    `<button class="${cls}">Button with border</button>`,
    `<img class="${cls}" src="image.jpg" alt="Styled image">`,
  ],
  text: (cls) => [
    `<p class="${cls}">Text with formatting</p>`,
    `<h2 class="${cls}">Heading with style</h2>`,
    `<span class="${cls}">Styled inline text</span>`,
  ],
  sizing: (cls) => [
    `<div class="${cls}">Element with width</div>`,
    `<img class="${cls}" src="image.jpg" alt="Sized image">`,
  ],
};

const DESCRIPTION_GENERATORS: Record<string, (className: string, mainProp: CssProperty) => string | null> = {
  spacing: (className) => {
    const baseName = className.split('--')[0] ?? '';

    if (baseName.startsWith('-m')) return `Apply margin`;
    if (baseName.startsWith('-p')) return `Apply padding`;
    if (baseName.startsWith('-g')) return `Apply gap`;

    return null;
  },
  display: (_, mainProp) => `Set display to ${mainProp.value}`,
  flex: (_, mainProp) => `Flexbox: ${mainProp.property} ${mainProp.value}`,
  border: (className, mainProp) => {
    if (className.includes('rounded')) return `Rounded corners: ${mainProp.value}`;
    if (className.includes('raindrop')) return 'Raindrop-shaped border (3 rounded corners)';
    if (className.includes('circle')) return 'Circular shape (50% border radius)';

    return `Border: ${mainProp.property} ${mainProp.value}`;
  },
  text: (className, mainProp) => {
    if (className.includes('bold')) return `Font weight: ${mainProp.value}`;
    if (className.includes('italic')) return 'Italic text style';
    if (className.includes('truncate')) return 'Truncate text with ellipsis';
    if (className.includes('nowrap')) return 'Prevent text wrapping';
    if (className.includes('capitalize')) return `Text transform: ${mainProp.value}`;

    return `Text: ${mainProp.property} ${mainProp.value}`;
  },
  sizing: (className, mainProp) => {
    if (className.includes('-w-')) return `Width: ${mainProp.value}`;
    if (className.includes('-h-')) return `Height: ${mainProp.value}`;

    return null;
  },
};

/**
 * Parses CSS content to extract properties and values.
 */
export function parseCss(cssContent: string): CssProperty[] {
  const properties: CssProperty[] = [];
  const lines = cssContent
    .split(';')
    .map((l) => l.trim())
    .filter(Boolean);

  for (const line of lines) {
    const colonIndex = line.indexOf(':');

    if (colonIndex === -1) continue;

    const property = line.slice(0, colonIndex).trim();
    const value = line
      .slice(colonIndex + 1)
      .replace('!important', '')
      .trim();

    if (property && value) {
      properties.push({ property, value });
    }
  }

  return properties;
}

/**
 * Generates human-readable description for utility class.
 */
export function generateDescription(className: string, props: CssProperty[], category: string): string {
  const mainProp = props[0];

  if (!mainProp) return `Utility class ${className}`;

  const generator = DESCRIPTION_GENERATORS[category];

  if (generator) {
    const description = generator(className, mainProp);

    if (description) return description;
  }

  return `${mainProp.property}: ${mainProp.value}`;
}

/**
 * Generates HTML examples for a utility class.
 */
function generateExamples(className: string, category: string): string[] | undefined {
  const templateFn = EXAMPLE_TEMPLATES[category];
  if (templateFn) {
    const examples = templateFn(className);
    return examples.length > 0 ? examples : undefined;
  }
  return undefined;
}

/**
 * Parses utility classes from SCSS file content.
 * @param content - SCSS file content
 * @param category - Category name for this file
 * @returns Array of parsed utility classes
 */
export function parseUtilityClasses(content: string, category: string): UtilityClass[] {
  const classes: UtilityClass[] = [];
  const classRegex = /\.-([a-z0-9-_]+)\s*{([^}]+)}/gi;
  let match;

  while ((match = classRegex.exec(content)) !== null) {
    const rawClassName = match[1];
    const cssContent = match[2];

    if (!rawClassName || !cssContent) continue;

    const cssProperties = parseCss(cssContent);

    if (cssProperties.length === 0) continue;

    const rawFullClassName = `-${rawClassName}`;
    const correctedClassName = autoCorrectUtilityFormat(rawFullClassName);
    const description = generateDescription(correctedClassName, cssProperties, category);
    const examples = generateExamples(correctedClassName, category);
    const isResponsive = /-(?:sm|md|lg|xl|xxl)--/.test(rawClassName);

    classes.push({
      className: correctedClassName,
      description,
      cssProperties,
      responsive: isResponsive,
      examples,
    });
  }

  return classes;
}
