<template lang="pug">
<ComponentExample titleSize="h4" title="Minutes step" id="time-minutes-step" :tabs="exampleTabs">
  template(#example)
    chi-time(minutes-step="20")
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
        webcomponent: `<!-- Minutes step with default value (15 minutes) -->
<chi-time minutes-step></chi-time>
<!-- Minutes step with custom value of 20 minutes -->
<chi-time minutes-step="20"></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TimeStep extends Vue {}
</script>
