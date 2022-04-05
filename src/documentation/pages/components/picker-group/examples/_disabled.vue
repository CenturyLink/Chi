<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the <code>disabled</code> boolean attribute to prevent users from interacting with a picker group input. 
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-di', :id="`unique-id-di${item}`", :disabled="item === 3")
            label(:for="`unique-id-di${item}`") Option {{ item }}
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
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-di" id="unique-id-di1">
      <label for="unique-id-di1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-di" id="unique-id-di2">
      <label for="unique-id-di2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-di" id="unique-id-di3" disabled>
      <label for="unique-id-di3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
