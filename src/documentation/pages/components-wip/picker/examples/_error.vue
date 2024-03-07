<template lang="pug">
<ComponentExample titleSize="h4" title="Error" id="error" :tabs="exampleTabs" padding="-p--4">
  template(#example-description)
    p.-text
      | Use the <code>-danger</code> state to provide feedback to users when an input fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
  template(#example)
    fieldset
      legend.chi-label
        | Select options
        abbr.chi-label__required(aria-label="Required field") *
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mer`, id=`unique-id-mer${i}`, required=(i === 1))
          label(for=`unique-id-mer${i}`)
            = 'Option ' + `${i}`
      .chi-label.-status.-danger
        | Please select an option
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
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
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mer" type="checkbox" id="unique-id-mer1" required>
    <label for="unique-id-mer1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mer" type="checkbox" id="unique-id-mer2">
    <label for="unique-id-mer2">Option 2</label>
  </div>
  <div class="chi-label -status -danger">Please select an option</div>
</fieldset>`,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
