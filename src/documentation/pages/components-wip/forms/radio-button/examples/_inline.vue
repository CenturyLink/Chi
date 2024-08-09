<template lang="pug">
<ComponentExample title="Inline" id="inline" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Apply <code>-inline</code> to display two or more radio buttons in one row.
  template(#example)
    fieldset.-d--flex
      legend(class="chi-label") Select an option
      chi-radio-button(id="example__inline1" label="Option 1" name="radios")
      chi-radio-button(id="example__inline2" label="Option 2" name="radios" class="-ml--2")
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
        webcomponent: `<fieldset class="-d--flex">
  <legend class="chi-label">Select an option</legend>
  <chi-radio-button id="example__inline1" label="Option 1" name="radios"></chi-radio-button>
  <chi-radio-button id="example__inline2" label="Option 2" name="radios" class="-ml--2"></chi-radio-button>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline1">
      <label class="chi-radio__label" for="example__inline1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline2" disabled>
      <label class="chi-radio__label" for="example__inline2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Inline extends Vue {}
</script>
