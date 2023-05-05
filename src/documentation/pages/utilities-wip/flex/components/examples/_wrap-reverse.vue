<template lang="pug">
<ComponentExample title="Wrap Reverse" id="wrap-reverse" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-d--flex -align-items--start -flex--wrap-reverse" style="width:224px;">
  <div>Item</div>
</div>`;

const codeSnippetPrintable = `<div class="-mb--2 -d--flex -flex--wrap-reverse -align-items--start -show--example -bg--grey-10" style="width:224px;">
  <div class="-text -p--2">Item</div>
  <div class="-text -p--2">Item</div>
  <div class="-text -p--2">Item</div>
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
export default class WrapReverse extends Vue {}
</script>
