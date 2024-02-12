<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__base") Label
          chi-textarea(id="example__base")
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
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__base">Label</chi-label>
  <chi-textarea id="example__base"></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <textarea class="chi-input" id="example__base"></textarea>
</div>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
