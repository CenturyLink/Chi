<template lang="pug">
<ComponentExample title="Around" id="align-content-around" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex -align-content--around -flex--wrap">
  <div>Item</div>
</div>`;

const codeSnippetPrintable = () => `<div class="-mb--2 -d--flex -align-content--around -flex--wrap -show--example -bg--grey-10" style="height:12rem;">
  ${[...new Array(19)]
    .map(() => `<div class="-text -p--2">Item</div>`)
    .join('')}
</div>`;

@Component({
  data: () => {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet,
      codeSnippetPrintable: codeSnippetPrintable()
    };
  }
})
export default class AlignContentAround extends Vue {}
</script>
