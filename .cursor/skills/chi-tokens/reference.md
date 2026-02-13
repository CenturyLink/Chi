# Chi Token Reference Data

## Token List (auto-generated from SCSS)

<!-- AUTO-GENERATED:START - section:token-list - Do not edit below. Run `npm run sync:skills` to update -->
| Token | SCSS Value |
|-------|------------|
| cap-height | `0.75` |
| base-unit | `8px` |
| state-colors | `(success: green, warning: yellow, danger: red)` |
| font-family-icon | `'chi'` |
| font-size-1 | `0.6875rem` |
| font-size-2 | `0.75rem` |
| font-size-3 | `0.8125rem` |
| font-size-4 | `0.875rem` |
| font-size-5 | `1rem` |
| font-size-6 | `1.125rem` |
| font-size-7 | `1.25rem` |
| font-size-8 | `1.375rem` |
| font-size-9 | `1.5rem` |
| font-size-10 | `1.75rem` |
| font-size-11 | `2rem` |
| font-size-12 | `2.25rem` |
| font-size-13 | `2.5rem` |
| font-size-14 | `3rem` |
| font-size-15 | `3.5rem` |
| font-size-16 | `4rem` |
| font-size-17 | `4.5rem` |
| font-size-18 | `5rem` |
| font-size-19 | `6rem` |
| font-size-20 | `7.5rem` |
| opacity-0 | `0` |
| opacity-20 | `0.2` |
| opacity-40 | `0.4` |
| opacity-60 | `0.6` |
| opacity-80 | `0.8` |
| opacity-100 | `1` |
| sm-breakpoint | `576px` |
| md-breakpoint | `768px` |
| lg-breakpoint | `992px` |
| xl-breakpoint | `1200px` |
| xxl-breakpoint | `1600px` |
| screen-sizes | `xs sm md lg xl xxl` |
| zindex-prominent | `1` |
| zindex-dropdown | `10` |
| zindex-fixed | `20` |
| zindex-backdrop | `30` |
| zindex-fixed-with-backdrop | `40` |
| zindex-modal | `50` |
| zindex-popover | `60` |
| zindex-tooltip | `70` |
<!-- AUTO-GENERATED:END -->

## Token Descriptions (manual)

| Token | Description |
|-------|-------------|
| base-unit | Base spacing unit (8px). Spacing formula: space(N) = (N/2)rem, so each step = 8px at 16px root |
| cap-height | Cap height ratio for typography calculations |
| font-size-1 | Extra small font size (11px) |
| font-size-2 | Small font size (12px) |
| font-size-3 | Small font size (13px) |
| font-size-4 | Base small font size (14px) |
| font-size-5 | Base font size (16px) - default body text |
| font-size-6 | Medium font size (18px) |
| font-size-7 | Large font size (20px) |
| font-size-8 | Large font size (22px) |
| font-size-9 | Extra large font size (24px) |
| font-size-10 | Heading font size (28px) |
| font-size-11 | Large heading font size (32px) |
| font-size-12 | Extra large heading font size (36px) |
| font-size-13 | Display heading (40px) |
| font-size-14 | Large display heading (48px) |
| font-size-15 | Extra large display (56px) |
| font-size-16 | Display size (64px) |
| font-size-17 | Large display size (72px) |
| font-size-18 | Extra large display (80px) |
| font-size-19 | Hero heading (96px) |
| font-size-20 | Extra large hero (120px) |
| font-family-base | Primary font family for the design system |
| font-family-icon | Icon font family (chi icon font) |
| font-weight-normal | Normal font weight (400) |
| font-weight-bold | Bold font weight (700) |
| line-height | Base line height for optimal readability |
| opacity-0 | Fully transparent (0) |
| opacity-20 | Light transparency (0.2) |
| opacity-40 | Medium-light transparency (0.4) |
| opacity-60 | Medium transparency (0.6) |
| opacity-80 | Light opacity (0.8) |
| opacity-100 | Fully opaque (1) |
| sm-breakpoint | Small screen breakpoint (576px) |
| md-breakpoint | Medium screen breakpoint (768px) |
| lg-breakpoint | Large screen breakpoint (992px) |
| xl-breakpoint | Extra large screen breakpoint (1200px) |
| xxl-breakpoint | Extra extra large screen breakpoint (1600px) |
| zindex-prominent | Prominent z-index (1) for subtle layering |
| zindex-dropdown | Dropdown z-index (10) for overlay components |
| zindex-fixed | Fixed element z-index (20) for sticky headers |
| zindex-backdrop | Backdrop z-index (30) for overlay backgrounds |
| zindex-fixed-with-backdrop | Fixed element with backdrop z-index (40) |
| zindex-modal | Modal z-index (50) for dialog overlays |
| zindex-popover | Popover z-index (60) for floating content |
| zindex-tooltip | Tooltip z-index (70) for hint overlays |

## Token Examples

| Token | Usage Examples |
|-------|---------------|
| base-unit | `padding: $base-unit;`, `margin: calc($base-unit * 2);`, `gap: $base-unit;`, `-p--1 = 0.5rem (8px), -p--2 = 1rem (16px), -p--4 = 2rem (32px)` |
| font-size-5 | `<p>Base body text</p>`, `font-size: $font-size-5;` |
| font-family-base | `font-family: $font-family-base;`, `body { font-family: $font-family-base; }` |
| font-weight-bold | `font-weight: $font-weight-bold;`, `<strong>Bold text</strong>` |
| line-height | `line-height: $line-height;`, `p { line-height: $line-height; }` |
| opacity-60 | `opacity: $opacity-60;`, `<div class="-opacity--60">Semi-transparent</div>` |
| sm-breakpoint | `@include respond-to(sm) { ... }`, `@media (min-width: $sm-breakpoint) { ... }` |
| md-breakpoint | `@include respond-to(md) { ... }`, `@media (min-width: $md-breakpoint) { ... }` |
| zindex-modal | `z-index: $zindex-modal;`, `.chi-modal { z-index: $zindex-modal; }` |
| zindex-backdrop | `z-index: $zindex-backdrop;`, `.chi-backdrop { z-index: $zindex-backdrop; }` |

## Category Descriptions

| Category | Description |
|----------|-------------|
| colors | Color palette including brand colors, backgrounds, and text colors |
| typography | Typography tokens including font families, sizes, weights, and line heights |
| spacing | Spacing scale: space(N) = (N/2)rem, each step = 8px at 16px root. Range: 0-10 |
| shadows | Box shadow tokens for elevation and depth |
| breakpoints | Responsive breakpoint values for different screen sizes |
| zIndex | Z-index scale for proper layering of UI elements |

## Token Relationships

| Token | Related Utilities | Related Components | Notes |
|-------|-------------------|-------------------|-------|
| base-unit | -p--1 to -p--10, -m--1 to -m--10, -g--1 to -g--10 | All components | Foundation of spacing scale. space(N) = (N/2)rem = N × 8px at 16px root |
| font-size-5 | -text--body | | Default body text size (16px) |
| color-background-primary | -bg--primary, -text--primary | chi-button | Primary brand color |
| zindex-modal | | chi-modal | Z-index for modal dialogs (50). Always above backdrop (30) |
| zindex-backdrop | | chi-backdrop | Z-index for backdrop (30) |
