<template lang="pug">
  ComponentExample(title="Brand" :id="id" :padding="'-p--0'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Brand icon colors reinforce Lumen's brand. Use primary and secondary as accents, and dark, grey, and light as neutrals.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center(v-for="col in themes" :class="`${col == 'dark' ? '-bg--black' : ''}`")
        i.chi-icon.icon-atom.-md.-m--1(v-if="col === 'light'" v-for="color in lightColors" :class="`-${color}`", aria-hidden='true')
        i.chi-icon.icon-atom.-md.-m--1(v-if="col === 'dark'" v-for="color in darkColors" :class="`-${color}`", aria-hidden='true')
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand-example-icon-color',
      themes: ['light', 'dark'],
      lightColors: ['icon--dark', 'icon--primary', 'icon--grey'],
      darkColors: ['icon--secondary', 'icon--light'],
      codeSnippets: ``
    };
  }
})
export default class Brand extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let lightSnippets = '<!-- For light backgrounds -->';
    let darkSnippets = `<!-- For dark backgrounds -->`;

    this.$data.lightColors.forEach((color: string) => {
      lightSnippets += `\n<i class="chi-icon icon-atom -md -${color}" aria-hidden="true"></i>`;
    });

    this.$data.darkColors.forEach((color: string) => {
      darkSnippets += `\n<i class="chi-icon icon-atom -md -${color}" aria-hidden="true"></i>`;
    });

    this.$data.codeSnippets = lightSnippets + '\n\n' + darkSnippets;
  }
}
</script>
