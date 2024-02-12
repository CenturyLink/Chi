<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>required</code> boolean attribute to indicate which checkboxes must be completed before submitting a form.
        | This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.
    template(#example)
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-re1")
          label(for="checkbox-re1" class="chi-checkbox__label")
            | I accept the Terms of Service
            abbr.chi-label__required(aria-label="Required field") *
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
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-re1" required>
    <label class="chi-checkbox__label" for="checkbox-re1">
      I accept the Terms of Service
      <abbr class="chi-label__required" aria-label="Required field">*</abbr>
    </label>
  </div>
</div>`,
      },
    };
  },
})
export default class Required extends Vue {}
</script>
