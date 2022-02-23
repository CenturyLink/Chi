<template lang="pug">
  <ComponentExample title="Readonly" id="readonly" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>readonly</code> boolean attribute to prevent users from changing an input value.
      | Unlike disabled inputs, readonly inputs are submitted with the form and can still receive browsing
      | events such as mouse clicks and focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a readonly attribute specified.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__readonly") Label
          chi-textarea(id="example__readonly" readonly) Sample text
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
  <chi-label for="example__readonly">Label</chi-label>
  <chi-textarea id="example__readonly" readonly>Sample text</chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__readonly">Label</label>
  <textarea class="chi-input" id="example__readonly" readonly>Sample text</textarea>
</div>`
      }
    };
  }
})
export default class Readonly extends Vue {}
</script>
