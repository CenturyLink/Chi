<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    p.-text(slot="example-description")   
      | Use the <code>required</code> boolean attribute to indicate which checkboxes must be completed before submitting a form.
      | This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.
    .chi-form__item(slot="example")
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input" id="checkbox-re1")
        label(for="checkbox-re1" class="chi-checkbox__label")
          | I accept the Terms of Service
          abbr.chi-label__required(title="Required field") *
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
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-re1" required>
    <label class="chi-checkbox__label" for="checkbox-re1">
      I accept the Terms of Service
      <abbr class="chi-label__required" title="Required field">*</abbr>
    </label>
  </div>
</div>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
