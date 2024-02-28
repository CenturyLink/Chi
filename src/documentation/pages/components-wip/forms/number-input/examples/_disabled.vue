<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
  template(#example)
    .chi-form__item
      chi-label(for="example-2") Label
      chi-number-input(disabled=true)#example-2
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
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
        webcomponent: `<chi-label for="example-2">Label</chi-label>
<chi-number-input disabled id="example-2"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="input-example-disabled">Label</label>
  <div class="chi-number-input">
    <input id="input-example-disabled" type="number" class="chi-input" value="0" aria-label="Input Label" disabled>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('input-example-disabled'));<\/script>`,
      },
    };
  },
})
export default class Disabled extends Vue {}
</script>
