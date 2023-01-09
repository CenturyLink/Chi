<template lang="pug">
  <ComponentExample title="Alignment" id="alignment-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Picker group text is centered by default. However, this behavior can change 
      | by applying the modifiers <code>-align--left</code> or <code>-align--right</code>.
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group.-fluid
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__alignment', :id="`example__alignment_${item}`" :checked="item === 1")
            label(:class="[(item === 1 ? '-align--left' : ''), (item === 3 ? '-align--right' : '')]" :for="`example__alignment_${item}`") Option {{ item }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      pickers: [1, 2, 3],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  }
})
export default class AlignmentLumenCenturyLink extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.$data.pickers.forEach((option: number) => {
      const checked = option === 1 ? ' checked' : '';
      const alignment =
        option === 1
          ? ' class="-align--left"'
          : option === 3
          ? ' class="-align--right"'
          : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__alignment" id="example__alignment_${option}"${checked}>
      <label${alignment} for="example__alignment_${option}">Option ${option}</label$>`;
    });

    this.$data.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
