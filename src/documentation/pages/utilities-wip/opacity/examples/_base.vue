<template lang="pug">
  ComponentExample(title="Base" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-opacity--{value}</code> to change the opacity of an element.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-w-lg--2.-p--1(v-for="opacity in opacities")
        .example-opacity.-rounded(style=`height:3rem;`)
          .-text.-bg--black.-rounded(:class="`-opacity--${opacity}`" style=`height:3rem;`)
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'base-opacity-example',
      opacities: [0, 20, 40, 60, 80, 100],
      codeSnippets: ``
    };
  }
})
export default class Base extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.opacities.forEach((opacity: number) => {
      this.$data.codeSnippets += `<div class="-opacity--${opacity}">...</div>\n`;
    });
  }
}
</script>
