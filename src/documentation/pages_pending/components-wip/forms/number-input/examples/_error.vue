<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | Use <code>danger</code> to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    template(#example)
      .chi-form__item
        chi-label(for="unique-id-er1") Quantity
        chi-number-input#unique-id-er1(inputstyle="danger" helper-message="Please enter a quantity.")
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="unique-id-er1">Quantity</chi-label>
<chi-number-input id="unique-id-er1" inputstyle="danger" helper-message="Please enter a quantity."></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-er1">Quantity</label>
  <div class="chi-number-input">
    <input id="unique-id-er1" type="number" class="chi-input -danger" value="0" aria-label="Quantity">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status -danger">Please enter a quantity.</div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-er1'));<\/script>`,
      },
    };
  },
})
export default class Error extends Vue { }
</script>
