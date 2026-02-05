/**
 * Search Index Builder
 *
 * Creates keyword-based search indices for semantic search
 * across tokens, utilities, and CSS components.
 * Supports synonym expansion for better discoverability.
 */

import type { DesignTokens, Utilities, CSSComponents, SearchIndex, TokenCategory } from '../types/index.js';
import { extractKeywords, addToIndex } from '../utils/helpers.js';

type KeywordIndex = Record<string, string[]>;

const SYNONYMS: Readonly<Record<string, readonly string[]>> = {
  padding: ['space', 'spacing', 'whitespace', 'inner-space'],
  margin: ['spacing', 'gap', 'distance', 'outer-space'],
  primary: ['main', 'brand', 'blue'],
  secondary: ['alternate', 'grey', 'gray'],
  button: ['btn', 'cta', 'action'],
  color: ['colour', 'bg', 'background', 'text'],
  center: ['middle', 'centered'],
  flex: ['flexbox', 'flexible'],
  hide: ['hidden', 'invisible', 'display-none'],
  show: ['visible', 'display'],
  rounded: ['radius', 'border-radius', 'curved'],
  opacity: ['transparency', 'alpha', 'transparent'],
  shadow: ['elevation', 'depth'],
  font: ['text', 'typography'],
  modal: ['dialog', 'popup', 'overlay'],
  tooltip: ['hint', 'popover'],
  dropdown: ['select', 'menu'],
  alert: ['message', 'notification', 'banner'],
  card: ['panel', 'container', 'box'],
  icon: ['symbol', 'glyph'],
  bold: ['strong', 'weight', 'heavy'],
  danger: ['error', 'red', 'destructive'],
  success: ['green', 'positive', 'confirm'],
  warning: ['caution', 'orange', 'alert'],
  disabled: ['inactive', 'unavailable'],
  webcomponent: ['custom-element', 'ce', 'wc'],
};

/**
 * Common use case mappings for semantic search.
 * Maps natural language queries to relevant Chi elements.
 */
const USE_CASES: Readonly<Record<string, readonly string[]>> = {
  'center content': ['-mx--auto', '-d--flex', '-justify-content--center', '-align-items--center'],
  'center text': ['-text--center'],
  'card with shadow': ['chi-card', '-elevation--2', '-p--4', '-rounded--3'],
  'error message': ['chi-alert', '-danger', '-text--danger', '-bg--danger-lighter'],
  'success message': ['chi-alert', '-success', '-text--success'],
  'primary button': ['chi-button', '-primary', '-p--3'],
  'centered modal': ['chi-modal', 'chi-backdrop', '-mx--auto'],
  'responsive spacing': ['-p-sm--2', '-p-md--3', '-p-lg--4'],
  'hide on mobile': ['-d--none', '-d-sm--block'],
  'flex layout': ['-d--flex', '-flex--row', '-g--3'],
  'disabled state': ['-opacity--60', 'disabled', '-text--muted'],
  'form input': ['chi-input', 'chi-label', 'chi-form-wrapper'],
  'loading spinner': ['chi-spinner', '-sm', '-md'],
  'icon button': ['chi-button', '-icon', 'chi-icon'],
  'vertical stack': ['-d--flex', '-flex--column', '-g--2'],
  'horizontal list': ['-d--flex', '-flex--row', '-g--3'],
  'full width': ['-w--100'],
  'rounded corners': ['-rounded--2', '-rounded--3', '-rounded--4'],
  'subtle background': ['-bg--grey-10', '-bg--muted-lighter'],
  'bold text': ['-text--bold', 'font-weight-bold'],
};

/**
 * Expands keywords with synonyms for better search coverage.
 * @param keywords - Original keywords to expand
 * @returns Expanded array including synonyms
 */
function expandWithSynonyms(keywords: string[]): string[] {
  const expanded = new Set(keywords);

  for (const keyword of keywords) {
    const normalizedKeyword = keyword.toLowerCase();
    const synonymList = SYNONYMS[normalizedKeyword];

    if (synonymList) {
      for (const synonym of synonymList) {
        expanded.add(synonym);
      }
    }
  }

  return Array.from(expanded);
}

