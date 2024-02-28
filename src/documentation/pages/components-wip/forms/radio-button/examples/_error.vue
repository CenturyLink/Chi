<template lang="pug">
<ComponentExample title="Error" id="error" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>-danger</code> state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed.
      | To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.
  template(#example)
    fieldset
      legend(class="chi-label") Select an option
        abbr(class="chi-label__required" aria-label="Required field") *
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input -danger" type="radio" name="radios" id="radio-er1" required)
          label(class="chi-radio__label" for="radio-er1") Option 1
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input -danger" type="radio" name="radios" id="radio-er2" required)
          label(class="chi-radio__label" for="radio-er2") Option 2
      .chi-label.-status.-danger Please select an option
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="radio-er1" required>
      <label class="chi-radio__label" for="radio-er1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="radio-er2">
      <label class="chi-radio__label" for="radio-er2">Option 2</label>
    </div>
  </div>
  <div class="chi-label -status -danger">Please select an option</div>
</fieldset>`,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
