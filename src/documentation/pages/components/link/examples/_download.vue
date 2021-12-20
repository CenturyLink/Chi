<template lang="pug">
  <ComponentExample title="Download" id="download" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use download to prompt users to save a page or document instead of navigating to it. 
      | The download attribute accepts an optional value used to name the file. 
      | If no value is provided, the original filename is used.
    <Wrapper slot="example">
      <chi-link href="#" download>Link</chi-link>
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
