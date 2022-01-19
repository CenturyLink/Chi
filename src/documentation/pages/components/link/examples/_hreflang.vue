<template lang="pug">
  <ComponentExample title="Hreflang" id="hreflang" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use to set the language of the link.
    chi-link(href="#" slot="example" hreflang="en") Link
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
        webcomponent: `<chi-link href="#" hreflang="en">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" hreflang="en">Link</a>`
      }
    };
  }
})
export default class Hreflang extends Vue {}
</script>
