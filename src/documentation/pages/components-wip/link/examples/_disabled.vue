<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Make links appear inactive by adding the <code>disabled</code> boolean attribute or <code>-disabled</code> class.
    chi-link(href="#" slot="example" disabled) Link
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
        webcomponent: `<chi-link href="#" disabled>Link</chi-link>`,
        htmlblueprint: `<a class="chi-link -disabled" href="#">Link</a>`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
