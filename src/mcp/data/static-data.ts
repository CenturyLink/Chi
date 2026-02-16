import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile, readJSON, buildCssToWcMap } from '../extractors/extract.js';
import { SKILLS_DIR, RULES_DIR } from '../config.js';
import type { TokenCategory, Token } from '../extractors/tokens.js';
import type { UtilityCategory, UtilityClass } from '../extractors/utilities.js';
import type { CSSComponent } from '../extractors/components.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_TO_WC = buildCssToWcMap();

const MODIFIER_TO_PROP: Record<string, Record<string, { prop: string; value: string | boolean }>> = {
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
    '-closable': { prop: 'closable', value: true },
    '-center': { prop: 'center', value: true },
  },
  'chi-spinner': {
    '-sm': { prop: 'size', value: 'sm' },
    '-md': { prop: 'size', value: 'md' },
    '-lg': { prop: 'size', value: 'lg' },
    '-xl': { prop: 'size', value: 'xl' },
    '-primary': { prop: 'color', value: 'primary' },
    '-inverse': { prop: 'color', value: 'inverse' },
  },
};

export function loadTools(): unknown[] {
  return readJSON<unknown[]>(join(__dirname, 'tools.json')) ?? [];
}

export function loadAntiPatterns(): unknown[] {
  return [
    {
      bad: '<div style="padding: 2rem">',
      good: '<div class="-p--4">',
      reason: 'Use utility classes for spacing. -p--4 = 2rem (32px)',
      severity: 'error',
      category: 'spacing',
      autoFixable: true,
    },
    {
      bad: '<div style="margin: 0 auto">',
      good: '<div class="-mx--auto">',
      reason: 'Use -mx--auto for centering',
      severity: 'error',
      category: 'spacing',
      autoFixable: true,
    },
    {
      bad: '<div class="-p-4">',
      good: '<div class="-p--4">',
      reason: 'Double dash syntax required',
      severity: 'error',
      category: 'spacing',
      autoFixable: true,
    },
    {
      bad: '<div style="background-color: #0047BB">',
      good: '<div class="-bg--primary">',
      reason: 'Use color utilities',
      severity: 'error',
      category: 'color',
      autoFixable: false,
    },
    {
      bad: '<div class="-bg-primary">',
      good: '<div class="-bg--primary">',
      reason: 'Double dash syntax required',
      severity: 'error',
      category: 'color',
      autoFixable: true,
    },
    {
      bad: '<p style="color: red">Error</p>',
      good: '<p class="-text--danger">Error</p>',
      reason: 'Use semantic color utilities',
      severity: 'error',
      category: 'color',
      autoFixable: false,
    },
    {
      bad: '<div style="opacity: 0.6">',
      good: '<div class="-opacity--60">',
      reason: 'Use opacity utilities',
      severity: 'error',
      category: 'opacity',
      autoFixable: true,
    },
    {
      bad: '<button class="chi-button -primary">',
      good: '<chi-button color="primary">',
      reason: 'Prefer Web Components',
      severity: 'warning',
      category: 'webcomponent',
      webComponentAlternative: '<chi-button color="primary">',
      autoFixable: true,
    },
    {
      bad: '<button class="chi-button -primary -secondary">',
      good: '<chi-button color="primary">',
      reason: 'Only one color variant allowed',
      severity: 'error',
      category: 'components',
      autoFixable: false,
    },
    {
      bad: '<button class="btn">',
      good: '<chi-button>',
      reason: 'Use chi- prefix',
      severity: 'error',
      category: 'components',
      webComponentAlternative: '<chi-button>',
      autoFixable: true,
    },
    {
      bad: '<div class="chi-alert"><p>Message</p></div>',
      good: '<chi-alert>Message</chi-alert>',
      reason: 'Use Web Component for alerts',
      severity: 'warning',
      category: 'webcomponent',
      webComponentAlternative: '<chi-alert>Message</chi-alert>',
      autoFixable: true,
    },
    {
      bad: '<p style="font-size: 14px">',
      good: '<p class="-text--body">',
      reason: 'Use typography utilities',
      severity: 'error',
      category: 'typography',
      autoFixable: false,
    },
    {
      bad: '<div style="display: flex">',
      good: '<div class="-d--flex">',
      reason: 'Use display utilities',
      severity: 'error',
      category: 'layout',
      autoFixable: true,
    },
    {
      bad: '<div class="container">',
      good: '<div class="chi-container">',
      reason: 'Use chi- prefix',
      severity: 'warning',
      category: 'layout',
      autoFixable: true,
    },
    {
      bad: '<div style="border-radius: 50%">',
      good: '<div class="-circle">',
      reason: 'Use border utilities',
      severity: 'error',
      category: 'border',
      autoFixable: true,
    },
    {
      bad: '<div class="chi-modal">',
      good: '<chi-modal>',
      reason: 'Use Web Component for modals',
      severity: 'warning',
      category: 'webcomponent',
      webComponentAlternative: '<chi-modal>',
      autoFixable: true,
    },
    {
      bad: '<button class="chi-button" onclick="handleClick()">',
      good: '<chi-button @click="handleClick">',
      reason: 'Avoid inline handlers',
      severity: 'warning',
      category: 'accessibility',
      autoFixable: false,
    },
    {
      bad: '<img src="logo.png">',
      good: '<img src="logo.png" alt="Company logo">',
      reason: 'Images need alt text',
      severity: 'error',
      category: 'accessibility',
      autoFixable: false,
    },
    {
      bad: '<button class="chi-button">',
      good: '<chi-button type="button">',
      reason: 'Specify button type',
      severity: 'warning',
      category: 'accessibility',
      webComponentAlternative: '<chi-button type="button">',
      autoFixable: true,
    },
    {
      bad: '<div role="button">Click</div>',
      good: '<chi-button>Click</chi-button>',
      reason: 'Use semantic elements',
      severity: 'error',
      category: 'accessibility',
      webComponentAlternative: '<chi-button>Click</chi-button>',
      autoFixable: false,
    },
    {
      bad: '<input type="text">',
      good: '<chi-text-input label="Name">',
      reason: 'Use chi-text-input Web Component',
      severity: 'warning',
      category: 'webcomponent',
      webComponentAlternative: '<chi-text-input label="Name">',
      autoFixable: false,
    },
    {
      bad: '<span class="chi-icon icon-check"></span>',
      good: '<chi-icon icon="check" aria-hidden="true"></chi-icon>',
      reason: 'Use chi-icon Web Component',
      severity: 'warning',
      category: 'webcomponent',
      webComponentAlternative: '<chi-icon icon="check" aria-hidden="true">',
      autoFixable: true,
    },
  ];
}

