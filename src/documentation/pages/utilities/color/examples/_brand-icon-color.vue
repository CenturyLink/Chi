<template lang="pug">
<ComponentExample title="Brand" id="brand-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0">
  template(#example-description)
    p.-text
      | Brand icon colors reinforce Lumen's brand. Use primary and secondary as accents, and dark, grey, and light as neutrals.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in iconsForLightBg" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
      .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in iconsForDarkBg" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class BrandIconColor extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  iconsForLightBg = ['icon--dark', 'icon--primary', 'icon--grey'];
  iconsForDarkBg = ['icon--secondary', 'icon--light'];

  get codeSnippets() {
    return {
      htmlblueprint: `<!-- For light backgrounds -->
${this.generateHtml(this.iconsForLightBg)}
<!-- For dark backgrounds -->
${this.generateHtml(this.iconsForDarkBg)}
`,
    };
  }
  generateHtml(items: string[]) {
    return items
      .map((item) => {
        return `<i class="chi-icon icon-atom -md -${item}" aria-hidden="true"></i>`;
      })
      .join('\n');
  }
}
</script>
