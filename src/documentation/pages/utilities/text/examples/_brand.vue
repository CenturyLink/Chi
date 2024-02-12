<template lang="pug">
  <ComponentExample padding="-p--0" title="Brand" id="text-brand" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Brand text colors reinforce Lumen's brand. Use primary and secondary as accents and body and light as neutrals.
    template(#example)
      .chi-grid.-no-gutter
        .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
          .-p--1.-p-sm--2.-text--center(v-for="background in lightBackgrounds")
            p.-text(:class="`-text--${background}`") -text--{{ background }}
        .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
          .-p--1.-p-sm--2.-text--center(v-for="backgroundDark in darkBackgrounds")
            p.-text(:class="`-text--${backgroundDark}`") -text--{{ backgroundDark }}
    template(#code-htmlblueprint)
       Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Brand extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  lightBackgrounds = ['body', 'primary'];
  darkBackgrounds = ['secondary', 'light'];

  get codeSnippets() {
    return {
      htmlblueprint: `<!-- For light backgrounds -->
${this.generateHtml(this.lightBackgrounds)}
<!-- For dark backgrounds -->
${this.generateHtml(this.darkBackgrounds)}
`,
    };
  }

  generateHtml(items: string[]) {
    return items
      .map((item) => {
        return `<p class="-text--${item}">-text--${item}</p>`;
      })
      .join('\n');
  }
}
</script>
