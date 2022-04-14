<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the <code>required</code> boolean attribute to indicate which picker groups must be completed before submitting a form.
    fieldset(slot="example")
      legend.chi-label Select an option
        abbr.chi-label__required(title="Required field") *
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__required', :id="`example__required_${item}`" :required="item === 1")
            label(:for="`example__required_${item}`") Option {{ item }}
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
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  }
})
export default class Required extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.$data.pickers.forEach((option: number) => {
      const required = option === 1 ? ' required' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__required" id="example__required_${option}"${required}>
      <label for="example__required_${option}">Option ${option}</label>`;
    });

    this.$data.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
