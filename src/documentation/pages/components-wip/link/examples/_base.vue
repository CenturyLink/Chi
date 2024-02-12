<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs" additionalClasses="-text">
    template(#example)
      chi-link(href="#") Link
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
        webcomponent: `<chi-link href="#">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#">Link</a>`,
      },
    };
  },
})
export default class Base extends Vue { }
</script>
