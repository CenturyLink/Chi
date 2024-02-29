<template lang="pug">
<ComponentExample title="Default Country" id="default-country" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the <code>default-country</code> attribute to set a default two-letter country code. Defaults to "US".
  template(#example)
    div(style="max-width: 18rem;")
      chi-label(for="phone-input-default-country") Phone Number
      chi-phone-input(id="phone-input-default-country" default-country="US")
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
        webcomponent: `<chi-label for="phone-input-default-country">Phone Number</chi-label>
<chi-phone-input id="phone-input-default-country" default-country="US"></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DefaultCountry extends Vue {}
</script>
