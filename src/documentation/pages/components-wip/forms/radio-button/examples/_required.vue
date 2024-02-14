<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>required</code> boolean attribute to indicate which radio buttons must be completed before submitting a form.
    template(#example)
      fieldset
        legend(class="chi-label") Select an option
          abbr(class="chi-label__required" aria-label="Required field") *
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-re1" required)
            label(class="chi-radio__label" for="radio-re1") Option 1
        .chi-form__item
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radios" id="radio-re2" required)
            label(class="chi-radio__label" for="radio-re2") Option 2
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
      <input class="chi-radio__input" type="radio" name="radios" id="radio-re1" required>
      <label class="chi-radio__label" for="radio-re1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-re2">
      <label class="chi-radio__label" for="radio-re2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Required extends Vue {}
</script>
