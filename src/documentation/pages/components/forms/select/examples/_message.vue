<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    p.-text(slot="example-description") Add a message below a select to store descriptions, validation feedback, and other helpful information.
    .chi-form__item(style="max-width:20rem" slot="example")
      label(class="chi-label" for="example-me1") Label
      select(class="chi-select" id="example-me1")
        option(value="") Select
        option Option 1
        option Option 2
        option Option 3 
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
      string: 'String',
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
  <label class="chi-label" for="example-me1">Label</label>
  <select class="chi-select" id="example-me1">
    <option value="">Select</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status">Optional input message</div>
</div>`
      }
    };
  }
})
export default class Message extends Vue {}
</script>
