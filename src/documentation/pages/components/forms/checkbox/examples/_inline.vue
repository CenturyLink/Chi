<template lang="pug">
  <ComponentExample title="Inline" id="inline" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Apply the class <code>-inline</code> to <code>chi-form__item</code> to display two or more checkboxes in one row.
    <Wrapper slot="example">
      legend.chi-label Select options
      .chi-form__item.-inline
        .chi-checkbox
          input(type="checkbox", class="chi-checkbox__input", id="checkbox-in1")
          label(for="checkbox-in1", class="chi-checkbox__label") Option 1
      .chi-form__item.-inline
        .chi-checkbox
          input(type="checkbox", class="chi-checkbox__input", id="checkbox-in2")
          label(for="checkbox-in2", class="chi-checkbox__label") Option 2
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
  <legend class="chi-label">Select options</legend>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-in1">
      <label class="chi-checkbox__label" for="checkbox-in1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" id="checkbox-in2">
      <label class="chi-checkbox__label" for="checkbox-in2">Option 2</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Inline extends Vue {}
</script>
