<template lang="pug">
  ComponentExample(title="Transparent" :id="id" :titleSize="'h4'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use the transparent border color as a method to hide an element's border without altering its size.
    .chi-grid.-no-gutter.-text.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2
        .-m--1.-p--1.-py--5.-bg--grey-10(:class="transparent") Transparent
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'transparent-example-color-border',
      transparent: '-b--1 -b--transparent',
      codeSnippets: ``
    };
  }
})
export default class Transparent extends Vue {
  created() {
    this._setCodeSnippets();
  }
  
  _setCodeSnippets() {
    this.$data.codeSnippets += `<div class="${this.$data.transparent}"></div>`;
  }
}
</script>
