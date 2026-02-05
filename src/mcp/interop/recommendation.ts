/**
 * Unified Recommendation Engine
 *
 * Provides intelligent recommendations for which Chi implementation
 * approach to use based on project context. This logic can be used
 * standalone or integrated with the central MCP repository.
 */

import type { ChiApproach, ProjectContext, RecommendationResult, RecommendationCondition } from './types.js';

export const RECOMMENDATION_CONDITIONS: RecommendationCondition[] = [
  {
    when: { framework: 'vue' },
    recommend: 'vue',
    reasoning: 'Vue projects should use chi-vue components for optimal integration with Vue reactivity system',
  },
  {
    when: { framework: 'react' },
    recommend: 'custom-elements',
    reasoning: 'React projects work well with Custom Elements. Consider using a wrapper for better React integration.',
  },
  {
    when: { framework: 'angular' },
    recommend: 'custom-elements',
    reasoning: 'Angular has excellent Custom Elements support via CUSTOM_ELEMENTS_SCHEMA',
  },
  {
    when: { framework: 'svelte' },
    recommend: 'custom-elements',
    reasoning: 'Svelte works seamlessly with Custom Elements',
  },
  {
    when: { framework: 'vanilla' },
    recommend: 'custom-elements',
    reasoning: 'Custom Elements provide the best DX for vanilla JavaScript projects',
  },
  {
    when: { browserSupport: 'legacy' },
    recommend: 'html-css',
    reasoning: 'Legacy browser support requires HTML/CSS approach (polyfills may be needed for Custom Elements)',
  },
  {
    when: { preferences: { preferCssOnly: true } },
    recommend: 'html-css',
    reasoning: 'User explicitly requested CSS-only approach',
  },
  {
    when: { preferences: { preferWebComponents: true } },
    recommend: 'custom-elements',
    reasoning: 'User prefers Web Components for framework-agnostic code',
  },
];

function determineFallback(primary: ChiApproach): ChiApproach {
  return primary === 'vue' ? 'custom-elements' : primary === 'custom-elements' ? 'html-css' : 'custom-elements';
}

/**
 * Determines the best approach based on project context.
 */
export function recommend(context: ProjectContext): RecommendationResult {
  let primary: ChiApproach = 'custom-elements';
  const reasoning: string[] = [];
  let confidence: 'high' | 'medium' | 'low' = 'medium';

  for (const condition of RECOMMENDATION_CONDITIONS) {
    if (matchesCondition(context, condition.when)) {
      primary = condition.recommend;
      reasoning.push(condition.reasoning);
      confidence = 'high';
      break;
    }
  }

  if (context.existingApproach) {
    reasoning.push(`Existing codebase uses ${context.existingApproach} approach`);
    if (context.existingApproach !== primary) {
      reasoning.push('Consider migrating to recommended approach or maintaining consistency');
      confidence = 'medium';
    }
  }

  if (reasoning.length === 0) {
    reasoning.push('Custom Elements recommended as default for modern, framework-agnostic development');
    confidence = 'low';
  }

  const fallback = determineFallback(primary);

  return {
    primary,
    fallback,
    reasoning,
    confidence,
    codeExamples: generateCodeExamples(primary, fallback),
  };
}

/**
 * Checks if preferences match.
 */
function matchesPreferences(
  contextPrefs: ProjectContext['preferences'],
  conditionPrefs: Record<string, unknown>
): boolean {
  if (!contextPrefs) return false;

  return Object.entries(conditionPrefs).every(
    ([key, value]) => contextPrefs[key as keyof typeof contextPrefs] === value
  );
}

/**
 * Checks if context matches a condition.
 */
function matchesCondition(context: ProjectContext, condition: Partial<ProjectContext>): boolean {
  return Object.entries(condition).every(([key, value]) => {
    if (key === 'preferences' && value) {
      return matchesPreferences(context.preferences, value as Record<string, unknown>);
    }
    return context[key as keyof ProjectContext] === value;
  });
}

/**
 * Generates code examples for recommended approaches.
 */
function generateCodeExamples(primary: ChiApproach, fallback: ChiApproach): RecommendationResult['codeExamples'] {
  const examples: RecommendationResult['codeExamples'] = [];

  const buttonExamples: Record<ChiApproach, { code: string; note?: string }> = {
    vue: {
      code: '<ChiButton color="primary" size="lg" @click="handleClick">Click me</ChiButton>',
      note: 'Full Vue 3 reactivity support',
    },
    'custom-elements': {
      code: '<chi-button color="primary" size="lg">Click me</chi-button>',
      note: 'Works in any framework',
    },
    'html-css': {
      code: '<button class="chi-button -primary -lg">Click me</button>',
      note: 'Requires manual event handling and accessibility',
    },
  };

  examples.push({
    approach: primary,
    ...buttonExamples[primary],
  });

  if (fallback !== primary) {
    examples.push({
      approach: fallback,
      ...buttonExamples[fallback],
    });
  }

  const third = (['vue', 'custom-elements', 'html-css'] as ChiApproach[]).find((a) => a !== primary && a !== fallback);

  if (third) {
    examples.push({
      approach: third,
      ...buttonExamples[third],
    });
  }

  return examples;
}

/**
 * Detects the approach used in existing code.
 */
export function detectApproach(code: string): ChiApproach | null {
  const patterns = {
    vue: /<Chi[A-Z][a-zA-Z]+/g,
    'custom-elements': /<chi-[a-z-]+/g,
    'html-css': /class="[^"]*chi-[a-z-]+/g,
  };

  const counts = {
    vue: (code.match(patterns.vue) || []).length,
    'custom-elements': (code.match(patterns['custom-elements']) || []).length,
    'html-css': (code.match(patterns['html-css']) || []).length,
  };

  const max = Math.max(...Object.values(counts));
  if (max === 0) return null;

  return (Object.entries(counts).find(([, count]) => count === max)?.[0] as ChiApproach) || null;
}

/**
 * Provides migration path between approaches.
 */
export function getMigrationPath(from: ChiApproach, to: ChiApproach): string[] {
  const paths: Record<string, string[]> = {
    'html-css->custom-elements': [
      '1. Replace CSS base classes with Web Component tags',
      '2. Convert CSS modifiers to Web Component properties',
      '3. Keep utility classes on Web Components for spacing/styling',
      '4. Replace event handlers with Web Component events',
    ],
    'html-css->vue': [
      '1. Install @aspect/chi-vue package',
      '2. Import components from chi-vue',
      '3. Replace HTML with Vue component syntax',
      '4. Use v-bind for dynamic props, v-on for events',
    ],
    'custom-elements->vue': [
      '1. Install @aspect/chi-vue package',
      '2. Replace <chi-*> tags with <Chi*> components',
      '3. Convert attributes to Vue props syntax',
      '4. Migrate events from addEventListener to v-on',
    ],
    'vue->custom-elements': [
      '1. Replace <Chi*> with <chi-*> Web Components',
      '2. Convert Vue props to attributes',
      '3. Replace v-on events with addEventListener',
      '4. Handle reactivity manually if needed',
    ],
  };

  return paths[`${from}->${to}`] || [`Migration from ${from} to ${to} - consult documentation`];
}
