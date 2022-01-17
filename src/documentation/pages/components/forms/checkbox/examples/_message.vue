<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.
    .chi-form__item(slot="example")
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input" id="checkbox-me1")
        label(for="checkbox-me1" class="chi-checkbox__label") Checkbox
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-me1">
    <label class="chi-checkbox__label" for="checkbox-me1">Checkbox</label>
  </div>
  <div class="chi-label -status">Optional input message</div>
</div>`
      }
    };
  }
})
export default class Message extends Vue {}
</script>
