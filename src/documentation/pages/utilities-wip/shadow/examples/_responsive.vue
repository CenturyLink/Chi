<template lang="pug">
  ComponentExample(title="Responsive" :id="id" :codeSnippetWithoutTabs="true" :additionalStyle="'background:#F5F5F5;'")
    p.-text(slot="example-description") Change viewport size to view the effect. You can do it by resizing your browser window.
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .-p--5.-m--2(v-for="size in sizes" :class="size" style="background:#FFFFFF;") {{ size }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'responsive-example',
      sizes: ['-s--5 -s-md--0', '-s-md--5 -s-xl--0', '-s-xl--5'],
      codeSnippets: ``
    };
  }
})
export default class Responsive extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.codeSnippets += `<div class="${size}"></div>\n`;
    });
  }
}
</script>
