<template lang="pug">
  <ComponentExample title="Base" id="base_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    div(slot="example")
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
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <JSNeeded />
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
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
  <//script>`
      }
    };
  }
})
export default class BasePortal extends Vue {
  mounted() {
    const accordionPortalBase = document.getElementById('example-portal-base');

    chi.accordion(accordionPortalBase);
  }
}
</script>
