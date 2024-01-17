<template lang="pug">
  <ComponentExample titleSize="h4" title="Active" id="active" :tabs="exampleTabs">
    chi-time(value="14:00" slot="example")
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
        webcomponent: `<chi-time value="14:00"></chi-time>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TimeActive extends Vue {}
</script>
