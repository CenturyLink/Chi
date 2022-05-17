<template lang="pug">
  ComponentExample(title="Examples" :titleSize="'h2'" :id="id" :padding="'-p--3'" :codeSnippetWithoutTabs="true")
    .-show--example(slot="example")
      .-text.-p--3.-m--1(v-for="width in widths" :class="width") {{ width }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size-width-examples',
      widths: ['-w--auto', '-w--25', '-w--50', '-w-md--75', '-w-xl--50'],
      codeSnippets: ``
    };
  }
})
export default class Examples extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.widths.forEach((width: string) => {
      this.$data.codeSnippets += `<!-- ${
        width.includes('-w--auto')
          ? 'width auto on all breakpoints'
          : width.includes('-w--25') || width.includes('-w--50')
          ? `width ${width.slice(4, width.length)}% on all breakpoints`
          : width.includes('-w-md--75')
          ? `width ${width.slice(7, width.length)}% from md`
          : `width ${width.slice(7, width.length)}% from xl`
      } -->\n<div class="${width}"></div>\n`;
    });
  }
}
</script>
