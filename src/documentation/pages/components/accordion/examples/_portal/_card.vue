<template lang="pug">
  <ComponentExample title="Card" id="card_portal" :tabs="exampleTabs" padding="-p--3 p-lg--6">
    div(slot="example")
      .chi-accordion.-card#example-portal-card
        .chi-accordion__item
          button.chi-accordion__trigger
            i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__title
              | Accordion 1
          .chi-accordion__content
            p.chi-accordion__text Content goes here
        .chi-accordion__item.-expanded
          button.chi-accordion__trigger
            i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__title
              | Accordion 2
          .chi-accordion__content
            p.chi-accordion__text Content goes here
        .chi-accordion__item
          button.chi-accordion__trigger
            i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__title
              | Accordion 3
          .chi-accordion__content
            p.chi-accordion__text Content goes here
        .chi-accordion__item
          button.chi-accordion__trigger
            i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__title
              | Accordion 4
          .chi-accordion__content
            p.chi-accordion__text Content goes here
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded slot="tab-description" />
      <pre class="language-html">
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
          disabled: true,
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
        htmlblueprint: `<div class="chi-accordion -card" id="example-portal-card">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 2</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 3</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 4</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionCard = document.getElementById('example-portal-card');

  chi.accordion(accordionCard);
<\/script>`
      }
    };
  }
})
export default class CardPortal extends Vue {
  mounted() {
    const accordionCard = document.getElementById('example-portal-card');

    chi.accordion(accordionCard);
  }
}
</script>
