<template lang="pug">
  ComponentExample(title="Side margins" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | Apply margin to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-margin(v-for="side in sides")
         .example-spacing-margin__block(:class="`-m${side}--3`")
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'side-margins',
      sides: ['b', 't', 'l', 'r', 'x', 'y'],
      codeSnippets: ``
    };
  }
})
export default class SideMargins extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sides.forEach((side: string) => {
      let comment = `<!-- margin-${
        side === 'b'
          ? 'bottom'
          : side === 't'
          ? 'top'
          : side === 'l'
          ? 'left'
          : side === 'r'
          ? 'right'
          : side === 'x'
          ? 'left and margin-right'
          : 'top and margin-bottom'
      } -->\n`;

      this.$data.codeSnippets += `${comment}<div class="-m${side}--3"></div>\n`;
    });
  }
}
</script>
