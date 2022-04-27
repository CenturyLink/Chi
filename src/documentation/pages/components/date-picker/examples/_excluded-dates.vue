<template lang="pug">
  <ComponentExample title="Excluded dates" id="example__excluded_dates" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Specify which dates to disable by using <code>excluded-dates="02/24/2020, 05/25/2020"</code> attribute
      br
      | Separate dates with a comma
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__date_excluded_dates') Date
      chi-date-picker(id="example__date_excluded_dates", excluded-dates="02/24/2020, 05/25/2020, 07/03/2020, 09/12/2020, 12/12/2020")
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

declare const chi: any;

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
        webcomponent: `<chi-label for="example__date_excluded_dates">Date</chi-label>
<chi-date-picker id="example__date_excluded_dates" excluded-dates="02/24/2020, 05/25/2020, 07/03/2020, 09/12/2020, 12/12/2020"><\/chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class ExcludedDates extends Vue {
 
}
</script>
