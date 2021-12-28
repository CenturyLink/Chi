<template lang="pug">
  <ComponentExample title="Value" id="value" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>value</code> attribute to set a default phone number.
    <Wrapper slot="example">
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-value") Phone Number
        chi-phone-input(id="phone-input-value" default-country="US" value="+1-6045551212")
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
        webcomponent: `<chi-label for="phone-input-value">Phone Number</chi-label>
<chi-phone-input id="phone-input-value" default-country="US" value="+1-6045551212"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Value extends Vue {}
</script>
