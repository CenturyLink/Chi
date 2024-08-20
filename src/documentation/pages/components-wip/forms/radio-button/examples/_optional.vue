<template lang="pug">
<ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use <code>optional</code> to help emphasize a group of radio button options are not required and can be skipped.
  template(#example)
    fieldset
      legend.chi-label
        | Select an option
        abbr.chi-label__optional(aria-label="Optional field") (optional)
      .chi-form__item.-mb--1  
        chi-radio-button(id="example__optional_opt_1" label="Option 1" name="example__optional-radios")
      .chi-form__item
        chi-radio-button(id="example__optional_opt_2" label="Option 2" name="example__optional-radios")
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
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__optional_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__optional_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__optional_opt_1">
      <label class="chi-radio__label" for="example__optional_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__optional_opt_2">
      <label class="chi-radio__label" for="example__optional_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Optional extends Vue {}
</script>
