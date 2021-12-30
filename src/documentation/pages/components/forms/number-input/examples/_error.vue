<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>danger</code> to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    .chi-form__item(slot="example")
      chi-label(for="unique-id-er1") Quantity
      chi-number-input#unique-id-er1(inputstyle="danger")
      .chi-label.-status.-danger Please enter a quantity.
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
        webcomponent: `<chi-label for="unique-id-er1">Quantity</chi-label>
<chi-number-input id="unique-id-er1" inputstyle="danger"></chi-number-input>
<div class="chi-label -status -danger">Please enter a quantity.</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-er1">Quantity</label>
  <div class="chi-number-input">
    <input id="unique-id-er1" type="number" class="chi-input -danger" value="0" aria-label="Quantity">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status -danger">Please enter a quantity.</div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-er1'));<\/script>`
      }
    };
  }
})
export default class Error extends Vue {}
</script>
