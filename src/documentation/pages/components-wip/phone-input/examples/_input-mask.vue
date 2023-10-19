<template lang="pug">
    <ComponentExample title="Input Mask" id="input-mask" :tabs="exampleTabs">
      p.-text(slot="example-description") 
        | Use the <code>input-mask</code> boolean attribute to allow users to enter only digits in the phone input.
      div(style="max-width: 18rem;" slot="example")
        chi-label(for="phone-input-mask") Phone Number
        chi-phone-input(id="phone-input-mask" input-mask)
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
            label: 'Web Component'
          },
          {
            disabled: true,
            id: 'htmlblueprint',
            label: 'HTML Blueprint'
          }
        ],
        codeSnippets: {
          webcomponent: `<chi-label for="phone-input-mask">Phone Number</chi-label>
<chi-phone-input id="phone-input-mask" input-mask></chi-phone-input>`,
          htmlblueprint: ``
        }
      };
    }
  })
  export default class InputMask extends Vue {}
  </script>
  