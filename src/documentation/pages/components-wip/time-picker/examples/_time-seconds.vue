<template lang="pug">
<ComponentExample titleSize="h4" title="Seconds" id="time-seconds" :tabs="exampleTabs">
  template(#example)
    chi-time(display-seconds)
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
        webcomponent: `<chi-time display-seconds></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TimeSeconds extends Vue { }
</script>
