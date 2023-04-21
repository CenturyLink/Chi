<template lang="pug">
<ComponentExample title="End" id="end" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex">
  <div>Item</div>
  <div class="-align-self--end">Aligned Item</div>
  <div>Item</div>
</div>`;

const codeSnippetPrintable = `<div class="-mb--2 -d--flex -show--example -bg--grey-10" style="height:7rem;">
  <div class="-text -p--2">Item</div>
  <div class="-text -p--2 -align-self--end">Aligned Item</div>
  <div class="-text -p--2">Item</div>
</div>`;

@Component({
  data: () => {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet,
      codeSnippetPrintable
    };
  }
})
export default class AlignSelfEnd extends Vue {}
</script>
