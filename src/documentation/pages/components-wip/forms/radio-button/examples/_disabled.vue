<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted
        | with the form and can not receive any browsing events such as mouse clicks or focus.
    template(#example)
      fieldset
        legend(class="chi-label") Select an option
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-di1" disabled)
            label(class="chi-radio__label" for="radio-di1") Option 1
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-di2")
            label(class="chi-radio__label" for="radio-di2") Option 2
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-di3")
            label(class="chi-radio__label" for="radio-di3") Option 3
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
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-di1" disabled>
      <label class="chi-radio__label" for="radio-di1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-di2">
      <label class="chi-radio__label" for="radio-di2">Option 2</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-di3">
      <label class="chi-radio__label" for="radio-di3">Option 3</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
