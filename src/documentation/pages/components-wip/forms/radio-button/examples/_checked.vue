<template lang="pug">
<ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>checked</code> boolean attribute to set the default value of a radio button input to true.
  template(#example)
    fieldset
      legend(class="chi-label") Select an option
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-ch1" checked)
          label(class="chi-radio__label" for="radio-ch1") Option 1
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-ch2")
          label(class="chi-radio__label" for="radio-ch2") Option 2
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
      <input class="chi-radio__input" type="radio" name="radios" id="radio-ch1" checked>
      <label class="chi-radio__label" for="radio-ch1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-ch2">
      <label class="chi-radio__label" for="radio-ch2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Checked extends Vue {}
</script>
