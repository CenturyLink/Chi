---
description: Chi migration rules for converting between CSS, Web Components, and Vue approaches. Apply when migrating Chi code or when user asks about migration.
globs:
  - "**/*.{html,vue,tsx,jsx}"
---

# Chi Migration Rules

## CSS to Web Component Mappings

These components have direct Web Component equivalents:

<!-- AUTO-GENERATED:START - section:css-to-wc - Do not edit below. Run `npm run sync:skills` to update -->
| CSS Class | Web Component Tag |
|-----------|-------------------|
| chi-accordion | `<chi-accordion>` |
| chi-alert | `<chi-alert>` |
| chi-backdrop | `<chi-backdrop>` |
| chi-badge | `<chi-badge>` |
| chi-brand | `<chi-brand>` |
| chi-breadcrumb | `<chi-breadcrumb>` |
| chi-button | `<chi-button>` |
| chi-cache-loader | `<chi-cache-loader>` |
| chi-card | `<chi-card>` |
| chi-carousel | `<chi-carousel>` |
| chi-checkbox | `<chi-checkbox>` |
| chi-customize-panel | `<chi-customize-panel>` |
| chi-datepicker | `<chi-date-picker>` |
| chi-drag | `<chi-drag>` |
| chi-drawer | `<chi-drawer>` |
| chi-dropdown | `<chi-dropdown>` |
| chi-epanel | `<chi-expansion-panel>` |
| chi-icon | `<chi-icon>` |
| chi-input | `<chi-text-input>` |
| chi-label | `<chi-label>` |
| chi-link | `<chi-link>` |
| chi-marketing-icon | `<chi-marketing-icon>` |
| chi-modal | `<chi-modal>` |
| chi-number-input | `<chi-number-input>` |
| chi-pagination | `<chi-pagination>` |
| chi-phone-input | `<chi-phone-input>` |
| chi-picker | `<chi-picker>` |
| chi-picker-group | `<chi-picker-group>` |
| chi-popover | `<chi-popover>` |
| chi-price | `<chi-price>` |
| chi-radio | `<chi-radio-button>` |
| chi-search | `<chi-search-input>` |
| chi-skeleton | `<chi-skeleton>` |
| chi-spinner | `<chi-spinner>` |
| chi-switch | `<chi-switch>` |
| chi-tabs | `<chi-tabs>` |
| chi-tags | `<chi-tags>` |
| chi-time-picker | `<chi-time-picker>` |
| chi-toolbar | `<chi-toolbar>` |
| chi-tooltip | `<chi-tooltip>` |
<!-- AUTO-GENERATED:END -->

## Modifier to Property Mappings

When migrating CSS modifiers to Web Component properties:

<!-- AUTO-GENERATED:START - section:modifier-to-prop - Do not edit below. Run `npm run sync:skills` to update -->
### chi-accordion
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-expanded` | `expanded` | (boolean) |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |

### chi-alert
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-lg` | `size` | `"lg"` |
| `-sm` | `size` | `"sm"` |
| `-hover` | `hover` | (boolean) |
| `-success` | `color` | `"success"` |
| `-danger` | `color` | `"danger"` |
| `-warning` | `color` | `"warning"` |
| `-info` | `color` | `"info"` |
| `-muted` | `color` | `"muted"` |

### chi-backdrop
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-inverse` | `color` | `"inverse"` |

### chi-badge
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-sm` | `size` | `"sm"` |
| `-xs` | `size` | `"xs"` |
| `-outline` | `variant` | `"outline"` |
| `-flat` | `variant` | `"flat"` |
| `-primary` | `color` | `"primary"` |
| `-secondary` | `color` | `"secondary"` |
| `-light` | `color` | `"light"` |
| `-dark` | `color` | `"dark"` |
| `-success` | `color` | `"success"` |
| `-danger` | `color` | `"danger"` |
| `-warning` | `color` | `"warning"` |
| `-info` | `color` | `"info"` |
| `-muted` | `color` | `"muted"` |

### chi-brand
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-xxl` | `size` | `"xxl"` |

### chi-breadcrumb
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |

### chi-button
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-md` | `size` | `"md"` |
| `-sm` | `size` | `"sm"` |
| `-hover` | `hover` | (boolean) |
| `-active` | `active` | (boolean) |
| `-fluid` | `fluid` | (boolean) |
| `-outline` | `variant` | `"outline"` |
| `-flat` | `variant` | `"flat"` |
| `-primary` | `color` | `"primary"` |
| `-xs` | `size` | `"xs"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-secondary` | `color` | `"secondary"` |
| `-dark` | `color` | `"dark"` |
| `-danger` | `color` | `"danger"` |
| `-light` | `color` | `"light"` |

