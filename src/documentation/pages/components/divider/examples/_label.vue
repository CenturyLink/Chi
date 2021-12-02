<template lang="pug">
  <ComponentExample title="Label" id="label" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Add text to a divider and apply the class <code>-label</code> to include a label.
      | This method is especially useful for login and sign up forms.
      | Label text size can be changed by applying text utility classes such as <code>-text</code>, <code>-text--sm</code>, or <code>-text--lg</code>.
    .chi-divider.-text.-label(slot="example") or
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
        htmlblueprint: `<div class="chi-divider -label">or</div>`
      }
    };
  }
})
export default class Label extends Vue {
  mounted() {}
}
</script>
