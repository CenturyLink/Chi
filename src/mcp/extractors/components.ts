import { extractComponents as extractRawComponents, deduplicateComponents, buildCssToWcMap } from './extract.js';
import { COMP_CATEGORIES, COMP_DESCRIPTIONS } from '../config.js';

export interface CSSComponent {
  name: string;
  baseClass: string;
  description: string;
  modifiers: string[];
  modifierDescriptions: Record<string, string>;
  subcomponents?: string[];
  category: string;
  example: string;
  webComponentTag?: string;
}

const CSS_TO_WC = buildCssToWcMap();

function getCategory(name: string): string {
  for (const [cat, comps] of Object.entries(COMP_CATEGORIES)) {
    if (comps.includes(name)) return cat;
  }

  return 'Other';
}

function getDescription(name: string): string {
  return COMP_DESCRIPTIONS[name] ?? `Chi ${name} component`;
}

function getExample(baseClass: string, wcTag?: string): string {
  if (wcTag) return `<${wcTag}>...</${wcTag}>`;

  return `<div class="${baseClass}">...</div>`;
}

/** Extracts, deduplicates, and enriches components with descriptions, categories, and WC tags. */
export function extractComponents(): { components: CSSComponent[]; totalComponents: number; categories: string[] } {
  const deduplicated = deduplicateComponents(extractRawComponents(false));

  const components: CSSComponent[] = deduplicated.map((c) => {
    const modDescs: Record<string, string> = {};
    const wcTag = CSS_TO_WC[c.baseClass];

    for (const mod of c.modifiers) {
      modDescs[mod] = `${mod.replace(/^-/, '')} modifier`;
    }

    return {
      name: c.name,
      baseClass: c.baseClass,
      description: getDescription(c.name),
      modifiers: c.modifiers,
      modifierDescriptions: modDescs,
      subcomponents: c.subcomponents,
      category: getCategory(c.name),
      example: getExample(c.baseClass, wcTag),
      webComponentTag: wcTag,
    };
  });

  const categories = [...new Set(components.map((c) => c.category))];

  return { components, totalComponents: components.length, categories };
}
