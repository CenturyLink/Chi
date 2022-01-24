<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Text inputs supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>.
      | The default size is <code>md</code>.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-grid
          each size in ['xs', 'sm', 'md', 'lg']
            .chi-col.-w--12.-mb--2
              .chi-form__item
                chi-label(for=`example__size-${size}`) Label
                chi-text-input(size=`${size}`, value="Sample Text", id=`example__size-${size}`)
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
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
</div>`
      }
    };
  }
})
export default class SizesPortal extends Vue {}
</script>
