<template lang="pug">
  <ComponentExample title="Rel" id="rel" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use rel to set the relationship between the current page and the linked page. Rel supports all HTML a attribute values. 
      | Examples include: <code>alternate</code>, <code>external</code>, <code>next</code>, <code>nofollow</code>, <code>noreferrer</code>, <code>noopener</code>, <code>prev</code>, and more.
    <Wrapper slot="example">
      <chi-link href="#" rel="noopener">Link</chi-link>
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
        webcomponent: `<chi-link href="#" rel="noopener">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" rel="noopener">Link</a>`
      }
    };
  }
})
export default class Rel extends Vue {}
</script>
