<template lang="pug">
<ComponentExample title="Error" id="error-expanded" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use <code>danger</code> to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
  template(#example)
    .chi-form__item
      chi-label(for="example__expanded-error") Quantity
      chi-number-input#example__expanded-error(inputstyle="danger", expanded, helper-message="Please enter a quantity")
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
        webcomponent: `<chi-label for="example__expanded-error">Quantity</chi-label>
<chi-number-input expanded id="example__expanded-error" inputstyle="danger" helper-message="Please enter a quantity"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-error">Label</label>
  <div class="chi-number-input -expanded">
    <input id="example__expanded-error" class="chi-input" type="number" value="0" aria-label="Input Label">
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
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please enter a quantity
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__expanded-error'));<\/script>`,
      },
    };
  },
})
export default class ErrorExpanded extends Vue {}
</script>
