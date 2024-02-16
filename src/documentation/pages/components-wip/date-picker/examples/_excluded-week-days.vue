<template lang="pug">
<ComponentExample title="Excluded week days" id="excluded-week-days" :tabs="exampleTabs">
  template(#example-description)
    p.-text Specify which week days to disable by using <code>excluded-weekdays="0, 6"</code> attribute
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__datepicker_date_excluded_weekdays') Date
      chi-date-picker(id="example__datepicker_date_excluded_weekdays", excluded-weekdays="0, 6")
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
        webcomponent: `<chi-label for="example__datepicker_date_excluded_weekdays">Date</chi-label>
<chi-date-picker id="example__datepicker_date_excluded_weekdays" excluded-weekdays="0, 6"></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class ExcludedWeekDays extends Vue { }
</script>
