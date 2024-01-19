<template lang="pug">
  <ComponentExample title="Date Time with stepped minutes" id="date-picker-date-time-stepped" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Minutes can be shown in steps of 5, 10, 15, 20, or 30 minutes or seconds.
      | Use the property <code>minutes-step="value"</code> to define the step for the minutes (defaults to 15 min) if no value is provided.
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__datepicker_date_time_stepped') Date Time
      chi-date-picker(id="example__datepicker_date_time_stepped" mode="datetime" minutes-step="5")
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
        webcomponent: `<chi-label for="example__datepicker_date_time_stepped">Date</chi-label>
<chi-date-picker id="example__datepicker_date_time_stepped" mode="datetime" minutes-step="5"></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DatePickerDateTimeStepped extends Vue {}
</script>
