<template lang="pug">
  <ComponentExample title="Disabled" id="disabled-expanded" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
      | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
    .chi-form__item(slot="example")
      <chi-label for="example-5">Label</chi-label>
      <chi-number-input expanded disabled id="example-5"></chi-number-input>    
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
        webcomponent: `<chi-label for="example-5">Label</chi-label>
<chi-number-input expanded disabled id="example-5"></chi-number-input>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-disabled">Label</label>
  <div class="chi-number-input -expanded">
    <input id="input-example-expanded-disabled" class="chi-input" type="number" value="0" aria-label="Input Label" disabled>
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

<script>chi.numberInput(document.getElementById('input-example-expanded-disabled'));<\/script>`
      }
    };
  }
})
export default class DisabledExpanded extends Vue {}
</script>