### chi-cache-loader
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-muted` | `color` | `"muted"` |

### chi-card
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-sm` | `size` | `"sm"` |
| `-active` | `active` | (boolean) |
| `-lg` | `size` | `"lg"` |
| `-disabled` | `disabled` | (boolean) |
| `-expanded` | `expanded` | (boolean) |
| `-outline` | `variant` | `"outline"` |

### chi-carousel
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |

### chi-checkbox
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-hover` | `hover` | (boolean) |
| `-danger` | `color` | `"danger"` |
| `-disabled` | `disabled` | (boolean) |

### chi-datepicker
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-active` | `active` | (boolean) |
| `-hover` | `hover` | (boolean) |

### chi-drag
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |

### chi-drawer
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |
| `-top` | `position` | `"top"` |
| `-right` | `position` | `"right"` |
| `-bottom` | `position` | `"bottom"` |
| `-left` | `position` | `"left"` |

### chi-dropdown
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-fluid` | `fluid` | (boolean) |
| `-active` | `active` | (boolean) |
| `-disabled` | `disabled` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-primary` | `color` | `"primary"` |
| `-secondary` | `color` | `"secondary"` |
| `-dark` | `color` | `"dark"` |
| `-light` | `color` | `"light"` |
| `-danger` | `color` | `"danger"` |
| `-hover` | `hover` | (boolean) |
| `-animate` | `animate` | (boolean) |

### chi-epanel
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |
| `-disabled` | `disabled` | (boolean) |
| `-bordered` | `bordered` | (boolean) |

### chi-icon
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-sm--2` | `size` | `"sm--2"` |
| `-sm--3` | `size` | `"sm--3"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-xxl` | `size` | `"xxl"` |

### chi-input
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-hover` | `hover` | (boolean) |
| `-active` | `active` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-disabled` | `disabled` | (boolean) |

### chi-label
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-danger` | `color` | `"danger"` |
| `-success` | `color` | `"success"` |
| `-warning` | `color` | `"warning"` |
| `-info` | `color` | `"info"` |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |

### chi-link
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-hover` | `hover` | (boolean) |
| `-disabled` | `disabled` | (boolean) |
| `-cta` | `cta` | (boolean) |
| `-no-underline` | `no-underline` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |

### chi-marketing-icon
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |

### chi-modal
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |

### chi-number-input
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-expanded` | `expanded` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-right` | `position` | `"right"` |
| `-top` | `position` | `"top"` |
| `-bottom` | `position` | `"bottom"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |

### chi-pagination
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-xs` | `size` | `"xs"` |
| `-hover` | `hover` | (boolean) |
| `-active` | `active` | (boolean) |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-flat` | `variant` | `"flat"` |
| `-light` | `color` | `"light"` |
| `-compact` | `compact` | (boolean) |
| `-inverse` | `color` | `"inverse"` |

### chi-picker
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-pill` | `pill` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |

### chi-picker-group
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-sm` | `size` | `"sm"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-disabled` | `disabled` | (boolean) |
| `-fluid` | `fluid` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-md` | `size` | `"md"` |

### chi-popover
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |
| `-vertical` | `vertical` | (boolean) |
| `-closable` | `closable` | (boolean) |

### chi-price
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-sm` | `size` | `"sm"` |
| `-top` | `position` | `"top"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |

### chi-radio
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-danger` | `color` | `"danger"` |
| `-hover` | `hover` | (boolean) |

### chi-search
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-flat` | `variant` | `"flat"` |
| `-disabled` | `disabled` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-active` | `active` | (boolean) |

### chi-skeleton
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |

### chi-spinner
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |
| `-sm--2` | `size` | `"sm--2"` |
| `-sm--3` | `size` | `"sm--3"` |
| `-md` | `size` | `"md"` |
| `-lg` | `size` | `"lg"` |
| `-xl` | `size` | `"xl"` |
| `-xxl` | `size` | `"xxl"` |

