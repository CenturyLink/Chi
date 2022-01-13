<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted 
      | with the form and can not receive any browsing events such as mouse clicks or focus.
    fieldset(slot="example")
      legend(class="chi-label") Select an option
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-di1" disabled)
          label(class="chi-radio__label" for="radio-di1") Option 1
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-di2")
          label(class="chi-radio__label" for="radio-di2") Option 2
      .chi-form__item
        .chi-radio
          input(class="chi-radio__input" type="radio" name="radios" id="radio-di3")
          label(class="chi-radio__label" for="radio-di3") Option 3
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
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-di1" disabled>
      <label class="chi-radio__label" for="radio-di1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-di2">
      <label class="chi-radio__label" for="radio-di2">Option 2</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-di3">
      <label class="chi-radio__label" for="radio-di3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
