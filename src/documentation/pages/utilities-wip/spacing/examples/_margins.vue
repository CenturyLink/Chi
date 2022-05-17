<template lang="pug">
  ComponentExample(title="Margins" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | In this example, various margin classes have been applied to render margin
      | on all 4 sides of the blue squares. The margin can be visualized in blue.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-margin(v-for="margin in margins")
        .-m--2.example-spacing-margin__block(:class="`-m--${margin}`")
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'margins',
      margins: [2, 4, 6],
      codeSnippets: ``
    };
  }
})
export default class Margins extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.margins.forEach((margin: number) => {
      this.$data.codeSnippets += `<div class="-m--${margin}"></div>\n`;
    });
  }
}
</script>
