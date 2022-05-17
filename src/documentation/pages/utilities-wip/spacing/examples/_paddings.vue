<template lang="pug">
  ComponentExample(title="Paddings" :id="id" :padding="'-p--3'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | In this example, various padding classes have been applied to render padding
      | on all 4 sides of the blue squares. The padding can be visualized in yellow.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-padding(v-for="padding in paddings" :class="`-p--${padding}`")
        .example-spacing-padding__block
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'paddings',
      paddings: [2, 4, 6],
      codeSnippets: ``
    };
  }
})
export default class Paddings extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.paddings.forEach((padding: number) => {
      this.$data.codeSnippets += `<div class="-p--${padding}"></div>\n`;
    });
  }
}
</script>
