<template lang="pug">
  ComponentExample(title="Brand complimentary" :id="id" :padding="'-p--0'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") More icon colors that can be used to compliment the primary brand palette.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        i.chi-icon.icon-atom.-md.-m--1(v-for="color in colors" :class="`-${color}`", aria-hidden='true')
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand-complimentary-example-icon-color',
      colors: ['icon--navy', 'icon--orange'],
      codeSnippets: ``
    };
  }
})
export default class BrandComplimentary extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.colors.forEach((color: string) => {
      this.$data.codeSnippets += `\n<i class="chi-icon icon-atom -md -${color}" aria-hidden="true"></i>`;
    });
  }
}
</script>
