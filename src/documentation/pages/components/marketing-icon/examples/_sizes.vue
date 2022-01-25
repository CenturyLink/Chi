<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Icons support the following sizes:
      | <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>.
      | By default, icons render at 96x96px (<code>md</code>).
    .chi-grid.-align-items--end(slot="example")
      each size in ['xs', 'sm', 'md', 'lg']
        div.-p--2.-m--1
          chi-marketing-icon(icon="business-big-data", size=size)
          p.-text.-text--center= size
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
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
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- xs : 72x72px -->
<chi-marketing-icon icon="business-big-data" size="xs"></chi-marketing-icon>
<!-- sm : 80x80px -->
<chi-marketing-icon icon="business-big-data" size="sm"></chi-marketing-icon>
<!-- md : 96x96px -->
<chi-marketing-icon icon="business-big-data" size="md"></chi-marketing-icon>
<!-- lg : 128x128px -->
<chi-marketing-icon icon="business-big-data" size="lg"></chi-marketing-icon>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Sizes extends Vue {}
</script>
