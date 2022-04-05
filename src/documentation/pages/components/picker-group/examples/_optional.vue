<template lang="pug">
  <ComponentExample title="Optional" id="optional" :tabs="exampleTabs">
    p.-text(slot="example-description") Use <code>optional</code> to help emphasize a picker group that is not required and can be skipped.
    fieldset(slot="example")
      legend.chi-label Select an option
        abbr.chi-label__optional(title="Optional field") (optional)
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-op', :id="`unique-id-op${item}`")
            label(:for="`unique-id-op${item}`") Option {{ item }}
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
      pickers: [1, 2, 3],
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
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-op" id="unique-id-op1">
      <label for="unique-id-op1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-op" id="unique-id-op2">
      <label for="unique-id-op2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-op" id="unique-id-op3">
      <label for="unique-id-op3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Optional extends Vue {}
</script>
