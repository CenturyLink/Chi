<template lang="pug">
  <ComponentExample title="No Underline on Hover" id="no-hover-underline" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use to remove a link's underline on hover.
    chi-link(href="#" slot="example" no-hover-underline) Link
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
        webcomponent: `<chi-link href="#" no-hover-underline>Link</chi-link>`,
        htmlblueprint: `<a class="chi-link -no-hover-underline" href="#">Link</a>`
      }
    };
  }
})
export default class NoHoverUnderline extends Vue {}
</script>
