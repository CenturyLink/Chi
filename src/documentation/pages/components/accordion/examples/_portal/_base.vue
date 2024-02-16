<template lang="pug">
<ComponentExample title="Base" id="base_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
  template(#example)
    .chi-accordion#example-portal-base
      .chi-accordion__item
        button.chi-accordion__trigger
          .chi-accordion__title
            | Accordion 1
          i.chi-icon.icon-chevron-down(aria-hidden="true")
        .chi-accordion__content
          p.chi-accordion__text Content goes here
      .chi-accordion__item.-expanded
        button.chi-accordion__trigger
          .chi-accordion__title
            | Accordion 2
          i.chi-icon.icon-chevron-down(aria-hidden="true")
        .chi-accordion__content
          p.chi-accordion__text Content goes here
      .chi-accordion__item
        button.chi-accordion__trigger
          .chi-accordion__title
            | Accordion 3
          i.chi-icon.icon-chevron-down(aria-hidden="true")
        .chi-accordion__content
          p.chi-accordion__text Content goes here
      .chi-accordion__item
        button.chi-accordion__trigger
          .chi-accordion__title
            | Accordion 4
          i.chi-icon.icon-chevron-down(aria-hidden="true")
        .chi-accordion__content
          p.chi-accordion__text Content goes here
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class BasePortal extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-accordion" id="example-portal-base">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 1</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 2</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 3</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion 4</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  </div>

  <script>
  const accordionBase = document.getElementById('example-portal-base');

  chi.accordion(accordionBase);
  <//script>`,
  }
  mounted() {
    const accordionPortalBase = document.getElementById('example-portal-base');

    chi.accordion(accordionPortalBase);
  }
}
</script>
