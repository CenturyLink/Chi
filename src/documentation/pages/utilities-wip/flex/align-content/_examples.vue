<template lang="pug">
  div
    ComponentExample(v-for="align in alignContents" :key="align" :title="setTitle(align)" :padding="'-p--3 -pb--1'" :id="`align-content-${align}`" :codeSnippetWithoutTabs="true")
      .-mb--2.-d--flex.-flex--wrap.-show--example.-bg--grey-10(slot="example" :class="`-align-content--${align}`" style="height:12rem;")
        .-text.-p--2(v-for="item in Array(20).fill('Item')") {{ item }}
      pre(class="language-html" :slot="`code-snippet-align-content-${align}`")
        code(v-highlight="setCodeSnippets(align)" class="html")
    
    p.-text Target specific breakpoints with Align content responsive classes.
    ul.-mb--3
      li(v-for="alignContent in alignContents")
        code -align-content--{{ alignContent }}
      li(v-for="responsiveAlignContent in responsiveAlignContents")
        code {{ responsiveAlignContent }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl'],
      alignContents: ['start', 'end', 'center', 'around', 'between', 'stretch'],
      responsiveAlignContents: []
    };
  }
})
export default class AlignContentExamples extends Vue {
  created() {
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.alignContents.forEach((align: string) => {
        this.$data.responsiveAlignContents.push(
          `-align-content-${size}--${align}`
        );
      });
    });
  }

  setCodeSnippets(align: string) {
    return `<div class="-d--flex -align-content--${align} -flex--wrap">\n  <div>Item</div>\n</div>`;
  }

  setTitle(align: string) {
    const defaultTitle = align === 'start' ? ' (default)' : '';

    return align.charAt(0).toUpperCase() + align.slice(1) + defaultTitle;
  }
}
</script>
