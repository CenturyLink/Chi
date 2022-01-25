<template lang="pug">
  <ComponentExample title="Default Country" id="default-country" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>default-country</code> attribute to set a default two-letter country code. Defaults to "US".
    div(style="max-width: 18rem;" slot="example")
      chi-label(for="phone-input-default-country") Phone Number
      chi-phone-input(id="phone-input-default-country" default-country="US")
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
        webcomponent: `<chi-label for="phone-input-default-country">Phone Number</chi-label>
<chi-phone-input id="phone-input-default-country" default-country="US"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class DefaultCountry extends Vue {}
</script>
