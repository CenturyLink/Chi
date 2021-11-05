<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text File inputs support sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, 
        | <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.
    div(slot="example")
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        .-p--2
          p.-text--bold.-mt--0= '-' + size
          input.chi-file-input(type="file", class=`-${size}`, id=`example-file-${size}`, aria-label="Choose file")
          label(for=`example-file-${size}`) No file chosen
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>  
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        htmlblueprint: `<!-- -xs -->
<input type="file" class="chi-file-input -xs" id="example-file-xs" aria-label="Choose file">
<label for="example-file-xs">No file chosen</label>
<!-- -sm -->
<input type="file" class="chi-file-input -sm" id="example-file-sm" aria-label="Choose file">
<label for="example-file-sm">No file chosen</label>
<!-- -md -->
<input type="file" class="chi-file-input -md" id="example-file-md" aria-label="Choose file">
<label for="example-file-md">No file chosen</label>
<!-- -lg -->
<input type="file" class="chi-file-input -lg" id="example-file-lg" aria-label="Choose file">
<label for="example-file-lg">No file chosen</label>
<!-- -xl -->
<input type="file" class="chi-file-input -xl" id="example-file-xl" aria-label="Choose file">
<label for="example-file-xl">No file chosen</label>`
      }
    };
  }
})
export default class Sizes extends Vue {
  mounted() {}
}
</script>
