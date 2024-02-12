<template lang="pug">
  <ComponentExample titleSize="h4" title="Active" id="active" :tabs="exampleTabs">
    template(#example)
      chi-time(value="14:00")
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-time value="14:00"></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TimeActive extends Vue { }
</script>
