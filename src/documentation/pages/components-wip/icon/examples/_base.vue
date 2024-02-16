<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example)
    chi-icon(icon='atom')
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
        webcomponent: `<chi-icon icon="atom"></chi-icon>`,
        htmlblueprint: `<i class="chi-icon icon-atom" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class Base extends Vue { }
</script>
