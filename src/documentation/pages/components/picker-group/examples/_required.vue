<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the <code>required</code> boolean attribute to indicate which picker groups must be completed before submitting a form.
    fieldset(slot="example")
      legend.chi-label Select an option
        abbr.chi-label__required(title="Required field") *
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-re', :id="`unique-id-re${item}`" :required="item === 1")
            label(:for="`unique-id-re${item}`") Option {{ item }}
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
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-re" id="unique-id-re1" required>
      <label for="unique-id-re1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-re" id="unique-id-re2">
      <label for="unique-id-re2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-re" id="unique-id-re3">
      <label for="unique-id-re3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
