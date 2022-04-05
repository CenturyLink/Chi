<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the <code>-danger</code> state to provide feedback to users when an input fails to validate. 
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    fieldset(slot="example")
      legend.chi-label Select an option
        abbr.chi-label__required(title="Required field") *
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-er', :id="`unique-id-er${item}`" :required="item === 1")
            label(:for="`unique-id-er${item}`") Option {{ item }}
      .chi-label.-status.-danger
        | Please select an option.
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
      <input class="chi-picker__input" type="radio" name="unique-name-er" id="unique-id-er1" required>
      <label for="unique-id-er1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-er" id="unique-id-er2">
      <label for="unique-id-er2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-er" id="unique-id-er3">
      <label for="unique-id-er3">Option 3</label>
    </div>
  </div>
  <div class="chi-label -status -danger">Please select an option.</div>
</fieldset>`
      }
    };
  }
})
export default class Error extends Vue {}
</script>
