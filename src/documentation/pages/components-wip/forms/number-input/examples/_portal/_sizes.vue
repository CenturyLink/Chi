<template lang="pug">
  <ComponentExample title="Sizes" id="sizes_portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | Number inputs support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>. The default size is <code>md</code>.
    template(#example)
      .-d--flex.-flex--column
        each size in ['xs', 'sm', 'md', 'lg']
          .-py--2
            .chi-form__item
              chi-label(for=`example-portal-sizes-${size}`) Label
              chi-number-input(size=`${size}`, id=`example-portal-sizes-${size}`)
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
        webcomponent: `<!-- xs -->
<chi-label for="example-3-xs">Label</chi-label>
<chi-number-input size="xs" id="example-3-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example-3-sm">Label</chi-label>
<chi-number-input size="sm" id="example-3-sm"></chi-number-input>

<!-- md -->
<chi-label for="example-3-md">Label</chi-label>
<chi-number-input size="md" id="example-3-md"></chi-number-input>

<!-- lg -->
<chi-label for="example-3-lg">Label</chi-label>
<chi-number-input size="lg" id="example-3-lg"></chi-number-input>`,
        htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-xs">Label</label>
  <div class="chi-number-input -xs">
    <input id="input-example-xs" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-sm">Label</label>
  <div class="chi-number-input -sm">
    <input id="input-example-sm" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-md">Label</label>
  <div class="chi-number-input -md">
    <input id="input-example-md" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-lg">Label</label>
  <div class="chi-number-input -lg">
    <input id="input-example-lg" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-lg'));<\/script>`,
      },
    };
  },
})
export default class SizesPortal extends Vue { }
</script>
