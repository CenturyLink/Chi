<template lang="pug">
  <ComponentExample title="Vertical" id="vertical" :tabs="exampleTabs">
    p.-text(slot="example-description") To render a vertical divider, apply <code>-vertical</code> and ensure the parent container has a height specified.
    .-text.-d--flex.-align-items--center(slot="example" style="height:72px")
      | Option
      .chi-divider.-vertical
      | Option
      .chi-divider.-vertical
      | Option
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
        htmlblueprint: `<div class="chi-divider -vertical"></div>`
      }
    };
  }
})
export default class Vertical extends Vue {
  mounted() {}
}
</script>
