<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text   
        | Add a message below a checkbox to store descriptions, validation feedback, and other helpful information.
    div(slot="example")
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-me1")
          label(for="checkbox-me1" class="chi-checkbox__label") Checkbox
        .chi-label.-status Optional input message
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
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
        webcomponent: `Web component code snippet`,
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
export default class Message extends Vue {
  mounted() {}
}
</script>
