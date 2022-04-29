<template lang="pug">
  <ComponentExample title="Date Time" id="date-picker-date-time" :tabs="exampleTabs">
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__date_time') Date Time
      chi-date-picker(id="example__date_time" mode="datetime")
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
        webcomponent: `<chi-label for="example__date_time">Date</chi-label>
<chi-date-picker id="example__date_time" mode="datetime"></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DatePickerDateTime extends Vue {}
</script>
