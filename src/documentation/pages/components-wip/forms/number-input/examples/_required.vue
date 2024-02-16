<template lang="pug">
<ComponentExample title="Required" id="required" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>required</code> boolean attribute to indicate which inputs must be completed before submitting a form.
      | To render a required input, apply the <code>required</code> attribute to the input. It is also
      | encouraged but not mandatory to apply a <code>required</code> attribute to the corresponding label of the input which
      | will automatically render a red asterisk. <strong>Note:</strong> For HTML Blueprint implementations,
      | the <code>required</code> attribute is not supported on the label. Please use the alternate method
      | specified below for rendering a red asterisk within the label.
  template(#example)
    .chi-form__item
      chi-label(for="unique-id-re1" required) Label
      chi-number-input#unique-id-re1(required)
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
        webcomponent: `<chi-label for="unique-id-re1" required>Label</chi-label>
<chi-number-input id="unique-id-re1" required></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-re1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <div class="chi-number-input">
    <input id="unique-id-re1" type="number" class="chi-input" value="0" aria-label="Input Label" required>
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-re1'));<\/script>`,
      },
    };
  },
})
export default class Required extends Vue { }
</script>
