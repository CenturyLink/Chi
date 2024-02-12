<template lang="pug">
  <ComponentExample title="Rounded square" id="rounded-square" additionalClasses="-p-lg--6" :tabs="exampleTabs">
    template(#example)
      .chi-skeleton.-rounded.-square
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-skeleton -square -rounded"></div>`,
      },
    };
  },
})
export default class RoundedSquare extends Vue {}
</script>
