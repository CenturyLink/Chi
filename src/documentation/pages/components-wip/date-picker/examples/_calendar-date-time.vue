<template lang="pug">
<ComponentExample titleSize="h4" title="Date and Time" id="calendar-date-time" :tabs="exampleTabs">
  template(#example)
    .-d--flex(style="width: 28.75rem;")
      chi-date
      chi-time
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
        webcomponent: `<chi-date></chi-date>
<chi-time></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class CalendarDateTime extends Vue { }
</script>
