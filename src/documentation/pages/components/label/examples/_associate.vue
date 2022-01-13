<template lang="pug">
  <ComponentExample title="Associate label with form elements" id="associate" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Label is important for accessibility of form elements.
    div(style="max-width: 17rem;" slot="example")
      chi-label(for='number-input') Label
      chi-number-input#number-input
      chi-label.-mt--1(for='chi-date-picker') Label
      chi-date-picker#chi-date-picker
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | Associate <code>chi-label</code> with supported form-control web components 
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
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
        webcomponent: `<chi-label for="number-input">Label</chi-label>
<chi-number-input id="number-input"></chi-number-input>

<chi-label for="chi-date-picker">Label</chi-label>
<chi-date-picker id="chi-date-picker"></chi-date-picker>`,
        htmlblueprint: `<div class="chi-form__item">
  <label for="number-input" class="chi-label">Label</label>
  <div class="chi-number-input">
    <input id="number-input" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<div class="chi-form__item">
  <label class="chi-label" for="datepicker-1">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-1" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date -icon--muted" aria-hidden="true"></i>
  </div>
</div>`
      }
    };
  }
})
export default class Associate extends Vue {}
</script>
