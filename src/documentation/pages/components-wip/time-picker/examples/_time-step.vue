<template lang="pug">
  <ComponentExample titleSize="h4" title="Step" id="step" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Minutes and seconds can be shown in steps of 5, 10, 15, 20, or 30 minutes or seconds.
      | Use the property <code>minutes-step</code> to define the step for the minutes (defaults to 15 min)
      | and the property <code>seconds-step</code> to define the step for the minutes (defaults to 10 seconds).
    chi-time(minutes-step="20" seconds-step="30" display-seconds slot="example")

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
        webcomponent: `<!-- Steps with default values of 15 min and 10 seconds -->
<chi-time minutes-step seconds-step display-seconds></chi-time>
<!-- Steps with custom values of 120 min and 30 seconds -->
<chi-time minutes-step="20" seconds-step="30" display-seconds></chi-time>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TimeStep extends Vue {}
</script>
