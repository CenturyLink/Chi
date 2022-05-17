<template lang="pug">
  div
    ComponentExample(v-for="align in alignSelfs" :key="align" :title="setTitle(align)" :padding="'-p--3 -pb--1'" :id="`align-self-${align}`" :codeSnippetWithoutTabs="true")
      .-mb--2.-d--flex.-show--example.-bg--grey-10(slot="example" style="height:7rem;")
        .-text.-p--2(v-for="item, index in items" :class="index === 1 ? `-align-self--${align}` : ''") {{ item }}
      pre(class="language-html" :slot="`code-snippet-align-self-${align}`")
        code(v-highlight="setCodeSnippets(align)" class="html")
    
    p.-text Target specific breakpoints with Align self responsive classes.
    ul.-mb--3
      li(v-for="alignSelf in alignSelfs")
        code -align-self--{{ alignSelf }}
      li(v-for="responsiveAlignSelf in responsiveAlignSelfs")
        code {{ responsiveAlignSelf }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl'],
      items: ['Item', 'Aligned Item', 'Item'],
      alignSelfs: ['start', 'end', 'center', 'baseline', 'stretch'],
      responsiveAlignSelfs: []
    };
  }
})
export default class AlignSelfExamples extends Vue {
  created() {
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.alignSelfs.forEach((align: string) => {
        this.$data.responsiveAlignSelfs.push(
          `-align-self-${size}--${align}`
        );
      });
    });
  }

   setCodeSnippets(align: string) {
    let codeSnippet = `<div class="-d--flex">\n`;
    
    this.$data.items.forEach((item: string, index: number) => {
      codeSnippet += `  <div${
        index === 1 ? ` class="-align-self--${align}"` : ''
      }>${item}</div>\n`;
    });

   return codeSnippet + '</div>';
  }

  setTitle(align: string) {
    const defaultTitle = align === 'start' ? ' (Browser default)' : '';

    return align.charAt(0).toUpperCase() + align.slice(1) + defaultTitle;
  }
}
</script>
