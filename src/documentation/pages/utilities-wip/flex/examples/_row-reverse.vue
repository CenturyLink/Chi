<template lang="pug">
<ComponentExample title="Row reverse" id="row-reverse" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description") Use <code>-flex--row-reverse</code> to display the items horizontally in reverse.

  div(slot="example", v-html="$data.codeSnippetPrintable", class="-d--flex -flex--row-reverse -show--example")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex -flex--row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const codeSnippetPrintable = `
<div class="-text -p--2">Item 1</div>
<div class="-text -p--2">Item 2</div>
<div class="-text -p--2">Item 3</div>
`;

@Component({
  data: () => {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet,
      codeSnippetPrintable
    };
  }
})
export default class RowReverse extends Vue {}
</script>
