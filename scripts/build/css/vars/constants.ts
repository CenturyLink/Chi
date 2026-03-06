/**
 * Constants and synthetic token definitions for Chi CSS Custom Properties.
 */

import type { SyntheticToken } from './types.js';

export const THEMES = ['lumen', 'connect', 'centurylink'] as const;
export const LAYERS = ['foundation', 'semantic'] as const;
export const PREFIX = 'chi';

/** Foundation tokens: core scales, palette, shared primitives */
export const FOUNDATION_PATTERNS: RegExp[] = [
  /^\$font-family-(base|mono)$/,
  /^\$font-size-(3xl|2xl|xl|lg|md|sm|xs|2xs|base|h[1-6])$/,
  /^\$font-weight-(light|normal|medium|semi-bold|bold|extra-bold|black|base|h[1-6])$/,
  /^\$line-height-(base|xl|lg|md|sm|h[1-6])$/,
  /^\$color-(grey|red|pink|purple|indigo|violet|navy|blue|bright-blue|cyan|teal|teal-blue|mint|green|yellow|orange)-\d+$/,
  /^\$color-(black|white)$/,
  /^\$base-unit$/,
  /^\$opacity-\d+$/,
  /^\$border-radius-(base|sharp|circle|medium|rounded-pill)$/,
  /^\$focus-color$/,
  /^\$link-color$/,
  /^\$link-hover-color$/,
  /^\$icon-size-(base|xs|sm|sm2|sm3|md|lg|xl|xxl)$/,
  /^\$(sm|md|lg|xl|xxl)-breakpoint$/,
  /^\$zindex-/,
];

/** Semantic tokens: purpose-driven color aliases */
export const SEMANTIC_PATTERNS: RegExp[] = [
  /^\$color-text-/,
  /^\$color-icon-/,
  /^\$color-border-/,
  /^\$color-background-(?!gradient)/,
];

export const EXCLUDE_PATTERNS: RegExp[] = [
  /^\$state-colors$/,
  /^\$color-semantic$/,
  /^\$screen-sizes$/,
  /^\$shadow$/,
  /^\$cap-height$/,
  /^\$font-family-icon$/,
  /^\$icon-color$/,
];

export const SYNTHETIC_SHADOW_TOKENS: SyntheticToken[] = [
  { name: 'shadow-0', scssExpression: 'none', comment: 'No shadow', type: 'shadow', category: 'elevation' },
  {
    name: 'shadow-1',
    scssExpression: 'map-get($shadow, 1)',
    comment: 'Elevation 1 — subtle',
    type: 'shadow',
    category: 'elevation',
  },
  {
    name: 'shadow-2',
    scssExpression: 'map-get($shadow, 2)',
    comment: 'Elevation 2 — card',
    type: 'shadow',
    category: 'elevation',
  },
  {
    name: 'shadow-3',
    scssExpression: 'map-get($shadow, 3)',
    comment: 'Elevation 3 — dropdown',
    type: 'shadow',
    category: 'elevation',
  },
  {
    name: 'shadow-4',
    scssExpression: 'map-get($shadow, 4)',
    comment: 'Elevation 4 — modal',
    type: 'shadow',
    category: 'elevation',
  },
  {
    name: 'shadow-5',
    scssExpression: 'map-get($shadow, 5)',
    comment: 'Elevation 5 — max elevation',
    type: 'shadow',
    category: 'elevation',
  },
];

function buildSpacingScale(): SyntheticToken[] {
  const steps: { index: number; rem: number }[] = [];

  let index = 0;

  steps.push({ index: index++, rem: 0 });

  for (let r = 0.25; r <= 3; r = Math.round((r + 0.25) * 100) / 100) {
    steps.push({ index: index++, rem: r });
  }

  for (let r = 3.5; r <= 4; r = Math.round((r + 0.5) * 100) / 100) {
    steps.push({ index: index++, rem: r });
  }

  for (let r = 5; r <= 24; r++) {
    steps.push({ index: index++, rem: r });
  }
  return steps.map(({ index: i, rem }) => {
    const value = rem === 0 ? '0' : `${rem}rem`;
    const px = rem * 16;
    const chiSpaceIdx = rem % 0.5 === 0 ? rem / 0.5 : null;
    const spaceNote =
      chiSpaceIdx !== null && chiSpaceIdx >= 0 && chiSpaceIdx <= 10 ? ` — Chi space(${chiSpaceIdx})` : '';

    return {
      name: `spacing-${i}`,
      scssExpression: value,
      comment: `${value}${rem > 0 ? ` (${px}px)` : ''}${spaceNote}`,
      type: 'spacing',
      category: 'spacing',
    };
  });
}

