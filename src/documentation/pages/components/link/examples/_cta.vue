<template lang="pug">
  <ComponentExample title="CTA" id="cta" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Call to action (CTA) links are prominent links used primarily on marketing web pages to encourage 
      | users to perform a specific action (e.g. Get started, Learn more). Use <a href="#additional-sizes">link sizes</a> to render CTA links 
      | larger or smaller.
    chi-link(href="#" slot="example" cta) Learn more
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
        webcomponent: `<chi-link href="#" cta>Learn more</chi-link>`,
        htmlblueprint: `<a class="chi-link -cta" href="#">Learn more</a>`
      }
    };
  }
})
export default class CTA extends Vue {}
</script>
