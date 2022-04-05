<template lang="pug">
  <ComponentExample title="Disable Fluidity" id="disabled-fluidity" :tabs="exampleTabs">
    p.-text(slot="example-description") To disable the fluidity of a specific picker in a fluid picker group, 
      | apply the class <code>-no-fluid</code> to the picker.
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group.-fluid
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-df', :id="`unique-id-df${item}`", :checked="item === 1")
            label(:class="item === 2 ? '-no-fluid' : ''" :for="`unique-id-df${item}`") Option {{ item }}
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
      <input class="chi-picker__input" type="radio" name="unique-name-df" id="unique-id-df1" checked>
      <label for="unique-id-df1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-df" id="unique-id-df2">
      <label class="-no-fluid" for="unique-id-df2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-df" id="unique-id-df3">
      <label for="unique-id-df3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class DisableFluidity extends Vue {}
</script>
