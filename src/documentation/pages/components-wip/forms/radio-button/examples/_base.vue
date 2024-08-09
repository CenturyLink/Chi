<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example)
    fieldset
      legend(class="chi-label") Select an option
      chi-radio-button(id="example__base1" label="Option 1" name="radios")
      chi-radio-button(id="example__base2" label="Option 2" name="radios")
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
  <chi-radio-button id="example__base1" label="Option 1" name="radios"></chi-radio-button>
  <chi-radio-button id="example__base2" label="Option 2" name="radios"></chi-radio-button>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__base1">
      <label class="chi-radio__label" for="example__base1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__base2">
      <label class="chi-radio__label" for="example__base2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
