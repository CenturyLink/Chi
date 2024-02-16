<template lang="pug">
<ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Text inputs supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, and <code>xl</code>.
      | The default size is <code>md</code>.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-grid
          .chi-col.-w--12.-mb--2(v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']")
            .chi-form__item
              chi-label(:for="`example__size-${size}`") Label
              chi-text-input(:size="size", value="Sample Text", :id="`example__size-${size}`")
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
  <chi-label for="example__size-xs">Label</chi-label>
  <chi-text-input size="xs" id="example__size-xs"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-sm">Label</chi-label>
  <chi-text-input size="sm" id="example__size-sm"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-md">Label</chi-label>
  <chi-text-input size="md" id="example__size-md"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-lg">Label</chi-label>
  <chi-text-input size="lg" id="example__size-lg"></chi-text-input>
</div>
<div class="chi-form__item">
  <chi-label for="example__size-xl">Label</chi-label>
  <chi-text-input size="xl" id="example__size-xl"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -xs" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <input type="text" class="chi-input -sm" id="example__size-sm">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <input type="text" class="chi-input -md" id="example__size-md">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <input type="text" class="chi-input -lg" id="example__size-lg">
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xl">Label</label>
  <input type="text" class="chi-input -xl" id="example__size-xl">
</div>`,
      },
    };
  },
})
export default class SizesLumenCenturyLink extends Vue { }
</script>
