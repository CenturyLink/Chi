<template lang="pug">
  <ComponentExample titleSize="h4" title="Date and Time" id="example__calendar_date_time" :tabs="exampleTabs">
    .-d--flex(style="width: 28.75rem;" slot="example")
      chi-date
      chi-time
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
        webcomponent: `<chi-date></chi-date>
<chi-time></chi-time>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class CalendarDateTime extends Vue {}
</script>
