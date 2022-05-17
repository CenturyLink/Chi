<template lang="pug">
  ComponentExample(title="Side paddings" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | Apply padding to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    .chi-grid.-no-gutter(slot="example")
      .-mr--3.example-spacing-padding(v-for="side in sides" :class="`-p${side}--3`")
        .example-spacing-padding__block
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'side-paddings',
      sides: ['t', 'b', 'l', 'r', 'x', 'y'],
      codeSnippets: ``
    };
  }
})
export default class SidePaddings extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sides.forEach((side: string) => {
      let comment = `<!-- padding-${
        side === 'b'
          ? 'bottom'
          : side === 't'
          ? 'top'
          : side === 'l'
          ? 'left'
          : side === 'r'
          ? 'right'
          : side === 'x'
          ? 'left and padding-right'
          : 'top and padding-bottom'
      } -->\n`;

      this.$data.codeSnippets += `${comment}<div class="-p${side}--3"></div>\n`;
    });
  }
}
</script>
