<template lang="pug">
<ComponentExample titleSize="h4" title="Inline Label - width controlled using percent" id="inline-label-percent" :tabs="exampleTabs">
  template(#example)
    .chi-form__item.-row.-align-items--start
      chi-label.-w--50(for='example__inline-label-percent') Label width 50%
      .-w--50
        chi-textarea(id='example__inline-label-percent')
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
        webcomponent: `<div class="chi-form__item -row -align-items--start">
  <chi-label class="-w--50" for="example__inline-label-percent">Label width 50%</chi-label>
  <div class="-w--50">
    <chi-textarea id="example__inline-label-percent"></chi-textarea>
  </div>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row -align-items--start">
  <label class="chi-label -w--50" for="example__inline-label-percent">Label</label>
  <div class="-w--50">
    <textarea class="chi-input" id="example__inline-label-percent"></textarea>
  </div>
</div>`,
      },
    };
  },
})
export default class InlineLabelPercent extends Vue {}
</script>
