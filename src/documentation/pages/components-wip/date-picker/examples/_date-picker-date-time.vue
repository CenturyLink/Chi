<template lang="pug">
<ComponentExample title="Date Time" id="date-picker-date-time" :tabs="exampleTabs">
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__datepicker_date_time') Date Time
      chi-date-picker(id="example__datepicker_date_time" mode="datetime")
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
        webcomponent: `<chi-label for="example__datepicker_date_time">Date</chi-label>
<chi-date-picker id="example__datepicker_date_time" mode="datetime"></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DatePickerDateTime extends Vue { }
</script>
