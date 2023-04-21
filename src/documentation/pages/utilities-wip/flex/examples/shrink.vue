<template lang="pug">
fragment
  <ComponentExample title="Shrink" id="shrink" titleSize="h2" :tabs="$data.exampleTabs" hideTabs="true">
    p.-text(slot="example-description") Use the <code>-flex--shrink*</code> class to toggle a flex item's ability to shrink and take up all available space.
    div(slot="example", v-html="$data.codeSnippetPrintable")

    pre(class="language-html" slot="code-default")
      code(v-highlight="$data.codeSnippet" class="html")
  </ComponentExample>

  p.-text Target specific breakpoints with Shrink responsive classes.
  ul.-mb--3
    li
      code -flex--shrink0
    li
      code -flex--shrink1
    each size in ['sm', 'md', 'lg', 'xl']
      li
        code=`-flex-${size}--shrink0`
      li
        code=`-flex-${size}--shrink1`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex">
  <div style="width:100%;">Item</div>
  <div class="-flex--shrink1">Shrink Item</div>
</div>`;

const codeSnippetPrintable = `<div class="-mb--2 -d--flex -show--example -bg--grey-10">
  <div class="-text -p--2" style="width:100%;">Item</div>
  <div class="-text -p--2 -flex--shrink1">Shrink Item</div>
</div>`;

@Component({
  data() {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet,
      codeSnippetPrintable
    };
  }
})
export default class Shrink extends Vue {}
</script>
