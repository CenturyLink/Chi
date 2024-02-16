<template lang="pug">
<ComponentExample titleSize="h4" title="Seconds step" id="time-seconds-step" :tabs="exampleTabs">
  template(#example)
    chi-time(seconds-step="30" display-seconds)
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
        webcomponent: `<!-- Seconds step with default values (10 seconds) -->
<chi-time seconds-step display-seconds></chi-time>
<!-- Seconds step with custom values of 30 seconds -->
<chi-time seconds-step="30" display-seconds></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TimeStep extends Vue { }
</script>