/**
 * Type guard to check if a value is a TokenCategory.
 */
function isTokenCategory(value: unknown): value is TokenCategory {
  return (
    typeof value === 'object' && value !== null && 'tokens' in value && Array.isArray((value as TokenCategory).tokens)
  );
}

/**
 * Indexes design tokens for search.
 * @param tokens - Design tokens to index
 * @param index - Index to add keywords to
 */
function indexTokens(tokens: DesignTokens, index: KeywordIndex): void {
  for (const [categoryKey, category] of Object.entries(tokens)) {
    if (categoryKey === 'byTheme' || !isTokenCategory(category)) continue;

    for (const token of category.tokens) {
      if (!token.name) continue;

      const keywords = [
        token.name,
        category.description ?? categoryKey,
        ...token.name.split('-'),
        ...(token.description ? extractKeywords(token.description) : []),
      ];

      addToIndex(index, expandWithSynonyms(keywords), token.name);
    }
  }
}

/**
 * Indexes utility classes for search.
 * @param utilities - Utilities to index
 * @param index - Index to add keywords to
 */
function indexUtilities(utilities: Utilities, index: KeywordIndex): void {
  for (const category of utilities.categories) {
    for (const utilClass of category.classes) {
      const nameParts = utilClass.className.split('-').filter((p) => p.length > 0);
      const propNames = utilClass.cssProperties.map((p) => p.property);
      const descKeywords = utilClass.description ? extractKeywords(utilClass.description) : [];
      const keywords = [utilClass.className, category.name, ...nameParts, ...descKeywords, ...propNames];

      addToIndex(index, expandWithSynonyms(keywords), utilClass.className);
    }
  }
}

/**
 * Indexes CSS components for search.
 * @param cssComponents - CSS components to index
 * @param index - Index to add keywords to
 */
function indexCssComponents(cssComponents: CSSComponents, index: KeywordIndex): void {
  for (const component of cssComponents.components) {
    const baseKeywords = component.baseClass.split('-');
    const descKeywords = component.description ? extractKeywords(component.description) : [];
    const keywords = [
      component.name,
      component.baseClass,
      component.category,
      ...baseKeywords,
      ...descKeywords,
      ...component.modifiers,
    ];

    if (component.webComponentTag) {
      keywords.push(component.webComponentTag, 'webcomponent', 'custom-element');
    }

    addToIndex(index, expandWithSynonyms(keywords), component.baseClass);
    for (const mod of component.modifiers) {
      const modParts = mod.split('-').filter((p) => p.length > 0);
      const modKeywords = [mod, component.name, ...modParts];

      addToIndex(index, expandWithSynonyms(modKeywords), `${component.baseClass}${mod}`);
    }
  }
}

/**
 * Indexes common use cases for semantic search.
 * @param index - Index to add use case keywords to
 */
function indexUseCases(index: KeywordIndex): void {
  for (const [useCase, elements] of Object.entries(USE_CASES)) {
    const keywords = extractKeywords(useCase);

    for (const element of elements) {
      addToIndex(index, keywords, element);
    }
  }
}

/**
 * Builds complete search index from all metadata.
 * Creates keyword mappings for tokens, utilities, and CSS components.
 * @param designTokens - Design tokens to index
 * @param utilities - Utilities to index
 * @param cssComponents - CSS components to index
 * @returns Complete search index
 */
export function buildSearchIndex(
  designTokens: DesignTokens,
  utilities: Utilities,
  cssComponents: CSSComponents
): SearchIndex {
  const tokensIndex: KeywordIndex = {};
  const utilsIndex: KeywordIndex = {};
  const cssIndex: KeywordIndex = {};

  indexTokens(designTokens, tokensIndex);
  indexUtilities(utilities, utilsIndex);
  indexCssComponents(cssComponents, cssIndex);
  indexUseCases(tokensIndex);
  indexUseCases(utilsIndex);
  indexUseCases(cssIndex);

  return {
    tokens: tokensIndex,
    utilities: utilsIndex,
    cssComponents: cssIndex,
  };
}
