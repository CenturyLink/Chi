<template lang="pug">
  <ComponentExample titleSize="h4" title="24-hour format" id="time-24hour" :tabs="exampleTabs">
    chi-time(format='24hr' slot="example")
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
          label: 'Web Component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-time format="24hr"></chi-time>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TimeTwentyFourHourFormat extends Vue {}
</script>