export function loadSchemas(): Record<string, unknown> {
  return readJSON<Record<string, unknown>>(join(SKILLS_DIR, 'chi-component-schemas/schemas.json')) ?? {};
}

export const GUIDELINES = {
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
    'Spacing formula: space(N) = (N/2)rem. At 16px root: -p--1 = 0.5rem (8px), -p--2 = 1rem (16px), -p--4 = 2rem (32px)',
    'Use directional classes: -pt--* (top), -pr--* (right), -pb--* (bottom), -pl--* (left)',
    'Use axis classes: -px--* (horizontal), -py--* (vertical)',
    'Responsive variants: -p-sm--4, -m-lg--2, -d-xl--flex (breakpoint infixes)',
    'For centering: use -mx--auto for horizontal centering',
    'For gap spacing, use GLOBAL utilities -g--X, NOT chi-css-grid component modifiers -gap--X',
    'Gap utilities: -g--X (all directions), -gx--X (column-gap), -gy--X (row-gap)',
  ],
  styling: [
    'ALWAYS use utility classes for colors (-bg--*, -text--*) instead of inline styles',
    'ALWAYS use utility classes for opacity (-opacity--*) instead of inline styles',
    'Use design tokens for consistency (opacity-60, not 0.6)',
    'Prefer semantic colors: -bg--success, -bg--warning, -bg--danger',
    'NEVER write custom CSS or inline styles when a utility class exists',
  ],
  components: [
    'PREFER Web Components (<chi-button>) over CSS components (<button class="chi-button">)',
    'When using CSS approach, use component base classes: chi-button, chi-card, chi-alert',
    'Apply modifiers with dash prefix: -primary, -lg, -flat, -outline',
    'Combine utilities with components: <chi-button class="-p--4">',
    'Use BEM subcomponents when available: chi-card__header, chi-button__content',
  ],
  accessibility: [
    'Web Components handle most accessibility automatically - prefer them over CSS approach',
    'Always include proper ARIA attributes for CSS-based interactive components',
    'Use semantic HTML elements when possible',
    'Ensure sufficient color contrast (use -text--* utilities)',
    'Provide keyboard navigation support for custom interactions',
  ],
};

