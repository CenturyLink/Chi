<template lang="pug">
  <ComponentExample titleSize="h4" title="Seconds" id="seconds" :tabs="exampleTabs">
    .chi-form__item(style="max-width: 14rem;" slot="example")
      chi-label(for="time-picker-seconds") Label
      chi-time-picker#time-picker-seconds(display-seconds)
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
        webcomponent: `<chi-label for="time-picker-seconds">Label</chi-label>
<chi-time-picker id="time-picker-seconds" display-seconds></chi-time-picker>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Seconds extends Vue {}
</script>