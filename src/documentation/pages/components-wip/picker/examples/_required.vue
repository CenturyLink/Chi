<template lang="pug">
<ComponentExample titleSize="h4" title="Required" id="required" :tabs="exampleTabs" padding="-p--4">
  template(#example-description)
    p.-text
      | Use the <code>required</code> boolean attribute to indicate which pickers must be completed before submitting a form.
  template(#example)
    fieldset
      legend.chi-label
        | Select options
        abbr.chi-label__required(aria-label="Required field") *
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mre`, id=`unique-id-mre${i}`, required=(i === 1))
          label(for=`unique-id-mre${i}`)
            = 'Option ' + `${i}`
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
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre1" required>
    <label for="unique-id-mre1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre2">
    <label for="unique-id-mre2">Option 2</label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Required extends Vue {}
</script>
