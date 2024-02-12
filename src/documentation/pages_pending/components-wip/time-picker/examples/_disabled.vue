<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>disabled</code> boolean attribute to prevent users from interacting with an input.
        | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
        | <strong>Note:</strong> The required attribute can not be used on inputs with a disabled attribute specified.
    template(#example)
      .chi-form__item(style="max-width: 14rem;")
        chi-label(for="example__disabled") Label
        chi-time-picker(id="example__disabled" disabled)
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="example__disabled">Label</chi-label>
<chi-time-picker id="example__disabled" disabled></chi-time-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Disabled extends Vue { }
</script>
