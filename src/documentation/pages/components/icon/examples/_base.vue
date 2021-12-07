<template lang="pug">
<ComponentExample title="Base" id="base" padding="-p--0" :tabs="exampleTabs">
  <Wrapper slot="example">
    .-p--3
      chi-icon(icon='atom')
  </Wrapper>
  <pre class="language-html" slot="code-webcomponent">
    <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
  </pre>
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<i class="chi-icon icon-atom" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class Base extends Vue {
  mounted() {}
}
</script>
