<template lang="pug">
  ComponentExample(title="Responsive background-color examples" :id="id" :padding="'-p--3'" :codeSnippetWithoutTabs="true")
    template(slot="example")
      .-text.-b--1.-p--3.-m--1(v-for="color in colors" :class="printBgColor(color)" :style="printStyleColor(color)") {{ printBgColor(color) }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'responsive-example-background-color',
      colors: [
        'primary',
        'sm--secondary',
        'md--warning',
        'lg--danger',
        'xl--black',
        'none'
      ],
      codeSnippets: ``
    };
  }
})
export default class ResponsiveExamples extends Vue {
  created() {
    this._setCodeSnippets();
  }

  printStyleColor(color: string) {
    return color !== 'none' && color !== 'sm--secondary'
      ? 'color:white'
      : 'color:black';
  }

  printBgColor(color: string) {
    return color === 'primary' || color === 'none'
      ? `-bg--${color}`
      : `-bg-${color}`;
  }

  _setCodeSnippets() {
    this.$data.colors.forEach((color: string) => {
      this.$data.codeSnippets += `<!-- background${
        color !== 'none' ? '-color' : ''
      } ${
        color !== 'primary' && color !== 'none' ? color.split('--')[1] : color
      } ${
        color === 'primary' || color === 'none'
          ? 'on all breakpoints'
          : `from ${color.split('--')[0]}`
      } -->\n<div class="${this.printBgColor(color)}"></div>\n`;
    });
  }
}
</script>
