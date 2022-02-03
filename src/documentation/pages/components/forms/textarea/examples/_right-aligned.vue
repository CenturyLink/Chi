<template lang="pug">
  <ComponentExample titleSize="h4" title="Right Aligned" id="right-aligned" :tabs="exampleTabs">
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__icon-right") Label
          chi-textarea(id="example__icon-right", icon-right="check", icon-right-color="success") Sample text
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
  <chi-label for="example__icon-right">Label</chi-label>
  <chi-textarea id="example__icon-right" icon-right="check" icon-right-color="success">Sample text</chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__icon-right">Label</label>
  <div class="chi-input__wrapper -icon--right">
    <textarea class="chi-input" id="example__icon-right">Sample text</textarea>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`
      }
    };
  }
})
export default class RightAligned extends Vue {}
</script>
