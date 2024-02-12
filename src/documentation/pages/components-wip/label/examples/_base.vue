<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    template(#example)
      chi-label(for="input-1") Label
      input#input-1-control.-sr--only

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
        webcomponent: `<chi-label>Label</chi-label>`,
        htmlblueprint: `<label class="chi-label">Label</label>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
