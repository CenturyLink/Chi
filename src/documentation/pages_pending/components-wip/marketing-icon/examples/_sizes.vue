<template lang="pug">
<ComponentExample title="Sizes" id="sizes" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Icons support the following sizes:
      | <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>.
      | By default, icons render at 96x96px (<code>md</code>).
  template(#example)
    .chi-grid.-align-items--end
      each size in ['xs', 'sm', 'md', 'lg']
        div.-p--2.-m--1
          chi-marketing-icon(icon="business-big-data", size=size)
          p.-text.-text--center= size

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")

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
        webcomponent: `<!-- xs : 72x72px -->
<chi-marketing-icon icon="business-big-data" size="xs"></chi-marketing-icon>
<!-- sm : 80x80px -->
<chi-marketing-icon icon="business-big-data" size="sm"></chi-marketing-icon>
<!-- md : 96x96px -->
<chi-marketing-icon icon="business-big-data" size="md"></chi-marketing-icon>
<!-- lg : 128x128px -->
<chi-marketing-icon icon="business-big-data" size="lg"></chi-marketing-icon>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class Sizes extends Vue {}
</script>
