<template lang="pug">
<ComponentExample title="Required" id="required" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use the <code>required</code> boolean attribute to indicate which picker groups must be completed before submitting a form.
  template(#example)
    fieldset
      legend.chi-label Select an option
        abbr.chi-label__required(aria-label="Required field") *
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__required', :id="`example__required_${item}`" :required="item === 1")
            label(:for="`example__required_${item}`") Option {{ item }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Required extends Vue {
  pickers = [1, 2, 3]
  exampleTabs = [
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
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: ``,
  }
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.pickers.forEach((option: number) => {
      const required = option === 1 ? ' required' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__required" id="example__required_${option}"${required}>
      <label for="example__required_${option}">Option ${option}</label>`;
    });

    this.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
