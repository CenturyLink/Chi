<template lang="pug">
<ComponentExample title="Sizes" titleSize="h4" id="sizes-lumen-centurylink" :tabs="exampleTabs">
  template(#example)
    .chi-grid.-align-items--end
      .-p--2(v-for="size in ['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']")
        chi-spinner(:size="size", class='-m--1')
        p.-text.-text--center {{size}}
  template(#code-webcomponent)
    .chi-tab__description
      | By default, spinners are rendered at 16x16px (<code>sm</code>).
      | Set <code>size</code> attribute to render spinners larger or smaller: <code>xs</code>,
      | <code>sm</code>, <code>sm--2</code>, <code>sm--3</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>xxl</code>.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | By default, spinners render at 16x16px (<code>-sm</code>).
      | Apply size classes to render spinners larger or smaller: <code>-xs</code>,
      | <code>-sm</code>, <code>-sm--2</code>, <code>-sm--3</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>, <code>-xxl</code>.
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
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- xs : 12x12px -->
<chi-spinner size="xs"></chi-spinner>
<!-- sm : 16x16px -->
<chi-spinner size="sm"></chi-spinner>
<!-- sm--2 : 20x20px -->
<chi-spinner size="sm--2"></chi-spinner>
<!-- sm--3 : 24x24px -->
<chi-spinner size="sm--3"></chi-spinner>
<!-- md : 32x32px -->
<chi-spinner size="md"></chi-spinner>
<!-- lg : 64x64px -->
<chi-spinner size="lg"></chi-spinner>
<!-- xl : 96x96px -->
<chi-spinner size="xl"></chi-spinner>
<!-- xxl : 128x128px -->
<chi-spinner size="xxl"></chi-spinner>`,
        htmlblueprint: `<!-- -xs : 12x12px -->
<svg class="chi-spinner -xs" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm : 16x16px -->
<svg class="chi-spinner -sm" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm--2 : 20x20px -->
<svg class="chi-spinner -sm--2" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -sm--3 : 24x24px -->
<svg class="chi-spinner -sm--3" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -md : 32x32px -->
<svg class="chi-spinner -md" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -lg : 64x64px -->
<svg class="chi-spinner -lg" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
<!-- -xl : 96x96px -->
<svg class="chi-spinner -xl" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>
</div>
<!-- -xxl : 128x128px -->
<svg class="chi-spinner -xxl" viewBox="0 0 66 66">
  <title>Loading</title>
  <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
</svg>`,
      },
    };
  },
})
export default class SizesLumenCenturyLink extends Vue {}
</script>
