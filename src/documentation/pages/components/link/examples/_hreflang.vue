<template lang="pug">
  <ComponentExample title="Hreflang" id="hreflang" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use to set the language of the link.
    <Wrapper slot="example">
      <chi-link href="#" hreflang="en">Link</chi-link>
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
        webcomponent: `<chi-link href="#" hreflang="en">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" hreflang="en">Link</a>`
      }
    };
  }
})
export default class Hreflang extends Vue {}
</script>
