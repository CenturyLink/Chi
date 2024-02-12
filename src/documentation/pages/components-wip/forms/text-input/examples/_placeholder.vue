<template lang="pug">
<ComponentExample title="Placeholder" id="placeholder" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>placeholder</code> attribute to provide users with an example of the type of data
      | that can be entered into an input. <strong>Note:</strong> Placeholder text is not persistent and visually
      | disappears when a value is entered.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__placeholder") Label
          chi-text-input(id="example__placeholder" placeholder="Placeholder")
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
  <chi-label for="example__placeholder">Label</chi-label>
  <chi-text-input id="example__placeholder" placeholder="Placeholder"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__placeholder">Label</label>
  <input type="text" class="chi-input" id="example__placeholder" placeholder="Placeholder">
</div>`,
      },
    };
  },
})
export default class Placeholder extends Vue {}
</script>
