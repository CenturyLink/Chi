<template lang="pug">
  <ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>checked</code> boolean attribute to set the default value of a radio button input to true.
    <fieldset slot="example">
      <legend class="chi-label">Select an option</legend>
      <div class="chi-form__item">
        <div class="chi-radio">
          <input class="chi-radio__input" type="radio" name="radios" id="radio-ch1" checked>
          <label class="chi-radio__label" for="radio-ch1">Option 1</label>
        </div>
      </div>
      <div class="chi-form__item">
        <div class="chi-radio">
          <input class="chi-radio__input" type="radio" name="radios" id="radio-ch2">
          <label class="chi-radio__label" for="radio-ch2">Option 2</label>
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
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-ch1" checked>
      <label class="chi-radio__label" for="radio-ch1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="radio-ch2">
      <label class="chi-radio__label" for="radio-ch2">Option 2</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Checked extends Vue {}
</script>