/** Builds a keyword-to-item search index for tokens, utilities, and components. */
export function buildSearchIndex(
  tokens: Record<string, TokenCategory>,
  utilities: { categories: UtilityCategory[] },
  components: { components: CSSComponent[] }
) {
  const tokensIdx: Record<string, string[]> = {};
  const utilsIdx: Record<string, string[]> = {};
  const cssIdx: Record<string, string[]> = {};

  const addIdx = (idx: Record<string, string[]>, keywords: string[], item: string) => {
    for (const kw of keywords) {
      const k = kw.toLowerCase();

      if (k.length < 2) continue;

      idx[k] ??= [];
      if (!idx[k]!.includes(item)) idx[k]!.push(item);
    }
  };

  for (const [catKey, cat] of Object.entries(tokens)) {
    if (catKey === 'byTheme' || !cat?.tokens) continue;

    for (const t of cat.tokens) addIdx(tokensIdx, [t.name, catKey, ...t.name.split('-')], t.name);
  }

  for (const cat of utilities.categories) {
    for (const u of cat.classes)
      addIdx(utilsIdx, [u.className, cat.name, ...u.className.split('-').filter(Boolean)], u.className);
  }

  for (const c of components.components) {
    addIdx(cssIdx, [c.name, c.baseClass, c.category, ...c.baseClass.split('-')], c.baseClass);
  }

  return { tokens: tokensIdx, utilities: utilsIdx, cssComponents: cssIdx };
}

/** Calculates description and example coverage metrics. */
export function calculateQuality(
  tokens: Record<string, TokenCategory>,
  utilities: { categories: UtilityCategory[] },
  components: { components: CSSComponent[] }
) {
  const allTokens = Object.entries(tokens)
    .filter(([k]) => k !== 'byTheme')
    .flatMap(([, c]) => c?.tokens ?? []) as Token[];

  const allUtils: UtilityClass[] = utilities.categories.flatMap((c) => c.classes);
  const pct = (p: number, t: number) => (t === 0 ? '0%' : `${Math.round((p / t) * 100)}%`);
  const withDesc = (items: { description?: string }[]) => items.filter((i) => Boolean(i.description)).length;
  const withExamples = (items: { examples?: string[] }[]) =>
    items.filter((i) => i.examples && i.examples.length > 0).length;

  return {
    tokensWithDescriptions: withDesc(allTokens),
    utilitiesWithDescriptions: withDesc(allUtils),
    cssComponentsWithDescriptions: withDesc(components.components),
    totalTokens: allTokens.length,
    totalUtilities: allUtils.length,
    totalCssComponents: components.components.length,
    coverage: {
      tokensWithDescriptions: pct(withDesc(allTokens), allTokens.length),
      tokensWithExamples: pct(withExamples(allTokens), allTokens.length),
      utilitiesWithExamples: pct(withExamples(allUtils), allUtils.length),
    },
  };
}

/** Builds CSS-to-Web Component migration rules with modifier-to-property mappings. */
export function buildMigrationRules() {
  const cssToWebComponent = Object.entries(CSS_TO_WC).map(([css, wc]) => {
    const mods = MODIFIER_TO_PROP[css] ?? {};

    const propertyMappings = Object.entries(mods).map(([mod, m]) => ({
      cssClass: mod,
      propName: m.prop,
      propValue: m.value,
      description: `${mod} → ${m.prop}="${m.value}"`,
    }));

    const first = propertyMappings[0];
    const hasProps = first !== undefined;

    return {
      cssSelector: css,
      webComponentTag: wc,
      propertyMappings,
      example: {
        before: hasProps ? `<div class="${css} ${first.cssClass}">Content</div>` : `<div class="${css}">Content</div>`,
        after: hasProps ? `<${wc} ${first.propName}="${first.propValue}">Content</${wc}>` : `<${wc}>Content</${wc}>`,
      },
    };
  });

  return {
    cssToWebComponent,
    utilityToProperty: [],
    deprecatedPatterns: [
      {
        pattern: 'class="chi-button"',
        replacement: '<chi-button>',
        reason: 'Web Components provide better DX',
        migrationGuide: 'Replace CSS class with Web Component tag',
      },
      {
        pattern: '-p-4',
        replacement: '-p--4',
        reason: 'Incorrect syntax: use double dash',
        migrationGuide: 'Change single dash to double dash before value',
      },
    ],
  };
}

