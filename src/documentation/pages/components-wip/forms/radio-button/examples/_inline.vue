<template lang="pug">
<ComponentExample title="Inline" id="inline" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Apply <code>-inline</code> to display two or more radio buttons in one row.
  template(#example)
    fieldset
      legend.chi-label Select an option
      .chi-form__item.-inline
        chi-radio-button(id="example__inline_opt_1" label="Option 1" name="example__inline-radios")
      .chi-form__item.-inline
        chi-radio-button(id="example__inline_opt_2" label="Option 2" name="example__inline-radios")
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
  <div class="chi-form__item -inline">
    <chi-radio-button id="example__inline_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item -inline">
    <chi-radio-button id="example__inline_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline_opt_1">
      <label class="chi-radio__label" for="example__inline_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline_opt_2" disabled>
      <label class="chi-radio__label" for="example__inline_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Inline extends Vue {}
</script>
