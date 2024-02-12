<template lang="pug">
  <ComponentExample title="Stacked" id="stacked" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | Group checkboxes in <code>chi-form__item</code> for easy stacking.
    template(#example)
      legend.chi-label Select options
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-st1")
          label(for="checkbox-st1" class="chi-checkbox__label") Option 1
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-st2")
          label(for="checkbox-st2" class="chi-checkbox__label") Option 2

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
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-st1">
      <label class="chi-checkbox__label" for="checkbox-st1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-st2">
      <label class="chi-checkbox__label" for="checkbox-st2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Stacked extends Vue {}
</script>
