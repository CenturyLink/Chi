<template lang="pug">
  div
    ComponentExample(:padding="'-p--3 -pb--1'" :id="id" :codeSnippetWithoutTabs="true")
      .-mb--2.-d--flex.-show--example.-bg--grey-10(slot="example")
        .-text.-p--2.-flex--fill(v-for="item in Array(3).fill('Item')") {{ item }}
      pre(class="language-html" :slot="`code-snippet-${id}`")
        code(v-highlight="codeSnippets" class="html")
    
    p.-text Target specific breakpoints with Fill responsive classes.
    ul.-mb--3
      li
        code -flex--fill
      li(v-for="size in sizes")
        code -flex-{{ size }}--fill
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'fill-examples',
      sizes: ['sm', 'md', 'lg', 'xl'],
      codeSnippets: ``
    };
  }
})
export default class FillExamples extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let codeSnippet = `<div class="-d--flex">\n`;

    Array(3)
      .fill('Item')
      .forEach((item: string) => {
        codeSnippet += `  <div class="-flex--fill">${item}</div>\n`;
      });

    this.$data.codeSnippets = codeSnippet + '</div>';
  }
}
</script>
