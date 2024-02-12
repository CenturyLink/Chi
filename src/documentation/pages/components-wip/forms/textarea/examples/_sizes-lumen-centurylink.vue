<template lang="pug">
<ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Textareas support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, and <code>xl</code>.
      | The default size is <code>md</code>.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-grid
          .chi-col.-w--12.-mb--2(v-for="size in ['xs', 'sm', 'md','lg', 'xl']")
            .chi-form__item
              chi-label(:for="`example__${size}`") Label
              chi-textarea(:size="size", :id="`example__${size}`") Sample text
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
  <chi-label for="example__xs">Label</chi-label>
  <chi-textarea size="sm" id="example__xs">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__sm">Label</chi-label>
  <chi-textarea size="sm" id="example__sm">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__md">Label</chi-label>
  <chi-textarea size="md" id="example__md">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__lg">Label</chi-label>
  <chi-textarea size="lg" id="example__lg">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__xl">Label</chi-label>
  <chi-textarea size="xl" id="example__xl">Sample text</chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__xs">Label</label>
  <textarea class="chi-input -xs" id="example__xs">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__sm">Label</label>
  <textarea class="chi-input -sm" id="example__sm">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__md">Label</label>
  <textarea class="chi-input -md" id="example__md">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__lg">Label</label>
  <textarea class="chi-input -lg" id="example__lg">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__xl">Label</label>
  <textarea class="chi-input -xl" id="example__xl">Sample text</textarea>
</div>`,
      },
    };
  },
})
export default class SizesLumenCenturyLink extends Vue {}
</script>
