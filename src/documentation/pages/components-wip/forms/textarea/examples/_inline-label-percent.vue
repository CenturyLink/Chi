<template lang="pug">
  <ComponentExample titleSize="h4" title="Inline Label - width controlled using percent" id="inline-label-percent" :tabs="exampleTabs">
    .chi-form__item.-row.-align-items--start(slot="example")
      chi-label.-w--50(for='example__inline-label-percent') Label width 50%
      .-w--50
        chi-textarea(id='example__inline-label-percent')
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
  <chi-label class="-w--50" for="example__inline-label-percent">Label width 50%</chi-label>
  <div class="-w--50">
    <chi-textarea id="example__inline-label-percent"></chi-textarea>
  </div>
</div>`,
        htmlblueprint: `<div class="chi-form__item -row -align-items--start">
  <label class="chi-label -w--50" for="example__inline-label-percent">Label</label>
  <div class="-w--50">
    <textarea class="chi-input" id="example__inline-label-percent"></textarea>
  </div>
</div>`
      }
    };
  }
})
export default class InlineLabelPercent extends Vue {}
</script>
