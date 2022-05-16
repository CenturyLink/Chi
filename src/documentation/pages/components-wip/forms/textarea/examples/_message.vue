<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Add a message below a textarea to store descriptions, validation feedback, and other helpful information.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for='example__message') Label
          chi-textarea(id='example__message')
          .chi-label.-status Optional input message
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
  <chi-label for="example__message">Label</chi-label>
  <chi-textarea id="example__message"></chi-textarea>
  <div class="chi-label -status">Optional input message</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <textarea class="chi-input" id="example__message"></textarea>
  <div class="chi-label -status">Optional input message</div>
</div>`
      }
    };
  }
})
export default class Message extends Vue {}
</script>
