<template lang="pug">
fragment
  <ComponentExample title="Grow" id="grow" titleSize="h2" :tabs="$data.exampleTabs" hideTabs="true">
    p.-text(slot="example-description") Use the <code>-flex--grow*</code> class to toggle a flex item's ability to grow and take up all available space.
    div(slot="example", v-html="$data.codeSnippetPrintable")

    pre(class="language-html" slot="code-default")
      code(v-highlight="$data.codeSnippet" class="html")
  </ComponentExample>

  p.-text Target specific breakpoints with Fill responsive classes.
  ul.-mb--3
    li
      code -flex--grow0
    li
      code -flex--grow1
    each size in ['sm', 'md', 'lg', 'xl']
      li
        code=`-flex-${size}--grow0`
      li
        code=`-flex-${size}--grow1`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex">
  <div class="-flex--grow1">Item</div>
  <div>Item</div>
  <div>Item</div>
</div>`;

const codeSnippetPrintable = `<div class="-mb--2 -d--flex -show--example -bg--grey-10">
  <div class="-text -p--2 -flex--grow1">Item</div>
  <div class="-text -p--2">Item</div>
  <div class="-text -p--2">Item</div>
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
export default class Grow extends Vue {}
</script>
