<template lang="pug">
<ComponentExample title="Disable Fluidity" id="disabled-fluidity" :tabs="exampleTabs">
  template(#example-description)
    p.-text To disable the fluidity of a specific picker in a fluid picker group,
      | apply the class <code>-no-fluid</code> to the picker.
  template(#example)
    fieldset
      legend.chi-label Select an option
      .chi-picker-group.-fluid
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__disabled_fluidity', :id="`example__disabled_fluidity_${item}`", :checked="item === 1")
            label(:class="item === 2 ? '-no-fluid' : ''" :for="`example__disabled_fluidity_${item}`") Option {{ item }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class DisableFluidity extends Vue {
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
      const noFluid = option === 2 ? ' -no-fluid' : '';

      pickerInputs += `
      <input class="chi-picker__input${noFluid}" type="radio" name="example__disabled_fluidity" id="example__disabled_fluidity_${option}"${checked}>
      <label for="example__disabled_fluidity_${option}">Option ${option}</label>`;
    });

    this.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
