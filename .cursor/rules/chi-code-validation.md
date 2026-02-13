---
description: Chi code validation rules. Apply when reviewing, generating, or validating HTML/CSS/Vue code that uses Chi Design System.
globs:
  - "**/*.{html,vue,tsx,jsx}"
---

# Chi Code Validation

## Anti-Patterns

When reviewing or generating Chi code, detect and fix these patterns:

### Spacing Anti-Patterns (severity: error)

| Bad | Good | Reason |
|-----|------|--------|
| `style="padding: 2rem"` | `class="-p--4"` | Use utility classes for spacing |
| `style="padding: 16px"` | `class="-p--2"` | Use utility classes (16px = 1rem = -p--2) |
| `style="margin: 0 auto"` | `class="-mx--auto"` | Use -mx--auto for centering |
| `class="-p-4"` | `class="-p--4"` | Double dash syntax required |

### Color Anti-Patterns (severity: error)

| Bad | Good | Reason |
|-----|------|--------|
| `style="background-color: #0047BB"` | `class="-bg--primary"` | Use color utilities, not hardcoded colors |
| `class="-bg-primary"` | `class="-bg--primary"` | Double dash syntax required |
| `style="color: red"` | `class="-text--danger"` | Use semantic color utilities |

### Layout Anti-Patterns (severity: error)

| Bad | Good | Reason |
|-----|------|--------|
| `style="display: flex"` | `class="-d--flex"` | Use display utility classes |
| `style="opacity: 0.6"` | `class="-opacity--60"` | Use opacity utilities |
| `style="border-radius: 50%"` | `class="-circle"` | Use border utilities |
| `style="font-size: 14px"` | `class="-text--body"` | Use typography utilities |

### Web Component Anti-Patterns (severity: warning)

| Bad | Good | Reason |
|-----|------|--------|
| `<button class="chi-button -primary">` | `<chi-button color="primary">` | Prefer Web Components |
| `<div class="chi-alert">` | `<chi-alert>` | Web Components handle a11y automatically |
| `<div class="chi-modal">` | `<chi-modal>` | Web Components handle focus management |
| `<input type="text">` | `<chi-text-input label="Name">` | Web Components provide label association |
| `<span class="chi-icon icon-check">` | `<chi-icon icon="check" aria-hidden="true">` | Use chi-icon Web Component |

### Accessibility Anti-Patterns

| Bad | Good | Reason |
|-----|------|--------|
| `<button class="chi-button" onclick="...">` | `<chi-button @click="...">` | Avoid inline handlers |
| `<img src="logo.png">` | `<img src="logo.png" alt="Company logo">` | Images need alt text |
| `<div role="button">Click</div>` | `<chi-button>Click</chi-button>` | Use semantic elements |
| `<button class="chi-button">` | `<chi-button type="button">` | Specify button type |

### Component Conflict Rules

| Bad | Reason |
|-----|--------|
| `class="chi-button -primary -secondary"` | Only one color variant allowed |
| `class="btn"` | Use full chi- prefix, not abbreviations |
| `class="-gap--3"` | Use global `-g--3` instead of component `-gap--3` |

## Utility Validation Patterns

Valid utility class formats (regex):

- **Spacing**: `-[pmg][trblxy]?(-(sm|md|lg|xl|xxl))?--(0|1|2|3|4|5|6|7|8|9|10|auto)`
- **Color**: `-(bg|text)--(primary|secondary|white|black|navy|grey(-\d+)?|muted(-light(er)?)?|success(-light(er)?)?|info(-light(er)?)?|warning(-light(er)?)?|danger(-light(er)?)?|none)`
- **Opacity**: `-opacity--(0|20|40|60|80|100)`
- **Display**: `-d(-(sm|md|lg|xl|xxl))?--(none|block|inline|inline-block|flex|inline-flex)`
- **Flex**: `-(flex|justify-content|align-items|align-self)--[\w-]+`
- **Border**: `-(b|bt|br|bb|bl|circle|raindrop)(--\d+)?`
- **Typography**: `-text--(bold|normal|light|italic|center|left|right|justify|uppercase|lowercase|capitalize|truncate|nowrap|wrap|body|xs|sm|md|lg|xl|h1|h2|h3|h4|h5|h6)`
- **Sizing**: `-(w|h|min-w|min-h|max-w|max-h)--(0|25|50|75|100|auto)`
- **Position**: `-(position|top|right|bottom|left)--(static|relative|absolute|fixed|sticky|\d+)`
- **Shadow**: `-shadow--\d+`

