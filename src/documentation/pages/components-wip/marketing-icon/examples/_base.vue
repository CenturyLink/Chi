<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    template(#example)
      chi-marketing-icon(icon="business-big-data")
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-marketing-icon icon="business-big-data"></chi-marketing-icon>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Base extends Vue { }
</script>
