<template lang="pug">
  <ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the <code>checked</code> boolean attribute to set the default value of a picker group input to true.
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-ch', :id="`unique-id-ch${item}`", :checked="item === 1")
            label(:for="`unique-id-ch${item}`") Option {{ item }}
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
      <input class="chi-picker__input" type="radio" name="unique-name-ch" id="unique-id-ch1" checked>
      <label for="unique-id-ch1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-ch" id="unique-id-ch2">
      <label for="unique-id-ch2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-ch" id="unique-id-ch3">
      <label for="unique-id-ch3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Checked extends Vue {}
</script>
