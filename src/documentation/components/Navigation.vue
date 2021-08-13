<template>
  <nav class="docs-sidenav">
    <ul class="chi-tabs -vertical -lg -animated">
      <li>
        <div class="chi-collection__title">Components</div>
        <ul class="chi-tabs__subtabs">
          <li>
            <NuxtLink to="/components/accordion">Accordion</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style>
nav.docs-sidenav > nav > ul.chi-tabs.-vertical > li > ul.chi-tabs__subtabs > li > a.nuxt-link-exact-active {
  background-color: #e0f3ff;
  box-shadow: inset 0.125rem 0 0 #0075c9;
  color: #0262b9;
}
</style>