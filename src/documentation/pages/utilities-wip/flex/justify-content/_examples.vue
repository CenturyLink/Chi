<template lang="pug">
  div
    ComponentExample(:padding="'-p--3 -pb--1'" :id="id" :codeSnippetWithoutTabs="true")
      template(slot="example")
        .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="justifyContent in justifyContents" :class="`-justify-content--${justifyContent}`")
          .-text.-p--2(v-for="item in items") {{ item }}
      pre(class="language-html" :slot="`code-snippet-${id}`")
        code(v-highlight="codeSnippets" class="html")
    
    p.-text Target specific breakpoints with Justify content responsive classes.
    ul.-mb--3
      li(v-for="justifyContent in justifyContents")
        code -justify-content--{{ justifyContent }}
      li(v-for="responsiveJustify in responsiveJustifies")
        code {{ responsiveJustify }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'justify-content-examples',
      sizes: ['sm', 'md', 'lg', 'xl'],
      justifyContents: ['start', 'end', 'center', 'between', 'around'],
      responsiveJustifies: [],
      items: ['Item 1', 'Item 2', 'Item 3'],
      codeSnippets: ``
    };
  }
})
export default class JustifyContentExamples extends Vue {
  created() {
    this._setCodeSnippets();
    this._generateBreakpoints();
  }

  _setCodeSnippets() {
    this.$data.justifyContents.forEach((justifyContent: string) => {
      this.$data.codeSnippets += `<div class="-d--flex -justify-content--${justifyContent}"></div>\n`;
    });
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.justifyContents.forEach((justify: string) => {
        this.$data.responsiveJustifies.push(
          `-justify-content-${size}--${justify}`
        );
      });
    });
  }
}
</script>
