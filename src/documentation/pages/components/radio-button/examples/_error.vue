<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>-danger</code> state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. 
      | To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.
    <Wrapper slot="example">
      <fieldset>
        <legend class="chi-label">
          | Select an option
          <abbr class="chi-label__required" title="Required field">*</abbr>
        </legend>
        <div class="chi-form__item">
          <div class="chi-radio">
            <input class="chi-radio__input -danger" type="radio" name="radios" id="radio-er1" required>
            <label class="chi-radio__label" for="radio-er1">Option 1</label>
          </div>
        </div>
        <div class="chi-form__item">
          <div class="chi-radio">
            <input class="chi-radio__input -danger" type="radio" name="radios" id="radio-er2">
            <label class="chi-radio__label" for="radio-er2">Option 2</label>
          </div>
        </div>
        <div class="chi-label -status -danger">Please select an option.</div>
      </fieldset>
    </Wrapper>  
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
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="radio-er1" required>
      <label class="chi-radio__label" for="radio-er1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="radio-er2">
      <label class="chi-radio__label" for="radio-er2">Option 2</label>
    </div>
  </div>
  <div class="chi-label -status -danger">Please select an option.</div>
</fieldset>`
      }
    };
  }
})
export default class Error extends Vue {}
</script>
