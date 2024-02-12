<template lang="pug">
  <ComponentExample title="CTA" id="cta" :tabs="exampleTabs" additionalClasses="-text">
    template(#example-description)
      p.-text
        | Call to action (CTA) links are prominent links used primarily on marketing web pages to encourage
        | users to perform a specific action (e.g. Get started, Learn more). Use <a href="#additional-sizes">link sizes</a> to render CTA links
        | larger or smaller.
    template(#example)
      chi-link(href="#" cta) Learn more
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
        webcomponent: `<chi-link href="#" cta>Learn more</chi-link>`,
        htmlblueprint: `<a class="chi-link -cta" href="#">Learn more</a>`,
      },
    };
  },
})
export default class CTA extends Vue { }
</script>
