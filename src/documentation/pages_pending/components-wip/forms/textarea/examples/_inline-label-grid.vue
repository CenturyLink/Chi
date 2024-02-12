<template lang="pug">
<ComponentExample titleSize="h4" title="Inline Label - width controlled using grid" id="inline-label-grid" :tabs="exampleTabs">
  template(#example)
    .chi-form__item.-row.chi-grid.-no-gutter.-align-items--start
      chi-label.chi-col.-w--3(for='example__inline-label-grid') Label width 3 columns
      .chi-col.-w--9
        chi-textarea(id='example__inline-label-grid')
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <chi-label class="chi-col -w--3" for="example__inline-label-grid">Label width 3 columns</chi-label>
  <chi-textarea class="chi-col -w--9" id="example__inline-label-grid"></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <label class="chi-label chi-col -w--3" for="example__inline-label-grid">Label</label>
  <textarea class="chi-input chi-col -w--9" id="example__inline-label-grid"></textarea>
</div>`,
      },
    };
  },
})
export default class InlineLabelGrid extends Vue {}
</script>
