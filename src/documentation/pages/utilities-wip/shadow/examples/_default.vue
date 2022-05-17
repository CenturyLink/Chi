<template lang="pug">
  ComponentExample(title="Default" :id="id" :codeSnippetWithoutTabs="true" :additionalStyle="'background:#F5F5F5;'")
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .-p--5.-m--2(v-for="item, index in Array(6)" :class="`-s--${index}`" style="background:#FFFFFF;") -s--{{ index }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'default-example',
      codeSnippets: ``
    };
  }
})
export default class Default extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    Array(6)
      .fill(0)
      .forEach((item, index: number) => {
        this.$data.codeSnippets += `<div class="-s--${index}"></div>\n`;
      });
  }
}
</script>
