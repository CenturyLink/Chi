<template lang="pug">
  <ComponentExample title="Inline Label - width controlled using grid" id="inline-label-grid" :tabs="exampleTabs">
    .chi-form__item.-row.chi-grid.-no-gutter(slot="example")
      chi-label.chi-col.-w--3(for='example__inline-label-grid') Label width 3 columns
      .chi-col.-w--9
        chi-text-input(id='example__inline-label-grid')
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
        webcomponent: `<div class="chi-form__item -row chi-grid -no-gutter">
  <chi-label class="chi-col -w--3" for="example__inline-label-grid">Label width 3 columns</chi-label>
  <chi-text-input class="chi-col -w--9" id="example__inline-label-grid"></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row chi-grid -no-gutter">
  <label class="chi-label chi-col -w--3" for="example__inline-label-grid">Label</label>
  <input class="chi-input chi-col -w--9" type="text" id="example__inline-label-grid">
</div>`
      }
    };
  }
})
export default class InlineLabelGrid extends Vue {}
</script>
