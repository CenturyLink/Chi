<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    template(#example-description)
      p.-text Use the <code>required</code> boolean attribute to indicate which select must be completed before submitting a form.
    template(#example)
      .chi-form__item(style="max-width:20rem")
        label(class="chi-label" for="example-re1") Label
          abbr(class="chi-label__required" aria-label="Required field") *
        select(class="chi-select" id="example-re1" required)
          option(value="") - Select -
          option Option 1
          option Option 2
          option Option 3
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
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example-re1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select" id="example-re1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`,
      },
    };
  },
})
export default class Required extends Vue { }
</script>
