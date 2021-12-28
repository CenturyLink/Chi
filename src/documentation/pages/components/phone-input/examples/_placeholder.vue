<template lang="pug">
  <ComponentExample title="Placeholder" id="placeholder" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use the <code>placeholder</code> attribute to provide users with an example of the type of data
      | that can be entered into a Phone input. <strong>Note:</strong> Placeholder text is not persistent and visually
      | disappears when a value is entered.
    <Wrapper slot="example">
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-placeholder") Phone Number
        chi-phone-input(id="phone-input-placeholder" placeholder="e.g. (123) 456-7890")
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
        webcomponent: `<chi-label for="phone-input-placeholder">Phone Number</chi-label>
<chi-phone-input id="phone-input-placeholder" placeholder="e.g. (123) 456-7890"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Placeholder extends Vue {}
</script>
