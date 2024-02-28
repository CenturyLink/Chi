<template lang="pug">
<ComponentExample title="Value" id="value" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>value</code> attribute to set a default phone number.
  template(#example)
    div(style="max-width: 18rem;")
      chi-label(for="phone-input-value") Phone Number
      chi-phone-input(id="phone-input-value" default-country="US" value="+1-6045551212")
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
        webcomponent: `<chi-label for="phone-input-value">Phone Number</chi-label>
<chi-phone-input id="phone-input-value" default-country="US" value="+1-6045551212"></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Value extends Vue {}
</script>
