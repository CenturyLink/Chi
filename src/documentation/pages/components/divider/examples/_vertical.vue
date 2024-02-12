<template lang="pug">
  <ComponentExample title="Vertical" id="vertical" :tabs="exampleTabs" padding="-p--0">
    template(#example-description)
      p.-text To render a vertical divider, apply <code>-vertical</code> and ensure the parent container has a height specified.
    template(#example)
      .-p--3.-text.-d--flex.-align-items--center(style="height:72px")
        | Option
        .chi-divider.-vertical
        | Option
        .chi-divider.-vertical
        | Option
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Vertical extends Vue {
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
    htmlblueprint: `<div class="chi-divider -vertical"></div>`,
  };
}
</script>
