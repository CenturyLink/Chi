<template lang="pug">
  <ComponentExample titleSize="h4" title="Inline Label" id="inline-label" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Apply the class <code>-row</code> to <code>chi-form__item</code> to render labels and textareas inline.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item.-row.-align-items--start
          chi-label(for='example__inline-label') Label
          chi-textarea(id='example__inline-label')
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
        webcomponent: `<div class="chi-form__item -row -align-items--start">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-textarea id="example__inline-label"></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row -align-items--start">
  <label class="chi-label" for="example__inline-label">Label</label>
  <textarea class="chi-input" id="example__inline-label"></textarea>
</div>`
      }
    };
  }
})
export default class InlineLabel extends Vue {}
</script>
