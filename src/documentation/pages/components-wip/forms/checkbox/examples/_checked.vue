<template lang="pug">
<ComponentExample title="Checked" id="checked" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a checkbox to true.
  template(#example)
    .chi-form__item
      .chi-checkbox
        input(type="checkbox" class="chi-checkbox__input" id="checkbox-ch1" checked)
        label(for="checkbox-ch1" class="chi-checkbox__label") Checkbox
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
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-checkbox">
    <input type="checkbox" class="chi-checkbox__input" id="checkbox-ch1" checked>
    <label class="chi-checkbox__label" for="checkbox-ch1">Checkbox</label>
  </div>
</div>`,
      },
    };
  },
})
export default class Checked extends Vue {}
</script>
