<template lang="pug">
  <ComponentExample titleSize="h4" title="Minutes step" id="time-minutes-step" :tabs="exampleTabs">
    chi-time(minutes-step="20" slot="example")
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
        webcomponent: `<!-- Minutes step with default value (15 minutes) -->
<chi-time minutes-step></chi-time>
<!-- Minutes step with custom value of 20 minutes -->
<chi-time minutes-step="20"></chi-time>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TimeStep extends Vue {}
</script>
