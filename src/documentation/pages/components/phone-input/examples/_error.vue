<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>danger</code> state to provide feedback to users when phone number fails to validate.
      | To meet accessibility requirements, phone input must include an error message explaining the
      | failure and/or how to correct it.
    <Wrapper slot="example">
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-error") Phone Number
        chi-phone-input(id="phone-input-error" state="danger")
        div.chi-label.-status.-danger Invalid phone number
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
        webcomponent: `<chi-label for="phone-input-error">Phone Number</chi-label>
<chi-phone-input id="phone-input-error" state="danger"></chi-phone-input>
<div class="chi-label -status -danger">
  Invalid phone number
</div>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Error extends Vue {}
</script>
