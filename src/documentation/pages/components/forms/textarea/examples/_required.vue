<template lang="pug">
  <ComponentExample title="Required" id="required" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the <code>required</code> boolean attribute to indicate which inputs must be completed before submitting a form.
      | This is useful for capturing important information and reducing the risk of form errors.
      | To render a required textarea, apply the <code>required</code> attribute to the textarea. It is also
      | encouraged but not mandatory to apply a <code>required</code> attribute to the corresponding label of the textarea which
      | will automatically render a red asterisk. <strong>Note:</strong> For HTML Blueprint implementations,
      | the <code>required</code> attribute is not supported on the label. Please use the alternate method
      | specified below for rendering a red asterisk within the label. 
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6
        .chi-form__item
          chi-label(for="example__required" required) Label
          chi-textarea(id="example__required" required)
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
  <chi-label for="example__required" required>Label</chi-label>
  <chitextarea id="example__required" required></chi-textarea>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </label>
  <textarea class="chi-input" id="example__required" required></textarea>
</div>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
