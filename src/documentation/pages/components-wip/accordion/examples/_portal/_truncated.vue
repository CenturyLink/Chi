<template lang="pug">
  <ComponentExample title="Truncated" id="truncated_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    template(#example-description)
      p.-text Truncate long accordion titles by adding the class <code>-truncated</code> to <code>chi-accordion</code>.
    template(#example)
      .chi-accordion.-truncated#example-portal-truncated
        .chi-accordion__item
          button.chi-accordion__trigger
            .chi-accordion__title
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex
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
export default class TruncatedPortal extends Vue {
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
    htmlblueprint: `<div class="chi-accordion -truncated">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`,
  }
  mounted() {
    chi.accordion(document.getElementById('example-portal-truncated'));
  }
}
</script>
