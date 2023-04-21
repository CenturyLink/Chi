<template lang="pug">
fragment
  <ComponentExample title="Fill" id="fill" titleSize="h2" :tabs="$data.exampleTabs" hideTabs="true">
    p.-text(slot="example-description") Use the <code>-flex--fill</code> class on flexbox items to display as equal widths while taking up all available horizontal space.
    div(slot="example", v-html="$data.codeSnippetPrintable")

    pre(class="language-html" slot="code-default")
      code(v-highlight="$data.codeSnippet" class="html")
  </ComponentExample>

  p.-text Target specific breakpoints with Fill responsive classes.
  ul.-mb--3
    li
      code -flex--fill
    each size in ['sm', 'md', 'lg', 'xl']
      li
        code=`-flex-${size}--fill`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex">
  <div class="-flex--fill">Item</div>
  <div class="-flex--fill">Item</div>
  <div class="-flex--fill">Item</div>
</div>`;

const codeSnippetPrintable = `<div class="-mb--2 -d--flex -show--example -bg--grey-10">
  <div class="-text -p--2 -flex--fill">Item</div>
  <div class="-text -p--2 -flex--fill">Item</div>
  <div class="-text -p--2 -flex--fill">Item</div>
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
export default class Fill extends Vue {}
</script>
