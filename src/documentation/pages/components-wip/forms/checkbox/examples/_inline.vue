<template lang="pug">
<ComponentExample title="Inline" id="inline" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Apply the class <code>-inline</code> to <code>chi-form__item</code> to display two or more checkboxes in one row.
  template(#example)
    legend.chi-label Select options
    .chi-form__item.-inline
      .chi-checkbox
        input(type="checkbox", class="chi-checkbox__input", id="checkbox-in1")
        label(for="checkbox-in1", class="chi-checkbox__label") Option 1
    .chi-form__item.-inline
      .chi-checkbox
        input(type="checkbox", class="chi-checkbox__input", id="checkbox-in2")
        label(for="checkbox-in2", class="chi-checkbox__label") Option 2

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
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-in1">
      <label class="chi-checkbox__label" for="checkbox-in1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-in2">
      <label class="chi-checkbox__label" for="checkbox-in2">Option 2</label>
    </div>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Inline extends Vue {}
</script>
