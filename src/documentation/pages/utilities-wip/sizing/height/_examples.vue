<template lang="pug">
  ComponentExample(title="Examples" :titleSize="'h2'" :id="id" :padding="'-p--3'" :codeSnippetWithoutTabs="true")
    .-d--flex.-flex--row.-justify-content--around.-show--example(slot="example" style="height: 500px;")
      .-text.-p--5.-m--1(v-for="height in heights" :class="height") {{ height }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size-width-examples',
      heights: ['-h--25', '-h--50', '-h-md--75', '-h-xl--50', '-h-lg--25'],
      codeSnippets: `<!-- height auto on all breakpoints -->
<div class="-h--auto"></div>\n`
    };
  }
})
export default class Examples extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.heights.forEach((height: string) => {
      this.$data.codeSnippets += `<!-- ${
        height.includes('-h--25') || height.includes('-h--50')
          ? `height ${height.slice(4, height.length)}% on all breakpoints`
          : height.includes('-h-md--75')
          ? `height ${height.slice(7, height.length)}% from md`
          : height.includes('-h-xl--50')
          ? `height ${height.slice(7, height.length)}% from xl`
          : `height ${height.slice(7, height.length)}% from lg`
      } -->\n<div class="${height}"></div>\n`;
    });
  }
}
</script>
