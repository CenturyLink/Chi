<template lang="pug">
  <ComponentExample title="Base" id="base-expanded" :tabs="exampleTabs">
    <Wrapper slot="example">
      .chi-form__item
        chi-label(for="example-4") Label
        chi-number-input(expanded=true)#example-4
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
        webcomponent: `<chi-label for="example-4">Label</chi-label>
<chi-number-input expanded id="example-4"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded">Label</label>
  <div class="chi-number-input -expanded">
    <input id="input-example-expanded" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content">
        <i class="chi-icon icon-minus" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content">
        <i class="chi-icon icon-plus" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>chi.numberInput(document.getElementById('input-example-expanded'));<\/script>`
      }
    };
  }
})
export default class BaseExpanded extends Vue {}
</script>
