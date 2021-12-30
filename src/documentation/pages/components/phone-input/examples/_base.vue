<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    div(style="max-width: 18rem;" slot="example")
      chi-label(for="phone-input-base") Phone Number
      chi-phone-input(id="phone-input-base")
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
      string: 'String',
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
        webcomponent: `<chi-label for="phone-input-base">Phone Number</chi-label>
<chi-phone-input id="phone-input-base"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Base extends Vue {}
</script>
