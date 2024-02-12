<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    template(#example)
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-base") Phone Number
        chi-phone-input(id="phone-input-base")
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
        webcomponent: `<chi-label for="phone-input-base">Phone Number</chi-label>
<chi-phone-input id="phone-input-base"></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Base extends Vue { }
</script>
