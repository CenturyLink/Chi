<template lang="pug">
<ComponentExample title="Readonly" id="readonly" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>readonly</code> boolean attribute to prevent users from changing an input value.
      | Unlike disabled inputs, readonly inputs are submitted with the form and can still receive browsing
      | events such as mouse clicks and focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a readonly attribute specified.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__readonly") Label
          chi-text-input(id="example__readonly" value="Sample Text" readonly)
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
  <chi-label for="example__readonly">Label</chi-label>
  <chi-text-input id="example__readonly" value="Sample Text" readonly></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__readonly">Label</label>
  <input type="text" class="chi-input" id="example__readonly" value="Sample Text" readonly>
</div>`,
      },
    };
  },
})
export default class Readonly extends Vue {}
</script>
