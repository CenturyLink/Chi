<template lang="pug">
  <ComponentExample padding="-p--2" title="Hover" id="opacity-hover" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use <code>-opacity-hover--{value}</code> to change the opacity of an element on hover.
    template(#example)
      .chi-grid.-no-gutter
        .chi-col.-w--6.-w-md--4.-w-lg--2(v-for="opacity in opacities")
          .-text.-text--center.-b--1.-rounded.-m--1.-p--2(:class="[`-opacity-hover--${ opacity }`, opacity === 100 ? '-opacity--60' : '']") {{ opacity + '% on hover' }}
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      opacities: [0, 20, 40, 60, 80, 100],
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class Hover extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return (
      this.opacities
        .slice(0, 5)
        .map((opacity: number) => `<div class="-opacity-hover--${opacity}">...</div>\n`)
        .join('') + '<div class="-opacity--60 -opacity-hover--100">...</div>'
    );
  }
}
</script>
