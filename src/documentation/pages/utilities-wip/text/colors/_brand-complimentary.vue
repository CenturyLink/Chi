<template lang="pug">
  ComponentExample(title="Brand complimentary" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") More text colors that can be used to compliment the primary brand palette.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
        .-p--1.-p-sm--2.-text--center(v-for="color in colors")
          p.-text(:class="`-text--${color}`") -text--{{ color }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand-complimentary',
      colors: ['navy', 'orange'],
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
      this.$data.codeSnippets += `<p class="-text--${color}">-text--${color}</p>\n`;
    });
  }
}
</script>
