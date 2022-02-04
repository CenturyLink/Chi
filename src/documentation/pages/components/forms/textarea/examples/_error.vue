<template lang="pug">
  <ComponentExample title="Error" id="error" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>danger</code> state to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__danger" required) Describe the issue
          chi-textarea(id="example__danger" state="danger" required)
          div.chi-label.-status.-danger Please describe the issue.
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
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__danger" required>Describe the issue</chi-label>
  <chi-textarea id="example__danger" state="danger" required></chi-textarea>
  <div class="chi-label -status -danger">Please describe the issue.</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__danger">
    Describe the issue
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </label>
  <textarea class="chi-input -danger" id="example__danger" required></textarea>
  <div class="chi-label -status -danger">Please describe the issue.</div>
</div>`
      }
    };
  }
})
export default class Error extends Vue {}
</script>
