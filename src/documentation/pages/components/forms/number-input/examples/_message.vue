<template lang="pug">
  <ComponentExample title="Message" id="message" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Add a message below an input to store descriptions, validation feedback, and other helpful information.
    <Wrapper slot="example">
      .chi-form__item
        chi-label(for="unique-id-me1") Label
        chi-number-input#unique-id-me1
        .chi-label.-status Optional input message
    </Wrapper>
    <Wrapper slot="code-webcomponent">    
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded /> 
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
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
        webcomponent: `<chi-label for="unique-id-me1">Label</chi-label>
<chi-number-input id="unique-id-me1"></chi-number-input>
<div class="chi-label -status">Optional input message</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="unique-id-me1">Label</label>
  <div class="chi-number-input">
    <input id="unique-id-me1" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
  <div class="chi-label -status">Optional input message</div>
</div>

<script>chi.numberInput(document.getElementById('unique-id-me1'));<\/script>`
      }
    };
  }
})
export default class Message extends Vue {}
</script>
