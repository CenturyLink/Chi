<template lang="pug">
  <ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | When the vast majority of inputs in a form are required, <code>optional</code> can be used to help
      | emphasize the few that are not. This is useful for textareas that are not relevant to all users, such as an
      | Additional Comments textarea in a create support ticket form. If the user does not have additional comments,
      | applying <code>optional</code> to <code>chi-label</code> will help convey the labels corresponding textarea
      | is not required and can be skipped. <strong>Note:</strong> For HTML Blueprint implementations,
      | the <code>optional</code> boolean attribute is not supported on the label. Please use the alternate method
      | specified below for rendering optional text within the label. 
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__optional" optional) Label
          chi-textarea(id="example__optional")
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
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__optional" optional>Label</chi-label>
  <chi-textarea id="example__optional"></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__optional">
    Label
    <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
  </label>
  <textarea class="chi-input" id="example__optional"></textarea>
</div>`
      }
    };
  }
})
export default class Optional extends Vue {}
</script>
