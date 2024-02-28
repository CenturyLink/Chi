<template lang="pug">
<ComponentExample title="Hreflang" id="hreflang" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Use to set the language of the link.
  template(#example)
    chi-link(href="#" hreflang="en") Link
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
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-link href="#" hreflang="en">Link</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" hreflang="en">Link</a>`,
      },
    };
  },
})
export default class Hreflang extends Vue {}
</script>
