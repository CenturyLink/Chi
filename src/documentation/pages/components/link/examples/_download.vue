<template lang="pug">
  <ComponentExample title="Download" id="download" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use download to prompt users to save a page or document instead of navigating to it. 
      | The download attribute accepts an optional value used to name the file. 
      | If no value is provided, the original filename is used.
    chi-link(href="#" slot="example" download) Link
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
      string: 'String',
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
        webcomponent: `<!-- Use default filename -->
<chi-link href="#" download>Link</chi-link>

<!-- Specify custom filename -->
<chi-link href="#" download="custom-filename">Link</chi-link>`,
        htmlblueprint: `<!-- Use default filename -->
<a class="chi-link" href="#" download>Link</a>

<!-- Specify custom filename -->
<a class="chi-link" href="#" download="custom-filename">Link</a>`
      }
    };
  }
})
export default class Download extends Vue {}
</script>
