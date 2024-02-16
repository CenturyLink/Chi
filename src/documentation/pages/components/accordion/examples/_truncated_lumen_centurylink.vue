<template lang="pug">
<ComponentExample title="Truncated" id="truncated_lumen_centurylink" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
  template(#example-description)
    p.-text Truncate long accordion titles by adding the class <code>-truncated</code> to <code>chi-accordion</code>.
  template(#example)
    .chi-accordion.-truncated#example-truncated
      .chi-accordion__item
        button.chi-accordion__trigger
          i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__title
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex
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
export default class TruncatedLumenCenturyLink extends Vue {
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
    htmlblueprint: `<div class="chi-accordion -truncated" id="example-truncated">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionTruncated = document.getElementById('example-truncated');

  chi.accordion(accordionTruncated);
<\/script>`,
  }
  mounted() {
    chi.accordion(document.getElementById('example-truncated'));
  }
}
</script>
