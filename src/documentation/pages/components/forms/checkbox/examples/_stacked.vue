<template lang="pug">
  <ComponentExample title="Stacked" id="stacked" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text   
        | Group checkboxes in <code>chi-form__item</code> for easy stacking.
    div(slot="example")
      legend.chi-label Select options
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-st1")
          label(for="checkbox-st1" class="chi-checkbox__label") Option 1
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-st2")
          label(for="checkbox-st2" class="chi-checkbox__label") Option 2
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
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
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-st1">
      <label class="chi-checkbox__label" for="checkbox-st1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-st2">
      <label class="chi-checkbox__label" for="checkbox-st2">Option 2</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Stacked extends Vue {
  mounted() {}
}
</script>
