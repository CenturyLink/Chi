<template lang="pug">
  <ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
    template(#example-description)
      p.-text Use the <code>checked</code> boolean attribute to set the default value of a picker group input to true.
    template(#example)
      fieldset
        legend.chi-label Select an option
        .chi-picker-group
          .chi-picker-group__content
            template(v-for="item in pickers")
              input.chi-picker__input(type='radio', name='example__checked', :id="`example__checked_${item}`", :checked="item === 1")
              label(:for="`example__checked_${item}`") Option {{ item }}
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Checked extends Vue {
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
      const checked = option === 1 ? ' checked' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__checked" id="example__checked_${option}"${checked}>
      <label for="example__checked_${option}">Option ${option}</label>`;
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
