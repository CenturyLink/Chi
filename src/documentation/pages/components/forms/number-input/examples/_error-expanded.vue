<template lang="pug">
  <ComponentExample title="Error" id="error-expanded" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>danger</code> to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    .chi-form__item(slot="example")
      chi-label(for="unique-id-eer1") Quantity
      chi-number-input#unique-id-eer1(inputstyle="danger", expanded)
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
        webcomponent: `<chi-label for="unique-id-eer1">Quantity</chi-label>
<chi-number-input expanded id="unique-id-eer1" inputstyle="danger"></chi-number-input>
<div class="chi-label -status -danger">Please enter a quantity.</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded">Label</label>
  <div class="chi-number-input -expanded">
    <input id="input-example-expanded" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('input-example-expanded'));<\/script>`
      }
    };
  }
})
export default class ErrorExpanded extends Vue {}
</script>
