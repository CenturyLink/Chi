<template lang="pug">
  ComponentExample(title="Example" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    .-position--relative(slot="example" style='height:20rem')
      .-position--absolute.-text--center.-text--white.-text--bold(v-for="item in indexes" :class="`-z--${item.index} ${item.color}`" :style="`width:11rem;height:11rem;top:${item.margin}rem;left:${item.margin}rem;line-height:11rem;`") -z--{{item.index}}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ZIndex } from '../../../models/models';

@Component({
  data: () => {
    return {
      id: 'example',
      indexes: [
        { index: 0, color: '-bg--black', margin: 1 },
        { index: 1, color: '', margin: 0 },
        { index: 10, color: '-bg--danger', margin: 2 },
        { index: 20, color: '-bg--warning', margin: 3 },
        { index: 30, color: '-bg--success', margin: 4 },
        { index: 40, color: '-bg--secondary', margin: 5 },
        { index: 50, color: '-bg--grey-20', margin: 6 },
        { index: 60, color: '-bg--grey-10', margin: 7 },
        { index: 70, color: '-bg--primary', margin: 8 }
      ],
      codeSnippets: ``
    };
  }
})
export default class Example extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let codeSnippets = '<div class="-position--relative">\n';

    this.$data.indexes.forEach((item: ZIndex) => {
      if (item.index !== 1)
        codeSnippets += `  <div class="-position--absolute -z--${item.index} ${item.color}">-z--${item.index}</div>\n`;
    });

    this.$data.codeSnippets += codeSnippets + '</div>';
  }
}
</script>
