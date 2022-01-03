<template lang="pug">
  <ComponentExample titleSize="h4" title="Error" id="error" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use the <code>-danger</code> state to provide feedback to users when an input fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    fieldset(slot="example")
      legend.chi-label
        | Select options
        abbr.chi-label__required(title="Required field") *
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mer`, id=`unique-id-mer${i}`, required=(i === 1))
          label(for=`unique-id-mer${i}`)
            = 'Option ' + `${i}`
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
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mer" type="checkbox" id="unique-id-mer1" required>
    <label for="unique-id-mer1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mer" type="checkbox" id="unique-id-mer2">
    <label for="unique-id-mer2">Option 2</label>
  </div>
  <div class="chi-label -status -danger">Please select an option.</div>
</fieldset>`
      }
    };
  }
})
export default class Error extends Vue {}
</script>
