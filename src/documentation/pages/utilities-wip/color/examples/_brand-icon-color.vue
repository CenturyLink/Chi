<template lang="pug">
  <ComponentExample title="Brand" id="brand-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0">
    p.-text(slot="example-description")
      | Brand icon colors reinforce Lumen's brand. Use primary and secondary as accents, and dark, grey, and light as neutrals.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in iconsForLightBg" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
      .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in iconsForDarkBg" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    };
  }
})
export default class BrandIconColor extends Vue {
  iconsForLightBg = ['icon--dark', 'icon--primary', 'icon--grey']
  iconsForDarkBg = ['icon--secondary', 'icon--light']

  get codeSnippets() {
    return {
      htmlblueprint: (
        `<!-- For light backgrounds -->
${this.generateHtml(this.iconsForLightBg)}
<!-- For dark backgrounds -->
${this.generateHtml(this.iconsForDarkBg)}
`
      )
    }
  }
  generateHtml(items: string[]) {
    return items.map(item => {
      return (
        `<i class="chi-icon icon-atom -md -${item}" aria-hidden="true"></i>`
      )
    }).join('\n');
  }
}
</script>
