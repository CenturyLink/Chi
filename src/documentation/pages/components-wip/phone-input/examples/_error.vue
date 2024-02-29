<template lang="pug">
<ComponentExample title="Error" id="error" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>danger</code> state to provide feedback to users when phone number fails to validate.
      | To meet accessibility requirements, phone input must include an error message explaining the
      | failure and/or how to correct it.
  template(#example)
    div(style="max-width: 18rem;")
      chi-label(for="phone-input-error") Phone Number
      chi-phone-input(id="phone-input-error" state="danger" helper-message="Invalid phone number")
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
        webcomponent: `<chi-label for="phone-input-error">Phone Number</chi-label>
<chi-phone-input id="phone-input-error" state="danger" helper-message="Invalid phone number"></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
