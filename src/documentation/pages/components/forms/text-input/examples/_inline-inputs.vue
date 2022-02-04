<template lang="pug">
  <ComponentExample title="Inline Inputs" id="inline-inputs" :tabs="exampleTabs">
    .-d--flex(slot="example")
      .chi-form__item.-inline.-flex--grow1
        chi-label(for='example__inline-input01') Label
        chi-text-input(id='example__inline-input01')
      .chi-form__item.-inline.-flex--grow1
        chi-label(for='example__inline-input02') Label
        chi-text-input(id='example__inline-input02')
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
    <chi-text-input id="example__inline-input01"></chi-text-input>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input02">Label</chi-label>
    <chi-text-input id="example__inline-input02"></chi-text-input>
  </div>
</div>`,
        htmlblueprint: `<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input01">Label</label>
    <input class="chi-input" type="text" id="example__inline-input01">
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input02">Label</label>
    <input class="chi-input" type="text" id="example__inline-input02">
  </div>
</div>`
      }
    };
  }
})
export default class InlineInputs extends Vue {}
</script>
