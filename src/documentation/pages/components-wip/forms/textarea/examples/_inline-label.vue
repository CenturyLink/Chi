<template lang="pug">
<ComponentExample titleSize="h4" title="Inline Label" id="inline-label" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Apply the class <code>-row</code> to <code>chi-form__item</code> to render labels and textareas inline.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item.-row.-align-items--start
          chi-label(for='example__inline-label') Label
          chi-textarea(id='example__inline-label')
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
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-textarea id="example__inline-label"></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row -align-items--start">
  <label class="chi-label" for="example__inline-label">Label</label>
  <textarea class="chi-input" id="example__inline-label"></textarea>
</div>`,
      },
    };
  },
})
export default class InlineLabel extends Vue {}
</script>
