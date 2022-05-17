<template lang="pug">
  ComponentExample(title="Border Sides" :padding="'-p--2'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")
      | Apply borders to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="side in sides")
          .-m--1.-p--1.-py--5.-bg--grey-10(:class="`-b${side}--1`") -b{{ side }}--1
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'border-sides-example-border',
      sides: ['t', 'b', 'r', 'l', 'x', 'y'],
      codeSnippets: ``
    };
  }
})
export default class BorderSides extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sides.forEach((side: string) => {
      this.$data.codeSnippets += `<div class="-b${side}--1"></div>\n`;
    });
  }
}
</script>
