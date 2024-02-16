<template lang="pug">
<ComponentExample titleSize="h4" title="24-hour format" id="time-24hour" :tabs="exampleTabs">
  template(#example)
    chi-time(format='24hr')
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
        webcomponent: `<chi-time format="24hr"></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class TimeTwentyFourHourFormat extends Vue { }
</script>
