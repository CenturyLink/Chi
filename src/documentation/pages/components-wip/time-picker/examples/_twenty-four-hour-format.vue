<template lang="pug">
  <ComponentExample titleSize="h4" title="24-hour format" id="24hour" :tabs="exampleTabs">
    .chi-form__item(style="max-width: 14rem;" slot="example")
      chi-label(for="example__24hour-format") Label
      chi-time-picker(id="example__24hour-format" format="24hr")
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
        webcomponent: `<chi-label for="example__24hour-format">Label</chi-label>
<chi-time-picker id="example__24hour-format" format="24hr"></chi-time-picker>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class TwentyFourHourFormat extends Vue {}
</script>