<template lang="pug">
  <ComponentExample title="Radio button" id="radio-button" :tabs="exampleTabs" padding="-p--4">
    fieldset(slot="example")
      legend.chi-label Legend
      each i in [1, 2]
        .chi-picker
          input(type="radio", class="chi-picker__input", name='unique-name-sra', id=`unique-id-sra${i}`, checked=(i === 1))
          label(for=`unique-id-sra${i}`)
            div.chi-form__item.-row
              span.chi-picker__radio
              span.chi-picker__label
                = 'Option ' + `${i}`
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sra" type="radio" id="unique-id-sra1" />
    <label for="unique-id-sra1">
      <div class="chi-form__item -row">
        <span class="chi-picker__radio"></span>
        <span class="chi-picker__label">Option 1</span>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sra" type="radio" id="unique-id-sra2" />
    <label for="unique-id-sra2">
      <div class="chi-form__item -row">
        <span class="chi-picker__radio"></span>
        <span class="chi-picker__label">Option 2</span>
      </div>
    </label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class RadioButton extends Vue {}
</script>
