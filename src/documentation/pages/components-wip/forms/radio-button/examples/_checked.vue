<template lang="pug">
<ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>checked</code> boolean attribute to set the default value of a radio button input to true.
  template(#example)
    fieldset
      legend(class="chi-label") Select an option
      div.chi-form__item
        chi-radio-button(id="example__checked_opt_1" label="Option 1" name="radios" checked)
      div.chi-form__item
        chi-radio-button(id="example__checked_opt_2" label="Option 2" name="radios")
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
  <div class="chi-form__item>
    <chi-radio-button id="example__checked_opt_1" label="Option 1" name="radios" checked></chi-radio-button>
  </div>
  <div class="chi-form__item>
    <chi-radio-button id="example__checked_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__checked_opt_1" checked>
      <label class="chi-radio__label" for="example__checked_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__checked_opt_2">
      <label class="chi-radio__label" for="example__checked_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Checked extends Vue {}
</script>
