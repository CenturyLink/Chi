<template lang="pug">
  <ComponentExample padding="-p--2" title="Base" id="opacity-base" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
       | Use <code>-opacity--{value}</code> to change the opacity of an element.
    template(#example)
      .chi-grid.-no-gutter
        .chi-col.-w--6.-w-md--4.-w-lg--2.-p--1(v-for="opacity in opacities" :key="opacity")
          .example-opacity.-rounded(style='height: 3rem;')
            .-text.-bg--black.-rounded(:class="`-opacity--${ opacity }`" style='height: 3rem;')
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
export default class Base extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.opacities.map((opacity: number) => `<div class="-opacity--${opacity}">...</div>`).join('\n');
  }
}
</script>
