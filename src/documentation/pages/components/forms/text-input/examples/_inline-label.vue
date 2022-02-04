<template lang="pug">
  <ComponentExample title="Inline Label" id="inline-label" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Apply the class <code>-row</code> to <code>chi-form__item</code> to render labels and inputs inline.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item.-row
          chi-label(for='example__inline-label') Label
          chi-text-input(id='example__inline-label')
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
        webcomponent: `<div class="chi-form__item -row">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-text-input id="example__inline-label"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row">
  <label class="chi-label" for="example__inline-label">Label</label>
  <input class="chi-input" type="text" id="example__inline-label">
</div>`
      }
    };
  }
})
export default class InlineLabel extends Vue {}
</script>
