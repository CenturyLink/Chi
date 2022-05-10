<template lang="pug">
  <ComponentExample titleSize="h4" title="Disabled" id="disabled" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with a picker input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
    fieldset(slot="example")
      legend.chi-label Select options
      each i in [1, 2, 3]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mdi`, id=`unique-id-mdi${i}`, disabled=(i === 3))
          label(for=`unique-id-mdi${i}`)
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
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi1">
    <label for="unique-id-mdi1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi2">
    <label for="unique-id-mdi2">Option 2</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi3" disabled>
    <label for="unique-id-mdi3">Option 3</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
