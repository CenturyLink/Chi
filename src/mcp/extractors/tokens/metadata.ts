/**
 * Token Metadata
 * 
 * Human-readable descriptions and examples for design tokens.
 */

export const TOKEN_DESCRIPTIONS: Record<string, string> = {
  'base-unit': 'Base spacing unit (8px) - foundation of the spacing scale',
  'cap-height': 'Cap height ratio for typography calculations',
  'font-size-1': 'Extra small font size (11px)',
  'font-size-2': 'Small font size (12px)',
  'font-size-3': 'Small font size (13px)',
  'font-size-4': 'Base small font size (14px)',
  'font-size-5': 'Base font size (16px) - default body text',
  'font-size-6': 'Medium font size (18px)',
  'font-size-7': 'Large font size (20px)',
  'font-size-8': 'Large font size (22px)',
  'font-size-9': 'Extra large font size (24px)',
  'font-size-10': 'Heading font size (28px)',
  'font-size-11': 'Large heading font size (32px)',
  'font-size-12': 'Extra large heading font size (36px)',
  'font-size-13': 'Display heading (40px)',
  'font-size-14': 'Large display heading (48px)',
  'font-size-15': 'Extra large display (56px)',
  'font-size-16': 'Display size (64px)',
  'font-size-17': 'Large display size (72px)',
  'font-size-18': 'Extra large display (80px)',
  'font-size-19': 'Hero heading (96px)',
  'font-size-20': 'Extra large hero (120px)',
  'font-family-base': 'Primary font family for the design system',
  'font-family-icon': 'Icon font family (chi icon font)',
  'font-weight-normal': 'Normal font weight (400)',
  'font-weight-bold': 'Bold font weight (700)',
  'line-height': 'Base line height for optimal readability',
  'opacity-0': 'Fully transparent (0)',
  'opacity-20': 'Light transparency (0.2)',
  'opacity-40': 'Medium-light transparency (0.4)',
  'opacity-60': 'Medium transparency (0.6)',
  'opacity-80': 'Light opacity (0.8)',
  'opacity-100': 'Fully opaque (1)',
  'sm-breakpoint': 'Small screen breakpoint (576px)',
  'md-breakpoint': 'Medium screen breakpoint (768px)',
  'lg-breakpoint': 'Large screen breakpoint (992px)',
  'xl-breakpoint': 'Extra large screen breakpoint (1200px)',
  'xxl-breakpoint': 'Extra extra large screen breakpoint (1600px)',
  'zindex-prominent': 'Prominent z-index (1) for subtle layering',
  'zindex-dropdown': 'Dropdown z-index (10) for overlay components',
  'zindex-fixed': 'Fixed element z-index (20) for sticky headers',
  'zindex-backdrop': 'Backdrop z-index (200) for overlay backgrounds',
  'zindex-modal': 'Modal z-index (500) for dialog overlays',
  'zindex-popover': 'Popover z-index (400) for floating content',
  'zindex-tooltip': 'Tooltip z-index (300) for hint overlays',
  'zindex-fixed-with-backdrop': 'Fixed element with backdrop z-index (250)',
};

export const TOKEN_EXAMPLES: Record<string, string[]> = {
  'base-unit': [
    'padding: $base-unit;',
    'margin: calc($base-unit * 2);',
    'gap: $base-unit;',
  ],
  'cap-height': [
    'line-height: calc(1em / $cap-height);',
  ],
  'font-size-5': [
    '<p>Base body text</p>',
    'font-size: $font-size-5;',
  ],
  'font-family-base': [
    'font-family: $font-family-base;',
    'body { font-family: $font-family-base; }',
  ],
  'font-weight-bold': [
    'font-weight: $font-weight-bold;',
    '<strong>Bold text</strong>',
  ],
  'line-height': [
    'line-height: $line-height;',
    'p { line-height: $line-height; }',
  ],
  'opacity-60': [
    'opacity: $opacity-60;',
    '<div class="-opacity--60">Semi-transparent</div>',
  ],
  'sm-breakpoint': [
    '@include respond-to(sm) { ... }',
    '@media (min-width: $sm-breakpoint) { ... }',
  ],
  'md-breakpoint': [
    '@include respond-to(md) { ... }',
    '@media (min-width: $md-breakpoint) { ... }',
  ],
  'zindex-modal': [
    'z-index: $zindex-modal;',
    '.chi-modal { z-index: $zindex-modal; }',
  ],
  'zindex-backdrop': [
    'z-index: $zindex-backdrop;',
    '.chi-backdrop { z-index: $zindex-backdrop; }',
  ],
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  colors: 'Color palette including brand colors, backgrounds, and text colors',
  typography: 'Typography tokens including font families, sizes, weights, and line heights',
  spacing: 'Spacing scale based on 8px base unit for consistent layouts',
  shadows: 'Box shadow tokens for elevation and depth',
  breakpoints: 'Responsive breakpoint values for different screen sizes',
  zIndex: 'Z-index scale for proper layering of UI elements',
};
