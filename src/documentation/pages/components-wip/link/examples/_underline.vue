<template lang="pug">
<ComponentExample title="Underline" id="underline" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Use to render an underline on a link.
  template(#example)
    chi-link(href="#" underline) Link
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
        webcomponent: `<chi-link href="#" underline>Link</chi-link>`,
        htmlblueprint: `<a class="chi-link underline" href="#">Link</a>`,
      },
    };
  },
})
export default class Underline extends Vue {}
</script>
