<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs" additionalClasses="-text">
  template(#example-description)
    p.-text
      | Make links appear inactive by adding the <code>disabled</code> boolean attribute or <code>-disabled</code> class.
  template(#example)
    chi-link(href="#" disabled) Link
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
        webcomponent: `<chi-link href="#" disabled>Link</chi-link>`,
        htmlblueprint: `<a class="chi-link -disabled" href="#">Link</a>`,
      },
    };
  },
})
export default class Disabled extends Vue { }
</script>
