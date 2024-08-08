<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted
      | with the form and can not receive any browsing events such as mouse clicks or focus.
  template(#example)
    fieldset
      legend(class="chi-label") Select an option
      chi-radio-button(id="example__disabled1" label="Option 1" name="radios"  disabled)
      chi-radio-button(id="example__disabled2" label="Option 2" name="radios")
      chi-radio-button(id="example__disabled3" label="Option 3" name="radios")
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          disabled: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <chi-radio-button id="example__disabled1" label="Option 1" name="radios" disabled></chi-radio-button>
  <chi-radio-button id="example__disabled2" label="Option 2" name="radios"></chi-radio-button>
  <chi-radio-button id="example__disabled3" label="Option 3" name="radios"></chi-radio-button>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled1" disabled>
      <label class="chi-radio__label" for="example__disabled1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled2">
      <label class="chi-radio__label" for="example__disabled2">Option 2</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled3">
      <label class="chi-radio__label" for="example__disabled3">Option 3</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