export const SYNTHETIC_SPACING_TOKENS: SyntheticToken[] = buildSpacingScale();

export const SYNTHETIC_BORDER_WIDTH_TOKENS: SyntheticToken[] = [
  { name: 'border-width-0', scssExpression: '0', comment: '0 (0px)', type: 'borderWidth', category: 'border-width' },
  {
    name: 'border-width-1',
    scssExpression: '0.0625rem',
    comment: '0.0625rem (1px) — standard',
    type: 'borderWidth',
    category: 'border-width',
  },
  {
    name: 'border-width-2',
    scssExpression: '0.125rem',
    comment: '0.125rem (2px) — active/emphasis',
    type: 'borderWidth',
    category: 'border-width',
  },
  {
    name: 'border-width-3',
    scssExpression: '0.1875rem',
    comment: '0.1875rem (3px) — heavy (Lumen buttons)',
    type: 'borderWidth',
    category: 'border-width',
  },
  {
    name: 'border-width-4',
    scssExpression: '0.25rem',
    comment: '0.25rem (4px) — max',
    type: 'borderWidth',
    category: 'border-width',
  },
];

export const SYNTHETIC_DURATION_TOKENS: SyntheticToken[] = [
  {
    name: 'duration-fastest',
    scssExpression: '0.075s',
    comment: '0.075s (75ms) — collapse/expand height',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-faster',
    scssExpression: '0.1s',
    comment: '0.1s (100ms) — hover micro-interactions',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-fast',
    scssExpression: '0.15s',
    comment: '0.15s (150ms) — input focus, tags',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-normal',
    scssExpression: '0.2s',
    comment: '0.2s (200ms) — general purpose default',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-slow',
    scssExpression: '0.3s',
    comment: '0.3s (300ms) — toggle switch, tabs',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-slower',
    scssExpression: '0.4s',
    comment: '0.4s (400ms) — header search',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-slowest',
    scssExpression: '0.5s',
    comment: '0.5s (500ms) — modal, drawer, backdrop',
    type: 'duration',
    category: 'motion',
  },
  {
    name: 'duration-skeleton',
    scssExpression: '2s',
    comment: '2s (2000ms) — skeleton loading animation',
    type: 'duration',
    category: 'motion',
  },
];

export const SYNTHETIC_EASING_TOKENS: SyntheticToken[] = [
  { name: 'ease', scssExpression: 'ease', comment: 'Ease — cards, sidenav', type: 'easing', category: 'motion' },
  {
    name: 'ease-in',
    scssExpression: 'ease-in',
    comment: 'Ease-in — buttons, links, carousel',
    type: 'easing',
    category: 'motion',
  },
  {
    name: 'ease-out',
    scssExpression: 'ease-out',
    comment: 'Ease-out — accordion height collapse',
    type: 'easing',
    category: 'motion',
  },
  {
    name: 'ease-in-out',
    scssExpression: 'ease-in-out',
    comment: 'Ease-in-out — general purpose (most common)',
    type: 'easing',
    category: 'motion',
  },
  {
    name: 'ease-bounce',
    scssExpression: 'cubic-bezier(1, 0.38, 0, 1.19)',
    comment: 'Bounce — toggle switch',
    type: 'easing',
    category: 'motion',
  },
];

export const ALL_SYNTHETIC_TOKENS: SyntheticToken[][] = [
  SYNTHETIC_SHADOW_TOKENS,
  SYNTHETIC_SPACING_TOKENS,
  SYNTHETIC_BORDER_WIDTH_TOKENS,
  SYNTHETIC_DURATION_TOKENS,
  SYNTHETIC_EASING_TOKENS,
];

export const SYNTHETIC_SCALES_LABELS: { label: string; tokens: SyntheticToken[] }[] = [
  { label: 'Shadow Scale', tokens: SYNTHETIC_SHADOW_TOKENS },
  { label: 'Spacing Scale', tokens: SYNTHETIC_SPACING_TOKENS },
  { label: 'Border Width Scale', tokens: SYNTHETIC_BORDER_WIDTH_TOKENS },
  { label: 'Transition Duration Scale', tokens: SYNTHETIC_DURATION_TOKENS },
  { label: 'Easing Functions', tokens: SYNTHETIC_EASING_TOKENS },
];
