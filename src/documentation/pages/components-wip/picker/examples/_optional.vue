<template lang="pug">
  <ComponentExample titleSize="h4" title="Optional" id="optional" :tabs="exampleTabs" padding="-p--4">
    template(#example-description)
      p.-text
        | Use <code>optional</code> to help emphasize pickers that are not required and can be skipped.
    template(#example)
      fieldset
        legend.chi-label
          | Select options
          abbr.chi-label__optional(aria-label="Optional field") (optional)
        each i in [1, 2]
          .chi-picker
            input(type="checkbox", class="chi-picker__input", name=`unique-name-mop`, id=`unique-id-mop${i}`)
            label(for=`unique-id-mop${i}`)
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
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mop" type="checkbox" id="unique-id-mop1">
    <label for="unique-id-mop1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mop" type="checkbox" id="unique-id-mop2">
    <label for="unique-id-mop2">Option 2</label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Optional extends Vue {}
</script>