### chi-switch
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-sm` | `size` | `"sm"` |

### chi-tabs
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-sm` | `size` | `"sm"` |
| `-lg` | `size` | `"lg"` |
| `-active` | `active` | (boolean) |
| `-xl` | `size` | `"xl"` |
| `-border` | `border` | (boolean) |
| `-xs` | `size` | `"xs"` |
| `-portal` | `portal` | (boolean) |
| `-md` | `size` | `"md"` |
| `-disabled` | `disabled` | (boolean) |
| `-inverse` | `color` | `"inverse"` |
| `-vertical` | `vertical` | (boolean) |

### chi-tags
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-hover` | `hover` | (boolean) |

### chi-time-picker
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-disabled` | `disabled` | (boolean) |
| `-active` | `active` | (boolean) |

### chi-toolbar
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-vertical` | `vertical` | (boolean) |
| `-flat` | `variant` | `"flat"` |

### chi-tooltip
| CSS Modifier | Property | Value |
|-------------|----------|-------|
| `-active` | `active` | (boolean) |
| `-light` | `color` | `"light"` |
| `-dark` | `color` | `"dark"` |
<!-- AUTO-GENERATED:END -->

## Property Types

When migrating modifiers to Web Component properties:

| Modifier type | CSS | Web Component | Notes |
|--------------|-----|---------------|-------|
| Color | `class="-primary"` | `color="primary"` | String value |
| Size | `class="-lg"` | `size="lg"` | String value |
| Variant | `class="-outline"` | `variant="outline"` | String value |
| Boolean | `class="-disabled"` | `disabled` | Attribute presence = true, no value needed |
| Boolean | `class="-closable"` | `closable` | Same: just add the attribute |

Boolean attributes: just add the attribute name without a value. `<chi-button disabled>` is correct. `<chi-button disabled="true">` also works but is verbose.

## Migration Steps

### HTML/CSS to Web Components
1. Replace CSS base class with Web Component tag: `<button class="chi-button">` → `<chi-button>`
2. Convert CSS modifiers to properties: `-primary` → `color="primary"`, `-lg` → `size="lg"`
3. Convert boolean modifiers to attributes: `-disabled` → `disabled`, `-closable` → `closable`
4. Keep utility classes for spacing/styling: `class="-p--4 -m--2"` stays as-is
5. Replace event handlers: `onclick="fn()"` → `@click="fn"` (Vue) or `.addEventListener('click', fn)` (vanilla)
6. Remove redundant ARIA: Web Components handle `role`, `aria-*` automatically

### HTML/CSS to Vue
1. Install `@aspect/chi-vue` package
2. Import components: `import { ChiButton } from '@aspect/chi-vue'`
3. Replace HTML with Vue component syntax: `<ChiButton>` instead of `<chi-button>`
4. Use `v-bind` for dynamic props, `v-on` for events

### Web Components to Vue
1. Replace `<chi-*>` tags with `<Chi*>` components
2. Convert attributes to Vue props syntax
3. Migrate events from addEventListener to `v-on`

## Migration Examples

```html
<!-- Before: CSS button -->
<button class="chi-button -primary -lg -pill">Click me</button>

<!-- After: Web Component -->
<chi-button color="primary" size="lg" pill>Click me</chi-button>

<!-- After: Vue -->
<ChiButton color="primary" size="lg" pill @click="handleClick">Click me</ChiButton>
```

```html
<!-- Before: CSS alert -->
<div class="chi-alert -danger -closable" role="alert">Error occurred</div>

<!-- After: Web Component (role="alert" is automatic) -->
<chi-alert color="danger" closable>Error occurred</chi-alert>
```

```html
<!-- Before: CSS modal -->
<div class="chi-backdrop"></div>
<div class="chi-modal -lg" role="dialog" aria-modal="true" aria-label="Settings">
  <div class="chi-modal__header">Settings</div>
  <div class="chi-modal__content">...</div>
</div>

<!-- After: Web Component (backdrop, ARIA, focus trap all automatic) -->
<chi-modal size="lg" title="Settings">...</chi-modal>
```

```html
<!-- Before: CSS dropdown -->
<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger">Menu</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  </div>
</div>

<!-- After: Web Component -->
<chi-dropdown>
  <chi-button slot="trigger">Menu</chi-button>
  <a chi-dropdown-item href="#">Item 1</a>
</chi-dropdown>
```

```html
<!-- Utility classes stay on Web Components -->
<chi-button color="primary" class="-p--4 -m--2">Styled button</chi-button>
<chi-card class="-shadow--2">Card content</chi-card>
```
