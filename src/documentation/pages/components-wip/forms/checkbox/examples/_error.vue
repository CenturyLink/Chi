<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>-danger</code> state to provide feedback to users when an input fails to validate.
        | To meet accessibility requirements, danger inputs must include an error message explaining the
        | failure and/or how to correct it.
    template(#example)
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-er1")
          label(for="checkbox-er1" class="chi-checkbox__label -danger")
            | I accept the Terms of Service
            abbr.chi-label__required(aria-label="Required field") *
        .chi-label.-status.-danger Please accept the terms of service
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
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-er1">
    <label class="chi-checkbox__label -danger" for="checkbox-er1">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
  <div class="chi-label -status -danger">Please accept the terms of service</div>
</div>`,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
