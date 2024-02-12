<template lang="pug">
  <ComponentExample title="Error" id="error-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>-danger</code> state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed.
        | To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.
    template(#example)
      .chi-form__item(style="max-width:20rem")
        label(class="chi-label" for="example-er1") Label
          abbr(class="chi-label__required" aria-label="Required field") *
        select(class="chi-select -danger" id="example-er1" required)
          option(value="") - Select -
          option Option 1
          option Option 2
          option Option 3
        .chi-label.-status.-danger Please select an option
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
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example-er1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select -danger" id="example-er1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status -danger">Please select an option</div>
</div>`,
      },
    };
  },
})
export default class ErrorLumenCenturyLink extends Vue { }
</script>
