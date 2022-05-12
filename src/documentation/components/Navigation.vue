<template>
  <nav class="docs-sidenav">
    <div class="-px--2 -pt--2 -pb--1">
      <ThemeSwitcher />
    </div>
    <ul class="chi-tabs -vertical -lg -animated">
      <li>
        <div class="chi-collection__title">Getting Started</div>
        <ul class="chi-tabs__subtabs">
          <li><a href="/getting-started">Introduction</a></li>
          <li>
            <a href="/getting-started/installation">Installation</a>
          </li>
          <li>
            <a href="/getting-started/development-workflow"
              >Development workflow</a
            >
          </li>
          <li>
            <a href="/getting-started/browsers-devices">Browser support</a>
          </li>
          <li>
            <a href="/getting-started/whats-new">What's new</a>
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
                      <a href="/foundations/accessibility/overview"
                        >Overview</a
                      >
                    </li>
                    <li>
                      <a href="/foundations/accessibility/using-keyboard"
                        >Using the keyboard</a
                      >
                    </li>
                    <li>
                      <a href="/foundations/accessibility/page-structure"
                        >Page structure</a
                      >
                    </li>
                    <li>
                      <a href="/foundations/accessibility/color-sensory"
                        >Color and sensory</a
                      >
                    </li>
                    <li>
                      <a href="/foundations/accessibility/images">Images</a>
                    </li>
                    <li>
                      <a href="/foundations/accessibility/text">Text</a>
                    </li>
                    <li>
                      <a href="/foundations/accessibility/links-and-forms"
                        >Links and forms</a
                      >
                    </li>
                    <li>
                      <a href="/foundations/accessibility/tables">Tables</a>
                    </li>
                    <li>
                      <a href="/foundations/accessibility/other">Other</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="/foundations/color">Color</a></li>
          <li>
            <a href="/foundations/design-tokens">Design tokens</a>
          </li>
          <li><a href="/foundations/grid">Grid</a></li>
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
              :href="`${ROOT_URL}${navigationComponentItem.href}`"
              >{{ navigationComponentItem.label }}</a
            >
          </li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Utilities</div>
        <ul class="chi-tabs__subtabs">
          <li><a href="/utilities/border">Border</a></li>
          <li><a href="/utilities/color">Color</a></li>
          <li><a href="/utilities/display">Display</a></li>
          <li><a href="/utilities/flex">Flex</a></li>
          <li><a href="/utilities/image">Image</a></li>
          <li><a href="/utilities/opacity">Opacity</a></li>
          <li><a href="/utilities/overflow">Overflow</a></li>
          <li><a href="/utilities/position">Position</a></li>
          <li><a href="/utilities/shadow">Shadow</a></li>
          <li><a href="/utilities/sizing">Sizing</a></li>
          <li><a href="/utilities/spacing">Spacing</a></li>
          <li><a href="/utilities/text">Text</a></li>
          <li><a href="/utilities/vertical-align">Vertical-align</a></li>
          <li><a href="/utilities/zindex">Z-index</a></li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Templates</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <a href="templates/app-layout">App layout</a>
          </li>
          <li>
            <a href="templates/error-404">Error 404</a>
          </li>
          <li>
            <a href="templates/error-500">Error 500</a>
          </li>
          <li><a href="templates/state">State</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';
import {
  CHI_ROOT_URL,
  NAVIGATION_COMPONENTS_ITEMS
} from '../constants/constants';

declare const chi: any;
const ROOT_URL = process.env.DOCS_ENV === 'production' ? CHI_ROOT_URL : '';

@Component({
  components: {
    ThemeSwitcher
  },
  data: () => {
    return {
      NAVIGATION_COMPONENTS_ITEMS,
      CHI_ROOT_URL,
      ROOT_URL,
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
