<template lang="pug">
  <ComponentExample title="Inline Label" id="inline-label" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Apply the class <code>-row</code> to <code>chi-form__item</code> to render labels and inputs inline.
    template(#example)
      .chi-grid
        .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
          .chi-form__item.-row
            chi-label(for='example__inline-label') Label
            chi-text-input(id='example__inline-label')
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
        webcomponent: `<div class="chi-form__item -row">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-text-input id="example__inline-label"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row">
  <label class="chi-label" for="example__inline-label">Label</label>
  <input class="chi-input" type="text" id="example__inline-label">
</div>`,
      },
    };
  },
})
export default class InlineLabel extends Vue {}
</script>
