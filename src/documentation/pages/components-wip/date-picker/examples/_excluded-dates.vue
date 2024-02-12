<template lang="pug">
  <ComponentExample title="Excluded dates" id="excluded-dates" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Specify which dates to disable by using <code>excluded-dates="01/24/2020, 05/25/2020"</code> attribute
        br
        | Separate dates with a comma
    template(#example)
      div(style="max-width: 14rem;")
        chi-label(for='example__datepicker_date_excluded_dates') Date
        chi-date-picker(id="example__datepicker_date_excluded_dates", value="01/05/2024", excluded-dates="01/24/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024")
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
        webcomponent: `<chi-label for="example__datepicker_date_excluded_dates">Date</chi-label>
<chi-date-picker id="example__datepicker_date_excluded_dates" value="01/05/2024" excluded-dates="01/24/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024"><\/chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class ExcludedDates extends Vue { }
</script>
