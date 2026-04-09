---
name: chi-recommendations
description: Recommend the best Chi implementation approach based on project context. Use when the user asks which Chi approach to use (Vue, Web Components, or HTML/CSS), when starting a new project with Chi, or when migrating between approaches. Provides framework-specific guidance and code examples.
---

# Chi Implementation Recommendations

## Decision Tree

Use this decision tree to recommend the best approach:

### Step 1: Check Framework

| Framework | Recommended Approach | Reasoning |
|-----------|---------------------|-----------|
| Vue 3 | **chi-vue** | Full Vue reactivity, composition API, TypeScript support |
| React | **Custom Elements** | Works with React; note: use `ref` callbacks for event listeners since React synthetic events don't fire on CEs |
| Angular | **Custom Elements** | Excellent support via `CUSTOM_ELEMENTS_SCHEMA` in module declarations |
| Svelte | **Custom Elements** | Seamless Custom Elements support |
| Vanilla JS | **Custom Elements** | Best DX, no framework overhead |
| Unknown | **Custom Elements** | Safe default for any framework |

### Step 2: Check Constraints

| Constraint | Override To | Reasoning |
|------------|------------|-----------|
| Legacy browser support (IE11) | **HTML/CSS** | Custom Elements need polyfills |
| User explicitly wants CSS | **HTML/CSS** | Respect explicit preference |
| User wants Web Components | **Custom Elements** | Respect explicit preference |
| Static HTML site (no JS) | **HTML/CSS** | No JS runtime needed |
| SSR without hydration | **HTML/CSS** | Custom Elements need JS to initialize |

### Step 3: Determine Confidence

| Scenario | Confidence |
|----------|------------|
| Framework detected + no conflicts | High |
| Existing code matches recommendation | High |
| No framework info, using default | Low |
| Existing code uses different approach | Medium (suggest gradual migration) |

## Code Examples

### Vue Approach
```html
<script setup>
import { ChiButton } from '@aspect/chi-vue';
</script>
<template>
  <ChiButton color="primary" size="lg" @click="handleClick">Click me</ChiButton>
</template>
```

### Custom Elements Approach
```html
<chi-button color="primary" size="lg">Click me</chi-button>
<script>
  document.querySelector('chi-button').addEventListener('chiClick', handleClick);
</script>
```

### HTML/CSS Approach
```html
<button class="chi-button -primary -lg" type="button" onclick="handleClick()">Click me</button>
```
Note: Requires manual event handling, ARIA attributes, and keyboard support.

## Approach Detection

To detect which approach existing code uses:

| Pattern | Approach |
|---------|----------|
| `<Chi[A-Z]` (PascalCase tags) | Vue |
| `<chi-` (kebab-case custom elements) | Custom Elements |
| `class="chi-` (CSS classes on native elements) | HTML/CSS |

Count occurrences of each pattern. The most frequent one is the existing approach.

**Edge case**: `<chi-icon>` inside a `<button class="chi-button">` is mixed usage -- recommend migrating the button to `<chi-button>` too.

## Migration Paths

### HTML/CSS → Custom Elements
1. Replace CSS base classes with Web Component tags: `<button class="chi-button">` → `<chi-button>`
2. Convert CSS modifiers to properties: `-primary` → `color="primary"`
3. Convert boolean modifiers to attributes: `-disabled` → `disabled`
4. Keep utility classes for spacing: `class="-p--4"` stays
5. Remove manual ARIA -- Web Components handle it automatically

### HTML/CSS → Vue
1. Install `@aspect/chi-vue` package
2. Import components: `import { ChiButton } from '@aspect/chi-vue'`
3. Replace HTML with Vue component syntax
4. Use `v-bind` for dynamic props, `v-on` for events

### Custom Elements → Vue
1. Replace `<chi-*>` tags with `<Chi*>` components
2. Convert attributes to Vue props syntax
3. Migrate events from addEventListener to `v-on`

### Vue → Custom Elements
1. Replace `<Chi*>` with `<chi-*>` Web Components
2. Convert Vue props to attributes
3. Replace `v-on` events with `addEventListener`
4. Handle reactivity manually if needed

## Priority Order

1. **chi-vue** (priority 1) -- Vue 3 components for Vue projects
2. **chi-web-components** (priority 2) -- Custom Elements for any framework
3. **chi-html-css** (priority 3) -- CSS classes for static HTML or legacy support
