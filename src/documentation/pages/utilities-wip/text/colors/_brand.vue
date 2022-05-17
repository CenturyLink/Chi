<template lang="pug">
  ComponentExample(title="Brand" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Brand text colors reinforce Lumen's brand. Use primary and secondary as accents and body and light as neutrals.
    template(slot="example")
      .chi-grid.-no-gutter
        .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
          .-p--1.-p-sm--2.-text--center(v-for="color in lightColors")
            p.-text(:class="`-text--${color}`") -text--{{ color }}
        .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
          .-p--1.-p-sm--2.-text--center(v-for="color in darkColors")
            p.-text(:class="`-text--${color}`") -text--{{ color }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand',
      lightColors: ['body', 'primary'],
      darkColors: ['secondary', 'light'],
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
      lightSnippets += `\n<p class="-text--${color}">-text--${color}</p>`;
    });
    this.$data.darkColors.forEach((color: string) => {
      darkSnippets += `\n<p class="-text--${color}">-text--${color}</p>`;
    });

    this.$data.codeSnippets = lightSnippets + '\n\n' + darkSnippets;
  }
}
</script>
