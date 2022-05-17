<template lang="pug">
  div
    ComponentExample(:padding="'-p--3 -pb--1'" :id="id" :codeSnippetWithoutTabs="true")
      .-mb--2.-d--flex.-show--example.-bg--grey-10(slot="example")
        .-text.-p--2(v-for="item, index in Array(3).fill('Item')" :class="index === 0 ? '-flex--grow1' : ''") {{ item }}
      pre(class="language-html" :slot="`code-snippet-${id}`")
        code(v-highlight="codeSnippets" class="html")
        
    p.-text Target specific breakpoints with Grow responsive classes.
    ul.-mb--3
      li(v-for="grow in grows")
        code -flex--grow{{ grow }}
      li(v-for="responsiveGrow in responsiveGrows")
        code {{ responsiveGrow }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'grow-examples',
      grows: [0, 1],
      sizes: ['sm', 'md', 'lg', 'xl'],
      responsiveGrows: [],
      codeSnippets: ``
    };
  }
})
export default class GrowExamples extends Vue {
  created() {
    this._setCodeSnippets();
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.grows.forEach((grow: string) => {
        this.$data.responsiveGrows.push(`-flex-${size}--grow${grow}`);
      });
    });
  }

  _setCodeSnippets() {
    let codeSnippet = `<div class="-d--flex">\n`;

    Array(3)
      .fill('Item')
      .forEach((item: string, index: number) => {
        codeSnippet += `  <div${
          index === 0 ? ' class="-flex--grow1"' : ''
        }>${item}</div>\n`;
      });

    this.$data.codeSnippets = codeSnippet + '</div>';
  }
}
</script>
