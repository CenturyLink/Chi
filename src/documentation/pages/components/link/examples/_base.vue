<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs" additionalClasses="-text">
    chi-link(href="#" slot="example") Link
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
        webcomponent: `<chi-link href="#">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#">Link</a>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
