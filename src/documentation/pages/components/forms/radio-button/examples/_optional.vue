<template lang="pug">
  <ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>optional</code> to help emphasize a group of radio button options are not required and can be skipped.
    <fieldset slot="example">
      <legend class="chi-label">
        | Select an option
        <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
      </legend>
      <div class="chi-form__item">
        <div class="chi-radio">
          <input class="chi-radio__input" type="radio" name="radios" id="radio-op1">
          <label class="chi-radio__label" for="radio-op1">Option 1</label>
        </div>
      </div>
      <div class="chi-form__item">
        <div class="chi-radio">
          <input class="chi-radio__input" type="radio" name="radios" id="radio-op2">
          <label class="chi-radio__label" for="radio-op2">Option 2</label>
        </div>
      </div>
    </fieldset>
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
        htmlblueprint: `<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-op1">
      <label class="chi-radio__label" for="radio-op1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-op2">
      <label class="chi-radio__label" for="radio-op2">Option 2</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Optional extends Vue {}
</script>
