<template lang="pug">
  <ComponentExample title="Alignment" id="alignment-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Picker group text is centered by default. However, this behavior can change 
      | by applying the modifiers <code>-align--left</code> or <code>-align--right</code>.
    fieldset(slot="example")
      legend.chi-label Select an option
      .chi-picker-group.-fluid
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='unique-name-al', :id="`unique-id-al${item}`" :checked="item === 1")
            label(:class="[(item === 1 ? '-align--left' : ''), (item === 3 ? '-align--right' : '')]" :for="`unique-id-al${item}`") Option {{ item }}
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
      <input class="chi-picker__input" type="radio" name="unique-name-al" id="unique-id-al1" checked>
      <label class="-align--left" for="unique-id-al1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-al" id="unique-id-al2">
      <label for="unique-id-al2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-al" id="unique-id-al3">
      <label class="-align--right" for="unique-id-al3">Option 3</label>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class AlignmentLumenCenturyLink extends Vue {}
</script>
