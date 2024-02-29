<template lang="pug">
<ComponentExample titleSize="h4" title="Base" id="base" :tabs="exampleTabs" padding="-p--4">
  template(#example)
    fieldset
      legend.chi-label Select options
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mba`, id=`unique-id-mba${i}`)
          label(for=`unique-id-mba${i}`)
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
    <input class="chi-picker__input" name="unique-name-mba" type="checkbox" id="unique-id-mba1">
    <label for="unique-id-mba1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mba" type="checkbox" id="unique-id-mba2">
    <label for="unique-id-mba2">Option 2</label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
