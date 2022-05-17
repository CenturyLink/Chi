<template lang="pug">
  ComponentExample(:id="id" :padding="'-p--0'" :codeSnippetWithoutTabs="true")
    .-m--3.-show--example(slot="example")
      p.-text.-pl--1(v-for="lineHeight in lineHeights" :class="lineHeight") {{ lineHeight }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'line-heights-example',
      lineHeights: ['-lh-md--2', '-lh-lg--4', '-lh-sm--5', '-lh-xl--7'],
      codeSnippets: ``
    };
  }
})
export default class Example extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.lineHeights.forEach((lineHeight: string) => {
      this.$data.codeSnippets += `<p class="-text ${lineHeight}">${lineHeight}</p>\n`;
    });
  }
}
</script>
