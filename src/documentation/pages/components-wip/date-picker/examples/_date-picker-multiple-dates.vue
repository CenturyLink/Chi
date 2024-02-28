<template lang="pug">
<ComponentExample title="Multiple dates" id="date-picker-multiple-dates" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use the attribute <code>multiple</code> to allow the user to select multiple dates.
  template(#example)
    div(style="max-width: 14rem;")
      chi-label(for='example__datepicker_date_multiple') Date
      chi-date-picker(id='example__datepicker_date_multiple' multiple)
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
        webcomponent: `<chi-label for="example__datepicker_multiple_dates">Date</chi-label>
<chi-date-picker id="example__datepicker_multiple_dates" multiple></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DatePickerMultipleDates extends Vue {}
</script>
