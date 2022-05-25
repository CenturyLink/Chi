<template>
  <nav class="docs-sidenav">
    <div class="-px--2 -pt--2 -pb--1">
      <ThemeSwitcher />
    </div>
    <ul class="chi-tabs -vertical -lg -animated">
      <li>
        <div class="chi-collection__title">Getting Started</div>
        <ul class="chi-tabs__subtabs">
          <li><NuxtLink to="/getting-started">Introduction</NuxtLink></li>
          <li>
            <NuxtLink to="/getting-started/installation">Installation</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/getting-started/development-workflow"
              >Development workflow</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/getting-started/browsers-devices"
              >Browser support</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/getting-started/whats-new">What's new</NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Foundations</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <div
              class="chi-accordion accessibility-accordion"
              ref="accessibilityAccordion"
            >
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
                      <NuxtLink to="/foundations/accessibility/overview"
                        >Overview</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/using-keyboard"
                        >Using the keyboard</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/page-structure"
                        >Page structure</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/color-sensory"
                        >Color and sensory</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/images"
                        >Images</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/text"
                        >Text</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/links-and-forms"
                        >Links and forms</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/tables"
                        >Tables</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/foundations/accessibility/other"
                        >Other</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><NuxtLink to="/foundations/color">Color</NuxtLink></li>
          <li>
            <NuxtLink to="/foundations/design-tokens">Design tokens</NuxtLink>
          </li>
          <li><NuxtLink to="/foundations/grid">Grid</NuxtLink></li>
        </ul>
      </li>
      <li class="-active">
        <div class="chi-collection__title">Components</div>
        <ul class="chi-tabs__subtabs">
          <li
            v-for="(navigationComponentItem,
            index) in NAVIGATION_COMPONENTS_ITEMS"
            :key="index"
          >
            <NuxtLink
              v-if="
                navigationComponentItem.to &&
                  navigationComponentItem.source === 'vue'
              "
              :to="navigationComponentItem.to"
              >{{ navigationComponentItem.label }}</NuxtLink
            >
            <a
              v-if="
                navigationComponentItem.href &&
                  navigationComponentItem.source === 'pug'
              "
              :href="`${BASE_URL}${navigationComponentItem.href}`"
              >{{ navigationComponentItem.label }}</a
            >
          </li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Utilities</div>
        <ul class="chi-tabs__subtabs">
          <li><NuxtLink to="/utilities/border">Border</NuxtLink></li>
          <li><NuxtLink to="/utilities/color">Color</NuxtLink></li>
          <li><NuxtLink to="/utilities/display">Display</NuxtLink></li>
          <li><NuxtLink to="/utilities/flex">Flex</NuxtLink></li>
          <li><NuxtLink to="/utilities/image">Image</NuxtLink></li>
          <li><NuxtLink to="/utilities/opacity">Opacity</NuxtLink></li>
          <li><NuxtLink to="/utilities/overflow">Overflow</NuxtLink></li>
          <li><NuxtLink to="/utilities/position">Position</NuxtLink></li>
          <li><NuxtLink to="/utilities/shadow">Shadow</NuxtLink></li>
          <li><NuxtLink to="/utilities/sizing">Sizing</NuxtLink></li>
          <li><NuxtLink to="/utilities/spacing">Spacing</NuxtLink></li>
          <li><NuxtLink to="/utilities/text">Text</NuxtLink></li>
          <li>
            <NuxtLink to="/utilities/vertical-align">Vertical-align</NuxtLink>
          </li>
          <li><NuxtLink to="/utilities/zindex">Z-index</NuxtLink></li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Templates</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <NuxtLink to="/templates/app-layout">App layout</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/templates/error-404">Error 404</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/templates/error-500">Error 500</NuxtLink>
          </li>
          <li><NuxtLink to="/templates/state">State</NuxtLink></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { NAVIGATION_COMPONENTS_ITEMS, BASE_URL } from '../constants/constants';

declare const chi: any;

@Component({
  components: {
    ThemeSwitcher
  },
  data: () => {
    return {
      BASE_URL,
      NAVIGATION_COMPONENTS_ITEMS
    };
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

  beforeDestroy() {
    if (this.chiAccordion) {
      this.chiAccordion.dispose();
    }
  }
}
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
