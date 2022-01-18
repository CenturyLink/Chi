<template>
  <nav class="docs-sidenav">
    <div class="-px--2 -pt--2 -pb--1">
      <ThemeSwitcher />
    </div>
    <ul class="chi-tabs -vertical -lg -animated">
      <li class="-active">
        <div class="chi-collection__title">Components</div>
        <ul class="chi-tabs__subtabs">
          <li><NuxtLink to="/components/accordion">Accordion</NuxtLink></li>
          <!-- <li><NuxtLink to="/components/activity">Activity</NuxtLink></li> -->
          <li><NuxtLink to="/components/alert">Alert</NuxtLink></li>
          <!-- <li><NuxtLink to="/components/avatar">Avatar</NuxtLink></li> -->
          <li><NuxtLink to="/components/badge">Badge</NuxtLink></li>
          <li><NuxtLink to="/components/brand">Brand</NuxtLink></li>
          <li><NuxtLink to="/components/card">Card</NuxtLink></li>
          <li><NuxtLink to="/components/forms/checkbox">Checkbox</NuxtLink></li>
          <li><NuxtLink to="/components/divider">Divider</NuxtLink></li>
          <li><NuxtLink to="/components/dropdown">Dropdown</NuxtLink></li>
          <li><NuxtLink to="/components/file-input">File input</NuxtLink></li>
          <li><NuxtLink to="/components/flag-icon">Flag icon</NuxtLink></li>
          <li><NuxtLink to="/components/header">Header</NuxtLink></li>
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
          <li>
            <NuxtLink to="/components/forms/number-input"
              >Number input</NuxtLink
            >
          </li>
          <li><NuxtLink to="/components/phone-input">Phone input</NuxtLink></li>
          <li><NuxtLink to="/components/picker">Picker</NuxtLink></li>
          <li><NuxtLink to="/components/progress">Progress</NuxtLink></li>
          <li><NuxtLink to="/components/skeleton">Skeleton</NuxtLink></li>
          <li><NuxtLink to="/components/steps">Steps</NuxtLink></li>
          <!-- <li><NuxtLink to="/components/activity">Activity</NuxtLink></li>
          <li><NuxtLink to="/components/avatar">Avatar</NuxtLink></li>
          <li><NuxtLink to="/components/breadcrumb">Breadcrumb</NuxtLink></li>
          <li>
            <NuxtLink to="/components/button"
              >Button
              <div class="-sr--only">component</div></NuxtLink>
          </li>
          <li><NuxtLink to="/components/button-group">Button group</NuxtLink></li> -->
          <!-- <li><NuxtLink to="/components/data-table">Data table</NuxtLink></li> -->
          <!-- <li><NuxtLink to="/components/date-picker">Date picker</NuxtLink></li> -->
          <!-- <li><NuxtLink to="/components/drawer">Drawer</NuxtLink></li> -->
          <!-- <li>
            <NuxtLink to="/components/expansion-panel">Expansion panel</NuxtLink>
          </li>
          <li><NuxtLink to="/components/footer">Footer</NuxtLink></li>
          <li><NuxtLink to="/components/header">Header</NuxtLink></li>
          <li><NuxtLink to="/components/icon">Icon</NuxtLink></li>
          <li><NuxtLink to="/components/label">Label</NuxtLink></li>
          <li>
            <NuxtLink to="/components/mobile-navigation">Mobile navigation</NuxtLink>
          </li>
          <li><NuxtLink to="/components/modal">Modal</NuxtLink></li>
          <li>
            <NuxtLink to="/components/forms/number-input">Number input</NuxtLink>
          </li>
          <li><NuxtLink to="/components/pagination">Pagination</NuxtLink></li>
          <li><NuxtLink to="/components/picker">Picker</NuxtLink></li>
          <li><NuxtLink to="/components/picker-group">Picker group</NuxtLink></li>
          <li><NuxtLink to="/components/popover">Popover</NuxtLink></li>
          <li><NuxtLink to="/components/price">Price</NuxtLink></li>
          <li>
            <NuxtLink to="/components/forms/radio-button">Radio button</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/components/forms/range-slider">Range slider</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/components/forms/search-input">Search input</NuxtLink>
          </li>
          <li><NuxtLink to="/components/forms/select">Select</NuxtLink></li>
          <li><NuxtLink to="/components/sidenav">Sidenav</NuxtLink></li>
          <li><NuxtLink to="/components/skeleton">Skeleton</NuxtLink></li>
          <li><NuxtLink to="/components/spinner">Spinner</NuxtLink></li>
          <li><NuxtLink to="/components/stat">Stat</NuxtLink></li>
          <li><NuxtLink to="/components/table">Table</NuxtLink></li>
          <li><NuxtLink to="/components/tabs">Tabs</NuxtLink></li>
          <li><NuxtLink to="/components/forms/text-input">Text input</NuxtLink></li>
          <li><NuxtLink to="/components/forms/textarea">Textarea</NuxtLink></li>
          <li><NuxtLink to="/components/time-picker">Time picker</NuxtLink></li>
          <li>
            <NuxtLink to="/components/forms/toggle-switch">Toggle switch</NuxtLink>
          </li>
          <li><NuxtLink to="/components/toolbar">Toolbar</NuxtLink></li>
          <li><NuxtLink to="/components/tooltip">Tooltip</NuxtLink></li> -->
        </ul>
      </li>
      <!-- <li>
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
          <li><NuxtLink to="/utilities/vertical-align">Vertical-align</NuxtLink></li>
          <li><NuxtLink to="/utilities/zindex">Z-index</NuxtLink></li>
        </ul>
      </li>
      <li>
        <div class="chi-collection__title">Templates</div>
        <ul class="chi-tabs__subtabs">
          <li class="-portal-only">
            <NuxtLink to="/templates/app-layout">App layout</NuxtLink>
          </li>
          <li><NuxtLink to="/templates/error-404">Error 404</NuxtLink></li>
          <li><NuxtLink to="/templates/error-500">Error 500</NuxtLink></li>
          <li><NuxtLink to="/templates/state">State</NuxtLink></li>
        </ul>
      </li> -->
    </ul>
  </nav>
</template>

<script lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';
export default {
  components: {
    ThemeSwitcher
  },
  mounted() {}
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
