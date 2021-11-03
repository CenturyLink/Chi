<template lang="pug">
  <ComponentExample title="Inverse" id="inverse" :tabs="exampleTabs" padding="-p--0">
    div(slot="example-description")
      p.-text Use the <code>-inverse</code> class to render dividers on dark backgrounds.
    div(slot="example")
      .-p--3(style="background-color:#000;border-radius:.15em .15em 0 0;")
        .chi-divider.-inverse
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
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
