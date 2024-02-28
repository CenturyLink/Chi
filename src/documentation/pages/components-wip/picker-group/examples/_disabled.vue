<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use the <code>disabled</code> boolean attribute to prevent users from interacting with a picker group input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
  template(#example)
    fieldset
      legend.chi-label Select an option
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__disabled', :id="`example__disabled_${item}`", :disabled="item === 3")
            label(:for="`example__disabled_${item}`") Option {{ item }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Disabled extends Vue {
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
      const disabled = option === 3 ? ' disabled' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__disabled" id="example__disabled_${option}"${disabled}>
      <label for="example__disabled_${option}">Option ${option}</label>`;
    });

    this.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