export const RELATIONSHIPS = {
  utilities: {
    '-p--4': {
      tokens: ['base-unit'],
      utilities: ['-m--4', '-g--4', '-pt--4', '-px--4', '-py--4'],
      webComponents: ['chi-button', 'chi-card'],
      note: 'Part of spacing scale (2rem / 32px)',
    },
    '-mx--auto': {
      utilities: ['-m--auto', '-my--auto', '-d--block'],
      cssComponents: ['chi-container', 'chi-card'],
      note: 'Horizontal centering',
    },
    '-bg--primary': {
      tokens: ['color-background-primary'],
      utilities: ['-text--white', '-bg--secondary'],
      webComponents: ['chi-button', 'chi-alert'],
      note: 'Primary brand color',
    },
    '-d--flex': {
      utilities: ['-flex--row', '-flex--column', '-justify-content--center', '-align-items--center', '-g--3'],
      note: 'Flexbox container',
    },
  },
  components: {
    'chi-button': {
      utilities: ['-p--3', '-p--4', '-bg--primary', '-text--white'],
      cssComponents: ['chi-button-group', 'chi-icon'],
      webComponents: ['chi-icon', 'chi-spinner'],
      note: 'PREFER <chi-button> Web Component',
    },
    'chi-alert': {
      utilities: ['-p--3', '-m--4', '-text--danger', '-bg--danger-lighter'],
      cssComponents: ['chi-icon', 'chi-button'],
      note: 'PREFER <chi-alert> Web Component',
    },
    'chi-modal': {
      cssComponents: ['chi-backdrop', 'chi-button', 'chi-icon'],
      webComponents: ['chi-backdrop', 'chi-button'],
      tokens: ['zindex-modal'],
      note: 'PREFER <chi-modal> Web Component',
    },
  },
  tokens: {
    'base-unit': {
      utilities: ['-p--1', '-p--2', '-p--3', '-p--4', '-m--1', '-m--2', '-m--3', '-m--4'],
      note: 'Foundation of spacing scale (8px)',
    },
    'zindex-modal': {
      tokens: ['zindex-backdrop'],
      webComponents: ['chi-modal'],
      note: 'Z-index for modal dialogs (50)',
    },
  },
};

interface DistributableFile {
  path: string;
  content: string;
  description: string;
}

interface SkillBundle {
  name: string;
  type: 'rule' | 'skill';
  description: string;
  files: DistributableFile[];
}

/** Bundles all distributable skill and rule files for inclusion in metadata. */
export function bundleDistributableSkills(version?: string): {
  version: string;
  generatedAt: string;
  skills: SkillBundle[];
  totalFiles: number;
} {
  const bundles: SkillBundle[] = [];

  const rules: Array<{ name: string; file: string; description: string }> = [
    {
      name: 'chi-design-system',
      file: 'chi-design-system.md',
      description: 'Global Chi conventions: implementation priority, double-dash syntax, spacing system, themes',
    },
    {
      name: 'chi-code-validation',
      file: 'chi-code-validation.md',
      description: 'Anti-pattern detection, utility format validation, component schema checks, accessibility rules',
    },
    {
      name: 'chi-migration',
      file: 'chi-migration.md',
      description: 'CSS-to-Web Component mappings, modifier-to-property tables, migration steps and examples',
    },
  ];

  for (const rule of rules) {
    const content = readFile(join(RULES_DIR, rule.file));

    if (content) {
      bundles.push({
        name: rule.name,
        type: 'rule',
        description: rule.description,
        files: [{ path: `.cursor/rules/${rule.file}`, content, description: rule.description }],
      });
    }
  }

  const skills: Array<{ name: string; dir: string; files: string[]; description: string }> = [
    {
      name: 'chi-components',
      dir: 'chi-components',
      files: ['SKILL.md', 'reference.md'],
      description:
        'Component reference: names, modifiers, BEM structure, Web Component equivalents, categories, performance hints',
    },
    {
      name: 'chi-tokens',
      dir: 'chi-tokens',
      files: ['SKILL.md', 'reference.md'],
      description: 'Design tokens: SCSS variables, values, categories, theme-specific tokens',
    },
    {
      name: 'chi-utilities',
      dir: 'chi-utilities',
      files: ['SKILL.md', 'reference.md'],
      description:
        'Utility classes: spacing, color, opacity, display, flexbox, typography, sizing, border, position, shadow',
    },
    {
      name: 'chi-component-schemas',
      dir: 'chi-component-schemas',
      files: ['SKILL.md', 'schemas.json'],
      description: 'Validation schemas: allowed modifiers, conflicts, required attributes, accessibility requirements',
    },
    {
      name: 'chi-search',
      dir: 'chi-search',
      files: ['SKILL.md', 'reference.md'],
      description: 'Semantic search: synonym dictionary, use-case mappings for discoverability',
    },
    {
      name: 'chi-recommendations',
      dir: 'chi-recommendations',
      files: ['SKILL.md'],
      description: 'Implementation approach decision tree: framework detection, constraint overrides, code examples',
    },
  ];

  for (const skill of skills) {
    const skillFiles: DistributableFile[] = [];

    for (const file of skill.files) {
      const content = readFile(join(SKILLS_DIR, skill.dir, file));

      if (content) {
        skillFiles.push({
          path: `.cursor/skills/${skill.dir}/${file}`,
          content,
          description: `${skill.name}: ${file}`,
        });
      }
    }

    if (skillFiles.length > 0) {
      bundles.push({ name: skill.name, type: 'skill', description: skill.description, files: skillFiles });
    }
  }

  const totalFiles = bundles.reduce((sum, b) => sum + b.files.length, 0);

  return { version: version ?? '0.0.0', generatedAt: new Date().toISOString(), skills: bundles, totalFiles };
}
