<template lang="pug">
<ComponentExample title="Associate label with form elements" id="associate" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Label is important for accessibility of form elements.
  template(#example)
    div(style="max-width: 17rem;")
      chi-label(for='number-input') Label
      chi-number-input#number-input
      chi-label.-mt--1(for='chi-date-picker') Label
      chi-date-picker#chi-date-picker
  template(#code-webcomponent)
    .chi-tab__description
      | Associate <code>chi-label</code> with supported form-control web components
    Copy(lang="html" :code="codeSnippets.webcomponent")

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
        webcomponent: `<chi-label for="number-input">Label</chi-label>
<chi-number-input id="number-input"></chi-number-input>

<chi-label for="chi-date-picker">Label</chi-label>
<chi-date-picker id="chi-date-picker"></chi-date-picker>`,
        htmlblueprint: `<div class="chi-form__item">
  <label for="number-input" class="chi-label">Label</label>
  <div class="chi-number-input">
    <input id="number-input" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<div class="chi-form__item">
  <label class="chi-label" for="datepicker-1">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-1" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date -icon--muted" aria-hidden="true"></i>
  </div>
</div>`,
      },
    };
  },
})
export default class Associate extends Vue {}
</script>
