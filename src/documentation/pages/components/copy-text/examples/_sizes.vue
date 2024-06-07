<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Copy text button supports the following sizes: <code>xs</code>, <code>sm</code>, <code>sm--2</code>, <code>sm--3</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>xxl</code>
    template(#example)
      .chi-grid.-align-items--end
          div.-m--1(v-for="size in sizes")
            chi-copy-text(text="text", :size='size')
            p.-text.-text--center {{size}}
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Sizes extends Vue {
  exampleTabs = [
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
  ];
  sizes = ['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl'];
  codeSnippets = {
    webcomponent: `<!-- -xs : 12x12px -->
<chi-copy-text text="text" size="xs"></chi-copy-text>
<!-- sm : 16x16px -->
<chi-copy-text text="text" size="sm"></chi-copy-text>
<!-- sm--2 : 20x20px -->
<chi-copy-text text="text" size="sm--2"></chi-copy-text>
<!-- sm--3 : 24x24px -->
<chi-copy-text text="text" size="sm--3"></chi-copy-text>
<!-- md : 32x32px -->
<chi-copy-text text="text" size="md"></chi-copy-text>
<!-- lg : 64x64px -->
<chi-copy-text text="text" size="lg"></chi-copy-text>
<!-- xl : 96x96px -->
<chi-copy-text text="text" size="xl"></chi-copy-text>
<!-- xxl : 128x128px -->
<chi-copy-text text="text" size="xxl"></chi-copy-text>`,
    htmlblueprint: ``,
  };
}
</script>
