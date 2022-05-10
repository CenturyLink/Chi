<template lang="pug">
  <ComponentExample title="Single-select pickers" id="single-select-pickers" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use single-select pickers when only one option can be chosen.
    fieldset(slot="example")
      legend.chi-label Legend
      each i in [1, 2]
        .chi-picker
          input(type="radio", class="chi-picker__input", name='unique-name-sba', id=`unique-id-sba${i}`, checked=(i === 1))
          label(for=`unique-id-sba${i}`)
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
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sba" type="radio" id="unique-id-sba1" />
    <label for="unique-id-sba1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sba" type="radio" id="unique-id-sba2" />
    <label for="unique-id-sba2">Option 2</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class SingleSelectPickers extends Vue {}
</script>
