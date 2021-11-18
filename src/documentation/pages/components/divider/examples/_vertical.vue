<template lang="pug">
  <ComponentExample title="Vertical" id="vertical" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text To render a vertical divider, apply <code>-vertical</code> and ensure the parent container has a height specified.
    div(slot="example" style="height:72px").-text.-d--flex.-align-items--center
      | Option
      .chi-divider.-vertical
      | Option
      .chi-divider.-vertical
      | Option
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
        htmlblueprint: `<div class="chi-divider -vertical"></div>`
      }
    };
  }
})
export default class Vertical extends Vue {
  mounted() {}
}
</script>
