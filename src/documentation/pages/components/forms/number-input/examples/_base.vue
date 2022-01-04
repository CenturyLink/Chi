<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | An initial value is optional. If an initial value is not provided, <code>0</code> will be taken as default.
    .chi-form__item(slot="example")
      chi-label(for="example-1") Label
      chi-number-input#example-1    
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
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
        webcomponent: `<chi-label for="example-1">Label</chi-label>
<chi-number-input id="example-1"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="input-example-base">Label</label>
  <div class="chi-number-input">
    <input id="input-example-base" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('input-example-base'));<\/script>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
