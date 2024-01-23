<template lang="pug">
  <ComponentExample titleSize="h4" title="Seconds step" id="time-seconds-step" :tabs="exampleTabs">
    chi-time(seconds-step="30" display-seconds slot="example")
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
        webcomponent: `<!-- Seconds step with default values (10 seconds) -->
<chi-time seconds-step display-seconds></chi-time>
<!-- Seconds step with custom values of 30 seconds -->
<chi-time seconds-step="30" display-seconds></chi-time>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TimeStep extends Vue {}
</script>
