<template lang="pug">
  <ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
    p.-text(slot="example-description") Use <code>optional</code> to help emphasize a picker group that is not required and can be skipped.
    fieldset(slot="example")
      legend.chi-label Select an option
        abbr.chi-label__optional(title="Optional field") (optional)
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__optional', :id="`example__optional_${item}`")
            label(:for="`example__optional_${item}`") Option {{ item }}
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
export default class Optional extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.$data.pickers.forEach((option: number) => {
      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__optional" id="example__optional_${option}">
      <label for="example__optional_${option}">Option ${option}</label>`;
    });

    this.$data.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
