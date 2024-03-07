<template lang="pug">
<ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use <code>optional</code> to help emphasize a picker group that is not required and can be skipped.
  template(#example)
    fieldset
      legend.chi-label Select an option
        abbr.chi-label__optional(aria-label="Optional field") (optional)
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__optional', :id="`example__optional_${item}`")
            label(:for="`example__optional_${item}`") Option {{ item }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Optional extends Vue {
  pickers = [1, 2, 3];
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
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: ``,
  };
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.pickers.forEach((option: number) => {
      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__optional" id="example__optional_${option}">
      <label for="example__optional_${option}">Option ${option}</label>`;
    });

    this.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
