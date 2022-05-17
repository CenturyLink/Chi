<template lang="pug">
  ComponentExample(title="Border Sizes" :padding="'-p--2'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Control an element's border size by adjusting the size from <code>0</code> - <code>4</code>.
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="size in sizes")
        .-m--1.-p--1.-py--5.-bg--grey-10(:class="`-b--${size}`") -b--{{size}}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'border-sizes-example-border',
      sizes: [0, 1, 2, 3 ,4],
      codeSnippets: ``
    };
  }
})
export default class BorderSizes extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sizes.forEach((size: number) => {
      this.$data.codeSnippets += `<div class="-b--${size}"></div>\n`;
    });
  }
}
</script>
