<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Selects support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.
    <Wrapper slot="example">
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        .-p--2
          .chi-form__item(style="max-width:20rem")
            label(class="chi-label" for=`example-size-${size}`) Label
            select(class=`chi-select -${size}` id=`example-size-${size}`)
              option=`-${size} Select`
    </Wrapper>
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs Select</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm Select</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md Select</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg Select</option>
  </select>
</div>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xl">Label</label>
  <select class="chi-select -xl" id="example-size-xl">
    <option>-xl Select</option>
  </select>
</div>`
      }
    };
  }
})
export default class SizesLumenCenturyLink extends Vue {}
</script>
