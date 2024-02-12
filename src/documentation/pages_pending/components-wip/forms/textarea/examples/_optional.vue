<template lang="pug">
<ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | When the vast majority of inputs in a form are required, <code>optional</code> can be used to help
      | emphasize the few that are not. This is useful for textareas that are not relevant to all users, such as an
      | Additional Comments textarea in a create support ticket form. If the user does not have additional comments,
      | applying <code>optional</code> to <code>chi-label</code> will help convey the labels corresponding textarea
      | is not required and can be skipped. <strong>Note:</strong> For HTML Blueprint implementations,
      | the <code>optional</code> boolean attribute is not supported on the label. Please use the alternate method
      | specified below for rendering optional text within the label.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__optional" optional) Label
          chi-textarea(id="example__optional")
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
  <chi-label for="example__optional" optional>Label</chi-label>
  <chi-textarea id="example__optional"></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__optional">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <textarea class="chi-input" id="example__optional"></textarea>
</div>`,
      },
    };
  },
})
export default class Optional extends Vue {}
</script>
