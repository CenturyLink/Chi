<template lang="pug">
  <ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use <code>optional</code> to help emphasize a group of radio button options are not required and can be skipped.
    template(#example)
      fieldset
        legend(class="chi-label") Select an option
          abbr(class="chi-label__optional" aria-label="Optional field") (optional)
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-op1")
            label(class="chi-radio__label" for="radio-op1") Option 1
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-op2")
            label(class="chi-radio__label" for="radio-op2") Option 2
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
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-op1">
      <label class="chi-radio__label" for="radio-op1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-op2">
      <label class="chi-radio__label" for="radio-op2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Optional extends Vue {}
</script>
