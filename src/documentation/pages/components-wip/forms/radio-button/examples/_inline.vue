<template lang="pug">
  <ComponentExample title="Inline" id="inline" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Apply <code>-inline</code> to display two or more radio buttons in one row.
    template(#example)
      fieldset
        legend(class="chi-label") Select an option
        .chi-form__item.-inline
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-in1")
            label(class="chi-radio__label" for="radio-in1") Option 1
        .chi-form__item.-inline
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-in2")
            label(class="chi-radio__label" for="radio-in2") Option 2
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
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-in1">
      <label class="chi-radio__label" for="radio-in1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-in2" disabled>
      <label class="chi-radio__label" for="radio-in2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Inline extends Vue {}
</script>
