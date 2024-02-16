<template lang="pug">
<ComponentExample title="Date Time with stepped minutes" id="date-picker-date-time-stepped" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Minutes can be shown in steps of 5, 10, 15, 20, or 30 minutes or seconds.
      | Use the property <code>minutes-step="value"</code> to define the step for the minutes (defaults to 15 min) if no value is provided.
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__datepicker_date_time_stepped') Date Time
      chi-date-picker(id="example__datepicker_date_time_stepped" mode="datetime" minutes-step="5")
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
        webcomponent: `<chi-label for="example__datepicker_date_time_stepped">Date</chi-label>
<chi-date-picker id="example__datepicker_date_time_stepped" mode="datetime" minutes-step="5"></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DatePickerDateTimeStepped extends Vue { }
</script>
