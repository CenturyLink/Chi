<template lang="pug">
  <ComponentExample titleSize="h4" title="Minutes step" id="minutes-step" :tabs="exampleTabs">
    .chi-form__item(style="max-width: 14rem;" slot="example")
      chi-label(for="example__minutes-step") Label
      chi-time-picker(id="example__minutes-step" minutes-step="20")
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
<chi-label for="example__minutes-step">Label</chi-label>
<chi-time-picker id="example__minutes-step" minutes-step></chi-time-picker>

<!-- Minutes step with custom value of 20 minutes -->
<chi-label for="example__minutes-step">Label</chi-label>
<chi-time-picker id="example__minutes-step" minutes-step="20"></chi-time-picker>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TwentyFourHourFormat extends Vue {}
</script>
