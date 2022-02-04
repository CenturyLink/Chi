<template lang="pug">
  <ComponentExample title="Spinner" id="spinner" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>spinner</code> attribute to let users know when information is saving or loading.
    .chi-grid(slot="example")
      .chi-form__item.-mb--2(style="max-width:20rem")
        chi-label(for="example__spinner") Label
        chi-text-input(spinner id="example__spinner")
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
  <chi-label for="example__spinner">Label</chi-label>
  <chi-text-input id="example__spinner" spinner></chi-text-input>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__spinner">Label</label>
  <div class="chi-input__wrapper">
    <input type="text" class="chi-input" id="example__spinner">
    <svg class="chi-spinner -icon--muted" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`
      }
    };
  }
})
export default class Spinner extends Vue {}
</script>
