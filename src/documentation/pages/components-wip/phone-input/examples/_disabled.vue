<template lang="pug">
  <ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the <code>disabled</code> boolean attribute to prevent users from interacting with the phone input.
        | Disabled phone inputs can not receive any browsing events such as prefix selection, mouse clicks or focus.
    template(#example)
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-disabled") Phone Number
        chi-phone-input(id="phone-input-disabled" disabled="true")
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
        webcomponent: `<chi-label for="phone-input-disabled">Phone Number</chi-label>
<chi-phone-input id="phone-input-disabled" disabled></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Disabled extends Vue { }
</script>
