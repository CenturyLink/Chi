<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text   
        | Use the <code>required</code> boolean attribute to indicate which checkboxes must be completed before submitting a form.
        | This is useful for ensuring users accept a Terms of Service, Privacy Policy, or other legal requirement.
    div(slot="example")
      .chi-form__item
        .chi-checkbox
          input(type="checkbox" class="chi-checkbox__input" id="checkbox-re1")
          label(for="checkbox-re1" class="chi-checkbox__label")
            | I accept the Terms of Service
            abbr.chi-label__required(title="Required field") *
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
export default class Required extends Vue {
  mounted() {}
}
</script>
