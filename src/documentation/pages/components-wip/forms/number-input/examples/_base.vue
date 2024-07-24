<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | An initial value is optional. If an initial value is not provided, <code>0</code> will be taken as default.
  template(#example)
    .chi-form__item
      chi-label(for="example__base") Label
      chi-number-input#example__base
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
        webcomponent: `<chi-label for="example__base">Label</chi-label>
<chi-number-input id="example__base"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <div class="chi-number-input">
    <input id="example__base" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('example__base'));<\/script>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
