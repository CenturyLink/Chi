<template lang="pug">
  <ComponentExample titleSize="h4" title="Base" id="base" :tabs="exampleTabs" padding="-p--4">
    fieldset(slot="example")
      legend.chi-label Select options
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mba`, id=`unique-id-mba${i}`)
          label(for=`unique-id-mba${i}`)
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
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mba" type="checkbox" id="unique-id-mba1">
    <label for="unique-id-mba1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mba" type="checkbox" id="unique-id-mba2">
    <label for="unique-id-mba2">Option 2</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
