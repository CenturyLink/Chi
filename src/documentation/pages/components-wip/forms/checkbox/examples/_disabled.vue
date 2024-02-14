<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
        | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
        | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
    template(#example)
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-di1" disabled)
          label(for="checkbox-di1" class="chi-checkbox__label") Checkbox
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
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-di1" disabled>
    <label class="chi-checkbox__label" for="checkbox-di1">Checkbox</label>
  </div>
</div>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
