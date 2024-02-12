<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text Selects support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.
    template(#example)
      .-p--2(v-for="size in sizes")
        .chi-form__item(style="max-width:20rem")
          label(class="chi-label" :for="`example-size-${size}`") Label
          select(:class="`chi-select -${size}`" :id="`example-size-${size}`")
            option(value="" selected disabled hidden) -{{size}} - Select -
            option(v-for="opt in [1, 2, 3]") Option {{opt}}

    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SizesLumenCenturyLink extends Vue {
  exampleTabs = [
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
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs - Select -</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm - Select -</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md - Select -</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg - Select -</option>
  </select>
</div>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xl">Label</label>
  <select class="chi-select -xl" id="example-size-xl">
    <option>-xl - Select -</option>
  </select>
</div>`,
  }
  sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
}
</script>