Note: Responsive variants add a breakpoint infix: `-p-sm--4`, `-d-lg--flex`, etc.

## Component Validation Schemas

Full modifier lists are in `.cursor/skills/chi-component-schemas/schemas.json`. Key schemas below:

### chi-button
- **Common modifiers**: -primary, -secondary, -dark, -light, -danger, -sm, -md, -lg, -xl, -flat, -outline, -pill, -icon, -float, -close, -expand, -fluid, -justified
- **Conflicting groups**: colors (-primary/-secondary/-dark/-light/-danger), sizes (-sm/-md/-lg/-xl), variants (-flat/-outline)
- **Max modifiers**: 4
- **Required attributes**: type
- **Accessibility**: Activates on Enter/Space, receives focus in tab order

### chi-alert
- **Allowed modifiers**: -success, -warning, -danger, -info, -muted, -sm, -md, -lg, -banner, -bubble, -toast, -center, -close
- **Conflicting groups**: colors, sizes, types (-banner/-bubble/-toast)
- **Required attributes**: role="alert"

### chi-modal
- **Allowed modifiers**: -sm, -md, -lg, -xl, -center
- **Conflicting groups**: sizes
- **Required attributes**: role="dialog", aria-label, aria-modal
- **Dependencies**: chi-backdrop
- **Forbidden parents**: chi-card, chi-dropdown
- **Accessibility**: Escape to close, Tab cycles focus, traps focus inside

### chi-dropdown
- **Allowed modifiers**: -animate, -hover
- **Children**: chi-dropdown__trigger, chi-dropdown__menu, chi-dropdown__menu-item
- **Accessibility**: Arrow keys navigate, Enter selects, Escape closes

### chi-card
- **Allowed modifiers**: -portal, -active, -hover
- **Children**: chi-card__header, chi-card__title, chi-card__content, chi-card__footer, chi-card__caption

### chi-spinner
- **Allowed modifiers**: -sm, -sm--2, -sm--3, -md, -lg, -xl, -xxl, -primary, -inverse, -backdrop
- **Conflicting groups**: sizes, colors (-primary/-inverse)
- **Required attributes**: role="status", aria-label

### chi-badge
- **Allowed modifiers**: -primary, -success, -warning, -danger, -info, -light, -dark, -muted, -sm, -xs, -outline, -flat
- **Conflicting groups**: colors, sizes (-sm/-xs), variants (-outline/-flat)

### chi-tabs
- **Allowed modifiers**: -border, -sliding-border, -pills, -sm, -md, -lg, -xl, -vertical, -horizontal
- **Conflicting groups**: types (-border/-sliding-border/-pills), sizes, orientation (-vertical/-horizontal)
- **Required attributes**: role="tablist"

### chi-tooltip
- **Allowed modifiers**: -top, -right, -bottom, -left
- **Conflicting groups**: positions
- **Required attributes**: role="tooltip"

### chi-popover
- **Allowed modifiers**: -top, -right, -bottom, -left, -w--sm, -w--md, -w--lg
- **Conflicting groups**: positions, widths
- **Dependencies**: chi-button

## Cross-MCP Conflict Rules

When code mixes multiple Chi approaches, check for:

1. **Redundant CSS class on Web Component**: `<chi-button class="chi-button">` -- remove the CSS class
2. **Modifier instead of prop**: `<chi-button class="-primary">` -- use `color="primary"` instead
3. **Mixed Vue and CE**: Don't mix `<ChiButton>` and `<chi-button>` in same component tree
4. **Inline styles with utility equivalents**: Always use utility classes over inline styles
5. **Single-dash utilities**: `-p-4` should be `-p--4` (double dash)
6. **Deprecated gap modifier**: `-gap--3` should be `-g--3` (global utility)
