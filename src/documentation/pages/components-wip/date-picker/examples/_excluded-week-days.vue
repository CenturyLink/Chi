<template lang="pug">
  <ComponentExample title="Excluded week days" id="excluded-week-days" :tabs="exampleTabs">
    p.-text(slot="example-description") Specify which week days to disable by using <code>excluded-weekdays="0, 6"</code> attribute
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__datepicker_date_excluded_weekdays') Date
      chi-date-picker(id="example__datepicker_date_excluded_weekdays", excluded-weekdays="0, 6")
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
          label: 'Web component',
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
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
export default class ExcludedWeekDays extends Vue {}
</script>
