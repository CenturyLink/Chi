<template lang="pug">
  ComponentExample(title="Text line height" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") 
      | Use shorthand utility classes to control an element's line-height. Line height sizes are equal to <code>$base-unit * {size}</code>
      | and illustrated in green in the example below.
    .-m--3.-show--example(slot="example")
       p.-text.-pl--1(v-for="line in lineHeights" :class="`-${line}`") -{{ line }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-line-height',
      lineHeights: [
        'lh--1',
        'lh--2',
        'lh--3',
        'lh--4',
        'lh--5',
        'lh--6',
        'lh--7',
        'lh--8',
        'lh--9'
      ],
      codeSnippets: ``
    };
  }
})
export default class TextLineHeight extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.lineHeights.forEach((line: string) => {
      this.$data.codeSnippets += `<p class="-text -${line}">-${line}</p>\n`;
    });
  }
}
</script>
