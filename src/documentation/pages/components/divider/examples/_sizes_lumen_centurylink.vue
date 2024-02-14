<template lang="pug">
  <ComponentExample title="Additional Sizes" id="sizes_lumen_centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use border top <a href="../../utilities/border">utilities</a> such as
        | <code>-bt--1</code>, <code>-bt--2</code>, <code>-bt--3</code>, or <code>-bt--4</code> to customize a dividers size.
    template(#example)
      p.-text.-m--0
        | -bt--1
      .chi-divider.-bt--1
      .-p--3
      p.-text.-m--0
        | -bt--2
      .chi-divider.-bt--2
      .-p--3
      p.-text.-m--0
        | -bt--3
      .chi-divider.-bt--3
      .-p--3
      p.-text.-m--0
        | -bt--4
      .chi-divider.-bt--4

    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SizesLumenCenturyLink extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-divider -bt--1"></div>
<div class="chi-divider -bt--2"></div>
<div class="chi-divider -bt--3"></div>
<div class="chi-divider -bt--4"></div>`,
  };
}
</script>
