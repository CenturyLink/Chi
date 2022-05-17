<template lang="pug">
  ComponentExample(title="Brand" :id="id" :titleSize="'h4'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Brand border colors reinforce Lumen's brand. Use primary and secondary as accents and base, black, and white as neutrals.
    Wrapper(slot="example")
      .chi-grid.-no-gutter.-text.-text--center.-mb--2
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="color in lightColors")
          .-m--1.-p--1.-py--5.-b--1.-bg--grey-10.-text--capitalize(:class="`-b--${color}`") {{ color.replace('-', ' ') }}
      .chi-grid.-no-gutter.-text.-text--center.-bg--black.-text--white
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="color in darkColors")
          .-m--1.-p--1.-py--5.-b--1.-text--capitalize(:class="`-b--${color}`") {{ color }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand-example-color-border',
      lightColors: ['base-light', 'base', 'base-dark', 'primary', 'black'],
      darkColors: ['secondary', 'white'],
      codeSnippets: ``
    };
  }
})
export default class Brand extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let lightSnippets = '<!-- For light backgrounds -->';
    let darkSnippets = `<!-- For dark backgrounds -->`;

    this.$data.lightColors.forEach((color: string) => {
      lightSnippets += `\n<div class="-b--1 -b--${color}"></div>`;
    });
    
    this.$data.darkColors.forEach((color: string) => {
      darkSnippets += `\n<div class="-b--1 -b--${color}"></div>`;
    });

    this.$data.codeSnippets = `${lightSnippets}\n\n${darkSnippets}`;
  }
}
</script>
