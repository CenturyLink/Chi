<template lang="pug">
<ComponentExample titleSize="h4" title="Checked" id="checked" :tabs="exampleTabs" padding="-p--4">
  template(#example-description)
    p.-text
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a picker input to true.
  template(#example)
    fieldset
      legend.chi-label Select options
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mch`, id=`unique-id-mch${i}`, checked=(i === 1))
          label(for=`unique-id-mch${i}`)
            = 'Option ' + `${i}`
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mch" type="checkbox" id="unique-id-mch1" checked>
    <label for="unique-id-mch1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mch" type="checkbox" id="unique-id-mch2">
    <label for="unique-id-mch2">Option 2</label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Checked extends Vue {}
</script>
