<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__disabled") Label
          chi-textarea(id="example__disabled" disabled) Sample text
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
  <chi-label for="example__disabled">Label</chi-label>
  <chi-textarea id="example__disabled" disabled>Sample text</chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <textarea class="chi-input" id="example__disabled" disabled>Sample text</textarea>
</div>`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
