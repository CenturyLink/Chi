<template lang="pug">
<ComponentExample title="Required" id="required" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>required</code> boolean attribute to indicate which inputs must be completed before submitting a form.
      | This is useful for capturing important information and reducing the risk of form errors.
      | To render a required input, apply the <code>required</code> attribute to the input. It is also
      | encouraged but not mandatory to apply a <code>required</code> attribute to the corresponding label of the input which
      | will automatically render a red asterisk. <strong>Note:</strong> For HTML Blueprint implementations,
      | the <code>required</code> attribute is not supported on the label. Please use the alternate method
      | specified below for rendering a red asterisk within the label.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-label(for="example__required" required) Label
          chi-text-input(id="example__required" required)
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
  <chi-label for="example__required" required>Label</chi-label>
  <chi-text-input id="example__required" required></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <input type="text" class="chi-input" id="example__required" required>
</div>`,
      },
    };
  },
})
export default class Required extends Vue {}
</script>
