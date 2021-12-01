<template lang="pug">
  <ComponentExample title="Inverse" id="inverse" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description") Use the <code>-inverse</code> class to render dividers on dark backgrounds.
    .-p--3(style="background-color:#000;" slot="example")
      .chi-divider.-inverse
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-divider -inverse"></div>`
      }
    };
  }
})
export default class Inverse extends Vue {
  mounted() {}
}
</script>
