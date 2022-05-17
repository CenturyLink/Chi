<template lang="pug">
  ComponentExample(title="Hover" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-opacity-hover--{value}</code> to change the opacity of an element on hover.
    .chi-grid.-no-gutter(slot="example")
       .chi-col.-w--6.-w-md--4.-w-lg--2(v-for="opacity in opacities")
        .-text.-text--center.-b--1.-rounded.-m--1.-p--2(:class="`-opacity-hover--${opacity} ${opacity === 100 ? '-opacity--60' : ''}`") {{ opacity }}% on hover
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'hover-opacity-example',
      opacities: [0, 20, 40, 60, 80, 100],
      codeSnippets: ``
    };
  }
})
export default class Hover extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.opacities.forEach((opacity: number) => {
      this.$data.codeSnippets += `<div class="${
        opacity === 100 ? '-opacity--60 ' : ''
      }-opacity-hover--${opacity}">...</div>\n`;
    });
  }
}
</script>
