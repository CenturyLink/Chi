<template lang="pug">
  <ComponentExample title="Additional Sizes" id="additional-sizes" :tabs="exampleTabs" additionalClasses="-text">
    template(#example-description)
      p.-text
      | Links support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
      | By default, links inherit the font-size of their parent element.
    template(#example)
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        p.-text--bold= size
        chi-link(href="#", size=size) Link

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
        webcomponent: `<!-- xs -->
<chi-link href="#" size="xs">Link</chi-link>

<!-- sm -->
<chi-link href="#" size="sm">Link</chi-link>

<!-- md -->
<chi-link href="#" size="md">Link</chi-link>

<!-- lg -->
<chi-link href="#" size="lg">Link</chi-link>

<!-- xl -->
<chi-link href="#" size="xl">Link</chi-link>`,
        htmlblueprint: `<!-- xs -->
<a class="chi-link -xs" href="#">Link</a>

<!-- sm -->
<a class="chi-link -sm" href="#">Link</a>

<!-- md -->
<a class="chi-link -md" href="#">Link</a>

<!-- lg -->
<a class="chi-link -lg" href="#">Link</a>

<!-- xl -->
<a class="chi-link -xl" href="#">Link</a>`,
      },
    };
  },
})
export default class AdditionalSizes extends Vue {}
</script>
