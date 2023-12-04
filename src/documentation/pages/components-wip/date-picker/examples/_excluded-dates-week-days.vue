<template lang="pug">
  <ComponentExample title="Excluded dates and week days" id="excluded-dates-week-days" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Disable dates - <code>excluded-dates="01/23/2024, 05/25/2024"</code>
      br
      | Disable days - <code>excluded-weekdays="0, 6"</code>
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__datepicker_excluded_days_dates') Date
      chi-date-picker(id="example__datepicker_excluded_days_dates", excluded-dates="01/23/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024", excluded-weekdays="0, 6")
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
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
