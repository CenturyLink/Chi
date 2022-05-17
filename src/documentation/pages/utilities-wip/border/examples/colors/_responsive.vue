<template lang="pug">
  ComponentExample(title="Responsive" :padding="'-p--2'" :id="id" :titleSize="'h4'" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description")  Use breakpoint classes to change an element's border color on different viewports. Follow the format <code>-b[-{breakpoint}]--{color}</code>.
    .chi-grid.-no-gutter.-text.-text--center(slot="example")
      .chi-col.-w--8
        .-m--1.-p--1.-py--4.-bg--grey-10.-b--1(:class="responsive") {{ responsive }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'responsive-example-color-border',
      responsive:
        '-b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning',
      codeSnippets: ``
    };
  }
})
export default class Responsive extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.codeSnippets += `<div class="-b--1 ${this.$data.responsive}"></div>`;
  }
}
</script>
