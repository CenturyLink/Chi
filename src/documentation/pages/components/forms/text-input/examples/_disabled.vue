<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__disabled") Label
          chi-text-input(id="example__disabled" value="Sample Text" disabled)
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
  <chi-label for="example__disabled">Label</chi-label>
  <chi-text-input id="example__disabled" value="Sample Text" disabled></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <input type="text" class="chi-input" id="example__disabled" value="Sample Text" disabled>
</div>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
