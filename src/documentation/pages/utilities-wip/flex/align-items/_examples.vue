<template lang="pug">
  div
    ComponentExample(:padding="'-p--3 -pb--1'" :id="id" :codeSnippetWithoutTabs="true")
      template(slot="example")
        .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="alignItem in alignItems" :class="`-align-items--${alignItem}`" style='height:7rem;')
          .-text.-p--2(v-for="item in items") {{ item }}
      pre(class="language-html" :slot="`code-snippet-${id}`")
        code(v-highlight="codeSnippets" class="html")

    p.-text Target specific breakpoints with Align items responsive classes.
    ul.-mb--3
      li(v-for="alignItem in alignItems")
        code -align-items--{{ alignItem }}
      li(v-for="responsiveAlignItem in responsiveAlignItems")
        code {{ responsiveAlignItem }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'align-items-examples',
      sizes: ['sm', 'md', 'lg', 'xl'],
      alignItems: ['start', 'end', 'center', 'baseline', 'stretch'],
      items: ['Item 1', 'Item 2', 'Item 3'],
      responsiveAlignItems: [],
      codeSnippets: ``
    };
  }
})
export default class AlignItemExamples extends Vue {
  created() {
    this._setCodeSnippets();
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.alignItems.forEach((align: string) => {
        this.$data.responsiveAlignItems.push(`-align-items-${size}--${align}`);
      });
    });
  }

  _setCodeSnippets() {
    this.$data.alignItems.forEach((justifyContent: string) => {
      this.$data.codeSnippets += `<div class="-d--flex -align-items--${justifyContent}"></div>\n`;
    });
  }
}
</script>
