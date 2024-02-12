<template>
  <nav class="docs-sidenav">
    <div class="-px--2 -pt--2 -pb--1">
      <ThemeSwitcher />
    </div>
    <ul class="chi-tabs -vertical -lg -animated">
      <li :class="{ '-active': $route.fullPath.includes(SECTION_URLS.gettingStarted) }">
        <div class="chi-collection__title">Getting Started</div>
        <ul class="chi-tabs__subtabs">
          <DocumentationLinkList :links="NAVIGATION_GETTING_STARTED_ITEMS" />
        </ul>
      </li>
      <li :class="{ '-active': $route.fullPath.includes(SECTION_URLS.foundations) }">
        <div class="chi-collection__title">Foundations</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <div class="chi-accordion accessibility-accordion" ref="accessibilityAccordion">
              <div :class="{
                'chi-accordion__item -bg--none': true,
                '-expanded': $route.fullPath.includes('/accessibility/')
              }">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accessibility</div>
                  <i class="chi-icon icon-chevron-down -xs" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content -p--0">
                  <ul class="chi-tabs__subtabs">
                    <DocumentationLinkList :links="NAVIGATION_FOUNDATIONS_ACCESIBILITY" />
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <DocumentationLinkList :links="NAVIGATION_FOUNDATIONS" />
        </ul>
      </li>
      <li :class="{ '-active': $route.fullPath.includes(SECTION_URLS.components) }">
        <div class="chi-collection__title">Components</div>
        <ul class="chi-tabs__subtabs">
          <DocumentationLinkList :links="NAVIGATION_COMPONENTS_ITEMS" />
        </ul>
      </li>
      <li :class="{ '-active': $route.fullPath.includes(SECTION_URLS.utilities) }">
        <div class="chi-collection__title">Utilities</div>
        <ul class="chi-tabs__subtabs">
          <DocumentationLinkList :links="NAVIGATION_UTILITIES_ITEMS" />
        </ul>
      </li>
      <li :class="{ '-active': $route.fullPath.includes(SECTION_URLS.templates) }">
        <div class="chi-collection__title">Templates</div>
        <ul class="chi-tabs__subtabs">
          <DocumentationLinkList :links="NAVIGATION_TEMPLATE_ITEMS"/>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import {
  NAVIGATION_COMPONENTS_ITEMS,
  NAVIGATION_TEMPLATE_ITEMS,
  NAVIGATION_UTILITIES_ITEMS,
  NAVIGATION_GETTING_STARTED_ITEMS,
  SECTION_URLS,
  NAVIGATION_FOUNDATIONS_ACCESIBILITY,
  NAVIGATION_FOUNDATIONS
} from '@/constants/constants';

declare const chi: any;

@NuxtComponent({})
export default class Navigation extends Vue {
  config = useRuntimeConfig().public;
  baseUrl = this.config.baseUrl;

  [x: string]: any;
  chiAccordion: any;
  SECTION_URLS = SECTION_URLS;
  NAVIGATION_COMPONENTS_ITEMS = NAVIGATION_COMPONENTS_ITEMS;
  NAVIGATION_TEMPLATE_ITEMS = NAVIGATION_TEMPLATE_ITEMS;
  NAVIGATION_UTILITIES_ITEMS = NAVIGATION_UTILITIES_ITEMS;
  NAVIGATION_GETTING_STARTED_ITEMS = NAVIGATION_GETTING_STARTED_ITEMS;
  NAVIGATION_FOUNDATIONS_ACCESIBILITY = NAVIGATION_FOUNDATIONS_ACCESIBILITY;
  NAVIGATION_FOUNDATIONS = NAVIGATION_FOUNDATIONS;

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
.-theme-lumen
  nav.docs-sidenav
  > nav
  > ul.chi-tabs.-vertical
  > li
  > ul.chi-tabs__subtabs
  > li
  > a.-active {
  background-color: #e0f3ff;
  box-shadow: inset 0.125rem 0 0 #0075c9;
  color: #0262b9;
  font-weight: 500;
}
</style>
