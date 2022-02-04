<template lang="pug">
  <ComponentExample titleSize="h4" title="Inline Textareas" id="inline-textareas" :tabs="exampleTabs">
    .-d--flex(slot="example")
      .chi-form__item.-inline.-flex--grow1
        chi-label(for='example__inline-input01') Label
        chi-textarea(id='example__inline-input01')
      .chi-form__item.-inline.-flex--grow1
        chi-label(for='example__inline-input02') Label
        chi-textarea(id='example__inline-input02')
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
        webcomponent: `<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input01">Label</chi-label>
    <chi-textarea id="example__inline-input01"></chi-textarea>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input02">Label</chi-label>
    <chi-textarea id="example__inline-input02"></chi-textarea>
  </div>
</div>`,
        htmlblueprint: `<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input01">Label</label>
    <textarea class="chi-input" id="example__inline-input01"></textarea>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input02">Label</label>
    <textarea class="chi-input" id="example__inline-input02"></textarea>
  </div>
</div>`
      }
    };
  }
})
export default class InlineTextareas extends Vue {}
</script>
