<template lang="pug">
  <ComponentExample title="Alignment" id="alignment-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text Picker group text is centered by default. However, this behavior can change
      | by applying the modifiers <code>-align--left</code> or <code>-align--right</code>.
    template(#example)
      fieldset
        legend.chi-label Select an option
        .chi-picker-group.-fluid
          .chi-picker-group__content
            template(v-for="item in pickers")
              input.chi-picker__input(type='radio', name='example__alignment', :id="`example__alignment_${item}`" :checked="item === 1")
              label(:class="[(item === 1 ? '-align--left' : ''), (item === 3 ? '-align--right' : '')]" :for="`example__alignment_${item}`") Option {{ item }}
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class AlignmentLumenCenturyLink extends Vue {
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
      const alignment = option === 1 ? ' class="-align--left"' : option === 3 ? ' class="-align--right"' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__alignment" id="example__alignment_${option}"${checked}>
      <label${alignment} for="example__alignment_${option}">Option ${option}</label$>`;
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
