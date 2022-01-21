<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    <Wrapper slot="example">
      chi-label(for="input-1") Label
      input#input-1-control.-sr--only
    </Wrapper>
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
        webcomponent: `<chi-label>Label</chi-label>`,
        htmlblueprint: `<label class="chi-label">Label</label>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
