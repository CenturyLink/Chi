<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>required</code> boolean attribute to indicate which inputs must be completed before submitting a form.
      | To render a required input, apply the <code>required</code> attribute to the input. It is also
      | encouraged but not mandatory to apply a <code>required</code> attribute to the corresponding label of the input which
      | will automatically render a red asterisk. <strong>Note:</strong> For HTML Blueprint implementations,
      | the <code>required</code> attribute is not supported on the label. Please use the alternate method
      | specified below for rendering a red asterisk within the label. 
    .chi-form__item(slot="example")
      chi-label(for="unique-id-re1" required) Label
      chi-number-input#unique-id-re1(required) 
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
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
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="unique-id-re1" required>Label</chi-label>
<chi-number-input id="unique-id-re1" required></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-re1">
    Label
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </label>
  <div class="chi-number-input">
    <input id="unique-id-re1" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-re1'));<\/script>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
