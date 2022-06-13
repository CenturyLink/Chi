<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with the phone input.
      | Disabled phone inputs can not receive any browsing events such as prefix selection, mouse clicks or focus.
    div(style="max-width: 18rem;" slot="example")
      chi-label(for="phone-input-disabled") Phone Number
      chi-phone-input(id="phone-input-disabled" disabled="true")
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
          label: 'Web component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="phone-input-disabled">Phone Number</chi-label>
<chi-phone-input id="phone-input-disabled" disabled></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
