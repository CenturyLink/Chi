<template>
  <nav class="docs-sidenav">
    <div class="-text--primary -p--2">New docs</div>
    <div class="-px--2 -pt--2 -pb--1">
      <ThemeSwitcher />
    </div>
    <ul class="chi-tabs -vertical -lg -animated">
      <li>
        <div class="chi-collection__title">Getting Started</div>
        <ul class="chi-tabs__subtabs">
          <li><a href="../../getting-started">Introduction</a></li>
          <li><a href="../../getting-started/installation">Installation</a></li>
          <li>
            <a href="../../getting-started/development-workflow"
              >Development workflow</a
            >
          </li>
          <li>
            <a href="../../getting-started/browsers-devices">Browser support</a>
          </li>
          <li><a href="../../getting-started/whats-new">What's new</a></li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Foundations</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <div class="chi-accordion accessibility-accordion" ref="accessibilityAccordion">
              <div class="chi-accordion__item -bg--none">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accessibility</div>
                  <i
                    class="chi-icon icon-chevron-down -xs"
                    aria-hidden="true"
                  ></i>
                </button>
                <div class="chi-accordion__content -p--0">
                  <ul class="chi-tabs__subtabs">
                    <li>
                      <a href="../../foundations/accessibility/overview"
                        >Overview</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/using-keyboard"
                        >Using the keyboard</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/page-structure"
                        >Page structure</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/color-sensory"
                        >Color and sensory</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/images"
                        >Images</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/text">Text</a>
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/links-and-forms"
                        >Links and forms</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/tables"
                        >Tables</a
                      >
                    </li>
                    <li>
                      <a href="../../foundations/accessibility/other">Other</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="../../foundations/color">Color</a></li>
          <li><a href="../../foundations/design-tokens">Design tokens</a></li>
          <li><a href="../../foundations/grid">Grid</a></li>
        </ul>
      </li>
      <li class="-active">
        <div class="chi-collection__title">Components</div>
        <ul class="chi-tabs__subtabs">
          <li><NuxtLink to="/components/accordion">Accordion</NuxtLink></li>
          <li><NuxtLink to="/components/activity">Activity</NuxtLink></li>
          <li><NuxtLink to="/components/alert">Alert</NuxtLink></li>
          <li><NuxtLink to="/components/avatar">Avatar</NuxtLink></li>
          <li><NuxtLink to="/components/badge">Badge</NuxtLink></li>
          <li><NuxtLink to="/components/brand">Brand</NuxtLink></li>
          <li><NuxtLink to="/components/breadcrumb">Breadcrumb</NuxtLink></li>
          <li><NuxtLink to="/components/button">Button</NuxtLink></li>
          <li><NuxtLink to="/components/button-group">Button group</NuxtLink></li>
          <li><NuxtLink to="/components/card">Card</NuxtLink></li>
          <li><NuxtLink to="/components/carousel">Carousel</NuxtLink></li>
          <li><NuxtLink to="/components/forms/checkbox">Checkbox</NuxtLink></li>
          <li><a href="/components/data-table">Data table</a></li>
          <li><NuxtLink to="/components/divider">Divider</NuxtLink></li>
          <li><NuxtLink to="/components/drawer">Drawer</NuxtLink></li>
          <li><NuxtLink to="/components/dropdown">Dropdown</NuxtLink></li>
          <li><NuxtLink to="/components/file-input">File input</NuxtLink></li>
          <li><NuxtLink to="/components/flag-icon">Flag icon</NuxtLink></li>
          <li><NuxtLink to="/components/header">Header</NuxtLink></li>
          <li><NuxtLink to="/components/icon">Icon</NuxtLink></li>
          <li><NuxtLink to="/components/label">Label</NuxtLink></li>
          <li><NuxtLink to="/components/link">Link</NuxtLink></li>
          <li>
            <NuxtLink to="/components/marketing-icon">Marketing icon</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/components/mobile-navigation"
              >Mobile navigation</NuxtLink
            >
          </li>
          <li><NuxtLink to="/components/modal">Modal</NuxtLink></li>
          <li>
            <NuxtLink to="/components/forms/number-input"
              >Number input</NuxtLink
            >
          </li>
          <li><NuxtLink to="/components/pagination">Pagination</NuxtLink></li>
          <li><NuxtLink to="/components/phone-input">Phone input</NuxtLink></li>
          <li><NuxtLink to="/components/picker">Picker</NuxtLink></li>
          <li><NuxtLink to="/components/picker-group">Picker group</NuxtLink></li>
          <li><NuxtLink to="/components/popover">Popover</NuxtLink></li>
          <li><NuxtLink to="/components/price">Price</NuxtLink></li>
          <li><NuxtLink to="/components/progress">Progress</NuxtLink></li>
          <li>
            <NuxtLink to="/components/forms/radio-button"
              >Radio button</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/components/forms/range-slider"
              >Range slider</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/components/forms/search-input"
              >Search input</NuxtLink
            >
          </li>
          <li><NuxtLink to="/components/forms/select">Select</NuxtLink></li>
          <li><NuxtLink to="/components/sidenav">Sidenav</NuxtLink></li>
          <li><NuxtLink to="/components/skeleton">Skeleton</NuxtLink></li>
          <li><NuxtLink to="/components/spinner">Spinner</NuxtLink></li>
          <li><NuxtLink to="/components/stat">Stat</NuxtLink></li>
          <li><NuxtLink to="/components/steps">Steps</NuxtLink></li>
          <li><NuxtLink to="/components/table">Table</NuxtLink></li>
          <li><NuxtLink to="/components/forms/text-input">Text input</NuxtLink></li>
          <li><NuxtLink to="/components/forms/textarea">Textarea</NuxtLink></li>
          <li><NuxtLink to="/components/time-picker">Time picker</NuxtLink></li>
          <li>
            <NuxtLink to="/components/forms/text-input">Text input</NuxtLink>
          </li>
          <li><NuxtLink to="/components/tooltip">Tooltip</NuxtLink></li>
          <li><NuxtLink to="/components/toolbar">Toolbar</NuxtLink></li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Templates</div>
        <ul class="chi-tabs__subtabs">
          <li class=" -portal-only">
            <a href="../../templates/app-layout">App layout</a>
          </li>
          <li><a href="../../templates/error-404">Error 404</a></li>
          <li><a href="../../templates/error-500">Error 500</a></li>
          <li><a href="../../templates/state">State</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';

declare const chi: any;

@Component({
  components: {
    ThemeSwitcher,
  }
})
export default class Navigation extends Vue {
  chiAccordion: any;

  mounted() {
    const accordionElement = this.$refs.accessibilityAccordion as HTMLElement;

    if (accordionElement) {
      this.chiAccordion = chi.accordion(accordionElement);
    }
  }
};
</script>

<style>
nav.docs-sidenav
  > nav
  > ul.chi-tabs.-vertical
  > li
  > ul.chi-tabs__subtabs
  > li
  > a.nuxt-link-exact-active {
  background-color: #e0f3ff;
  box-shadow: inset 0.125rem 0 0 #0075c9;
  color: #0262b9;
}
</style>
