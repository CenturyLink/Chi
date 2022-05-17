<template lang="pug">
  div
    ComponentExample(:padding="'-p--3 -pb--1'" :id="id" :codeSnippetWithoutTabs="true")
      .-mb--2.-d--flex.-show--example.-bg--grey-10(slot="example")
        .-text.-p--2(v-for="item, index in items" :class="index === 1 ? '-flex--shrink1' : ''" :style="index === 0 ? 'width:100%;' : ''") {{ item }}
      pre(class="language-html" :slot="`code-snippet-${id}`")
        code(v-highlight="codeSnippets" class="html")
    
    p.-text Target specific breakpoints with Grow responsive classes.
    ul.-mb--3
      li(v-for="shrink in shrinks")
        code -flex--shrink{{ shrink }}
      li(v-for="responsiveShrink in responsiveShrinks")
        code {{ responsiveShrink }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'shrink-examples',
      items: ['Item', 'Shrink Item'],
      shrinks: [0, 1],
      sizes: ['sm', 'md', 'lg', 'xl'],
      responsiveShrinks: [],
      codeSnippets: ``
    };
  }
})
export default class ShrinkExamples extends Vue {
  created() {
    this._setCodeSnippets();
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.shrinks.forEach((shrink: string) => {
        this.$data.responsiveShrinks.push(`-flex-${size}--shrink${shrink}`);
      });
    });
  }

  _setCodeSnippets() {
    let codeSnippet = `<div class="-d--flex">\n`;

    this.$data.items.forEach((item: string, index: number) => {
      codeSnippet += `  <div ${index === 0 ? 'style="width:100%;' : ''}${
        index === 1 ? 'class="-flex--shrink1' : ''
      }">${item}</div>\n`;
    });

    this.$data.codeSnippets = codeSnippet + '</div>';
  }
}
</script>
