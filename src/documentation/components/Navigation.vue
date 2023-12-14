<template>
  <nav class="docs-sidenav">
    <div class="-px--2 -pt--2 -pb--1">
      <ThemeSwitcher />
    </div>
    <ul class="chi-tabs -vertical -lg -animated">
      <li :class="{'-active' : $route.fullPath.includes(SECTION_URLS.gettingStarted)}">
        <div class="chi-collection__title">Getting Started</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <a :href="`${BASE_URL}getting-started`">Introduction</a>
          </li>
          <li>
            <a :href="`${BASE_URL}getting-started/installation`"
              >Installation</a
            >
          </li>
          <li>
            <a :href="`${BASE_URL}getting-started/development-workflow`"
              >Development workflow</a
            >
          </li>
          <li>
            <a :href="`${BASE_URL}getting-started/browsers-devices`"
              >Browser support</a
            >
          </li>
          <li>
            <a :href="`${BASE_URL}getting-started/whats-new`">What's new</a>
          </li>
        </ul>
      </li>
      <li :class="{'-active' : $route.fullPath.includes(SECTION_URLS.foundations)}">
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
                      <a :href="`${BASE_URL}foundations/accessibility/overview`"
                        >Overview</a
                      >
                    </li>
                    <li>
                      <a
                        :href="
                          `${BASE_URL}foundations/accessibility/using-keyboard`
                        "
                        >Using the keyboard</a
                      >
                    </li>
                    <li>
                      <a
                        :href="
                          `${BASE_URL}foundations/accessibility/page-structure`
                        "
                        >Page structure</a
                      >
                    </li>
                    <li>
                      <a
                        :href="
                          `${BASE_URL}foundations/accessibility/color-sensory`
                        "
                        >Color and sensory</a
                      >
                    </li>
                    <li>
                      <a :href="`${BASE_URL}foundations/accessibility/images`"
                        >Images</a
                      >
                    </li>
                    <li>
                      <a :href="`${BASE_URL}foundations/accessibility/text`"
                        >Text</a
                      >
                    </li>
                    <li>
                      <a
                        :href="
                          `${BASE_URL}foundations/accessibility/links-and-forms`
                        "
                        >Links and forms</a
                      >
                    </li>
                    <li>
                      <a :href="`${BASE_URL}foundations/accessibility/tables`"
                        >Tables</a
                      >
                    </li>
                    <li>
                      <a :href="`${BASE_URL}foundations/accessibility/other`"
                        >Other</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a :href="`${BASE_URL}foundations/color`">Color</a>
          </li>
          <li>
            <a :href="`${BASE_URL}foundations/design-tokens`">Design tokens</a>
          </li>
          <li>
            <a :href="`${BASE_URL}foundations/grid`">Grid</a>
          </li>
        </ul>
      </li>
      <li :class="{'-active' : $route.fullPath.includes(SECTION_URLS.components)}">
        <div class="chi-collection__title">Components</div>
        <ul class="chi-tabs__subtabs">
          <li
            :key="index"
            v-for="(navigationComponentItem,
            index) in NAVIGATION_COMPONENTS_ITEMS"
            :class="{
              '-active': $route.path.includes(navigationComponentItem.to)
            }"
          >
            <NuxtLink
              v-if="
                navigationComponentItem.to &&
                  navigationComponentItem.source === 'vue'
              "
              :to="`/${navigationComponentItem.to}`"
            >
              {{ navigationComponentItem.label }}
            </NuxtLink>
            <a
              v-if="
                navigationComponentItem.href &&
                  navigationComponentItem.source === 'pug'
              "
              :href="`${BASE_URL}${navigationComponentItem.href}`"
            >
              {{ navigationComponentItem.label }}
            </a>
          </li>
        </ul>
      </li>
      <li :class="{'-active' : $route.fullPath.includes(SECTION_URLS.utilities)}">
        <div class="chi-collection__title">Utilities</div>
        <ul class="chi-tabs__subtabs">
          <li
            :key="index"
            v-for="(navigationUtilityItem, index) in NAVIGATION_UTILITIES_ITEMS"
            :class="{
              '-active': $route.path.includes(navigationUtilityItem.to)
            }"
          >
            <NuxtLink :to="`/${navigationUtilityItem.to}`">
              {{ navigationUtilityItem.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li :class="{'-active' : $route.fullPath.includes(SECTION_URLS.templates)}">
        <div class="chi-collection__title">Templates</div>
        <ul class="chi-tabs__subtabs">
          <li
            :key="index"
            v-for="(navigationTemplateItem, index) in NAVIGATION_TEMPLATE_ITEMS"
            :class="{
              '-active': $route.path.includes(navigationTemplateItem.to)
            }"
          >
            <NuxtLink
              v-if="
                navigationTemplateItem.to &&
                  navigationTemplateItem.source === 'vue'
              "
              :to="`/${navigationTemplateItem.to}`"
            >
              {{ navigationTemplateItem.label }}
            </NuxtLink>
            <a
              v-if="
                navigationTemplateItem.href &&
                  navigationTemplateItem.source === 'pug'
              "
              :href="`${BASE_URL}${navigationTemplateItem.href}`"
            >
              {{ navigationTemplateItem.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';
import {
  NAVIGATION_COMPONENTS_ITEMS,
  NAVIGATION_TEMPLATE_ITEMS,
  NAVIGATION_UTILITIES_ITEMS,
  BASE_URL,
  SECTION_URLS
} from '../constants/constants';

declare const chi: any;

@Component({
  components: {
    ThemeSwitcher
  },
  data: () => {
    return {
      BASE_URL,
      NAVIGATION_COMPONENTS_ITEMS,
      NAVIGATION_TEMPLATE_ITEMS,
      NAVIGATION_UTILITIES_ITEMS,
      SECTION_URLS
    };
  }
})
export default class Navigation extends Vue {
  [x: string]: any;
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
