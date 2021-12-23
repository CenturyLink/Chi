<template lang="pug">
  <ComponentExample title="No Underline on Hover" id="no-hover-underline" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use to remove a link's underline on hover.
    <Wrapper slot="example">
      <chi-link href="#" no-hover-underline>Link</chi-link>
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
        webcomponent: `<chi-link href="#" no-hover-underline>Link</chi-link>`,
        htmlblueprint: `<a class="chi-link -no-hover-underline" href="#">Link</a>`
      }
    };
  }
})
export default class NoHoverUnderline extends Vue {}
</script>
