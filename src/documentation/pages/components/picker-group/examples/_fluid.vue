<template lang="pug">
  <ComponentExample title="Fluid" id="fluid" :tabs="exampleTabs">
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group.-fluid
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-fl', :id="`unique-id-fl${item}`" :checked="item === 1")
            label(:for="`unique-id-fl${item}`") Option {{ item }}
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
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-fl" id="unique-id-fl1" checked>
      <label for="unique-id-fl1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-fl" id="unique-id-fl2">
      <label for="unique-id-fl2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-fl" id="unique-id-fl3">
      <label for="unique-id-fl3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Fluid extends Vue {}
</script>
