<template lang="pug">
<ComponentExample title="Error" id="error" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>danger</code> state to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__danger" required) Describe the issue
          chi-textarea(id="example__danger" state="danger" required)
          div.chi-label.-status.-danger Please describe the issue
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__danger" required>Describe the issue</chi-label>
  <chi-textarea id="example__danger" state="danger" required></chi-textarea>
  <div class="chi-label -status -danger">Please describe the issue</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__danger">
    Describe the issue
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <textarea class="chi-input -danger" id="example__danger" required></textarea>
  <div class="chi-label -status -danger">Please describe the issue</div>
</div>`,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
