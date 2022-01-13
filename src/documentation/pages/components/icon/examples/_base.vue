<template lang="pug">
  <ComponentExample title="Base" id="base" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      chi-icon(icon='atom')
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
          label: 'Web component',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-icon icon="atom"></chi-icon>`,
        htmlblueprint: `<i class="chi-icon icon-atom" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
