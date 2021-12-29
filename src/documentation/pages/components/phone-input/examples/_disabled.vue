<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with the phone input.
      | Disabled phone inputs can not receive any browsing events such as prefix selection, mouse clicks or focus.
    <Wrapper slot="example">
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-disabled") Phone Number
        chi-phone-input(id="phone-input-disabled" disabled="true")
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
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
        webcomponent: `<chi-label for="phone-input-disabled">Phone Number</chi-label>
<chi-phone-input id="phone-input-disabled" disabled></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
