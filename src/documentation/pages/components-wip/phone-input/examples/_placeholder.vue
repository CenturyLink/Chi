<template lang="pug">
<ComponentExample title="Placeholder" id="placeholder" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>placeholder</code> attribute to provide users with an example of the type of data
      | that can be entered into a Phone input. <strong>Note:</strong> Placeholder text is not persistent and visually
      | disappears when a value is entered.
  template(#example)
    div(style="max-width: 18rem;")
      chi-label(for="phone-input-placeholder") Phone Number
      chi-phone-input(id="phone-input-placeholder" placeholder="e.g. (123) 456-7890")
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
        webcomponent: `<chi-label for="phone-input-placeholder">Phone Number</chi-label>
<chi-phone-input id="phone-input-placeholder" placeholder="e.g. (123) 456-7890"></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Placeholder extends Vue {}
</script>
