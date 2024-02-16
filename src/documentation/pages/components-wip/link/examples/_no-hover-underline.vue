<template lang="pug">
<ComponentExample title="No Underline on Hover" id="no-hover-underline" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Use to remove a link's underline on hover.
  template(#example)
    chi-link(href="#" no-hover-underline) Link
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
        webcomponent: `<chi-link href="#" no-hover-underline>Link</chi-link>`,
        htmlblueprint: `<a class="chi-link -no-hover-underline" href="#">Link</a>`,
      },
    };
  },
})
export default class NoHoverUnderline extends Vue { }
</script>
