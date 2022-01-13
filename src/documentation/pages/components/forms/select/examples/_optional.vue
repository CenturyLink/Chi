<template lang="pug">
  <ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
    p.-text(slot="example-description") Use <code>optional</code> to help emphasize that a select is not required and can be skipped.
     .chi-form__item(style="max-width:20rem" slot="example")
      label(class="chi-label" for="example-op1") Label
        abbr(class="chi-label__optional" title="Optional field") (optional)
      select(class="chi-select" id="example-op1" required)
        option(value="") Select
        option Option 1
        option Option 2
        option Option 3
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
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example-op1">
    Label
    <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
  </label>
  <select class="chi-select" id="example-op1" required>
    <option value="">Select</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`
      }
    };
  }
})
export default class Optional extends Vue {}
</script>
