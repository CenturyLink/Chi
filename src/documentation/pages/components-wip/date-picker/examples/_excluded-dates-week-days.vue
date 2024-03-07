<template lang="pug">
<ComponentExample title="Excluded dates and week days" id="excluded-dates-week-days" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Disable dates - <code>excluded-dates="01/23/2024, 05/25/2024"</code>
      br
      | Disable days - <code>excluded-weekdays="0, 6"</code>
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__datepicker_excluded_days_dates') Date
      chi-date-picker(id="example__datepicker_excluded_days_dates", excluded-dates="01/23/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024", excluded-weekdays="0, 6")
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
        webcomponent: `<chi-label for="example__datepicker_date_excluded_days_dates">Date</chi-label>
<chi-date-picker id="example__datepicker_date_excluded_days_dates" excluded-weekdays="0, 6" excluded-dates="01/23/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024"></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class ExcludedDatesWeekDays extends Vue {}
</script>
