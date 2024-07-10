<template lang="pug">
<ComponentExample title="Sizes" id="sizes_lumen_century_link" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Number inputs support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, <code>xl</code>. The default size is <code>md</code>.
  template(#example)
    .-d--flex.-flex--column
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        .-py--2
          .chi-form__item
            chi-label(for=`example__size-${size}`) Label
            chi-number-input(size=`${size}`, id=`example__size-${size}`)
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
<chi-label for="example__size-xs">Label</chi-label>
<chi-number-input size="xs" id="example__size-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example__size-sm">Label</chi-label>
<chi-number-input size="sm" id="example__size-sm"></chi-number-input>

<!-- md -->
<chi-label for="example__size-md">Label</chi-label>
<chi-number-input size="md" id="example__size-md"></chi-number-input>

<!-- lg -->
<chi-label for="example__size-lg">Label</chi-label>
<chi-number-input size="lg" id="example__size-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example__size-xl">Label</chi-label>
<chi-number-input size="xl" id="example__size-xl"></chi-number-input>`,
        htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xs">Label</label>
  <div class="chi-number-input -xs">
    <input id="example__size-xs" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-sm">Label</label>
  <div class="chi-number-input -sm">
    <input id="example__size-sm" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-sm'));<v/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-md">Label</label>
  <div class="chi-number-input -md">
    <input id="example__size-md" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-lg">Label</label>
  <div class="chi-number-input -lg">
    <input id="example__size-lg" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example__size-xl">Label</label>
  <div class="chi-number-input -xl">
    <input id="example__size-xl" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__size-xl'));<\/script>`,
      },
    };
  },
})
export default class SizesLumenCenturyLink extends Vue {}
</script>
