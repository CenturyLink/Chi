<template lang="pug">
  <ComponentExample titleSize="h4" title="Seconds step" id="seconds-step" :tabs="exampleTabs">
    .chi-form__item(style="max-width: 14rem;" slot="example")
      chi-label(for="example__seconds-step") Label
      chi-time-picker(id="example__seconds-step" seconds-step="30" display-seconds)
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
        webcomponent: `<!-- Seconds step with default value (10 seconds) -->
<chi-label for="example__seconds-step">Label</chi-label>
<chi-time-picker id="example__seconds-step" seconds-step display-seconds></chi-time-picker>

<!-- Seconds step with custom value of 30 seconds -->
<chi-label for="example__seconds-step">Label</chi-label>
<chi-time-picker id="example__seconds-step" seconds-step="30" display-seconds></chi-time-picker>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TwentyFourHourFormat extends Vue {}
</script>
