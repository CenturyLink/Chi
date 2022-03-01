<template lang="pug">
  <ComponentExample titleSize="h4" title="Optional" id="optional" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use <code>optional</code> to help emphasize pickers that are not required and can be skipped.
    fieldset(slot="example")
      legend.chi-label
        | Select options
        abbr.chi-label__optional(title="Optional field") (optional)
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mop`, id=`unique-id-mop${i}`)
          label(for=`unique-id-mop${i}`)
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
    Select options
    <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mop" type="checkbox" id="unique-id-mop1">
    <label for="unique-id-mop1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mop" type="checkbox" id="unique-id-mop2">
    <label for="unique-id-mop2">Option 2</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Optional extends Vue {}
</script>
