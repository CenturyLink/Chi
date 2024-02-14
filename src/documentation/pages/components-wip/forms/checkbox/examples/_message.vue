<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.
    template(#example)
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-me1")
          label(for="checkbox-me1" class="chi-checkbox__label") Checkbox
        .chi-label.-status Optional helper message
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
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-me1">
    <label class="chi-checkbox__label" for="checkbox-me1">Checkbox</label>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`,
      },
    };
  },
})
export default class Message extends Vue {}
</script>
