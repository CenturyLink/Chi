<template lang="pug">
<ComponentExample title="Single-select pickers" id="single-select-pickers" :tabs="exampleTabs" padding="-p--4">
  template(#example-description)
    p.-text
      | Use single-select pickers when only one option can be chosen.
  template(#example)
    fieldset
      legend.chi-label Legend
      each i in [1, 2]
        .chi-picker
          input(type="radio", class="chi-picker__input", name='unique-name-sba', id=`unique-id-sba${i}`, checked=(i === 1))
          label(for=`unique-id-sba${i}`)
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
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sba" type="radio" id="unique-id-sba1" />
    <label for="unique-id-sba1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sba" type="radio" id="unique-id-sba2" />
    <label for="unique-id-sba2">Option 2</label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class SingleSelectPickers extends Vue {}
</script>
