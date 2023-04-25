<template lang="pug">
<ComponentExample title="Transparent" id="border-colors-transparent" titleSize="h4" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description") Use the transparent border color as a method to hide an element's border without altering its size.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-b--1 -b--transparent"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter -text -text--center">
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--transparent -bg--grey-10">Transparent</div>
  </div>
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
export default class BorderColorsTransparent extends Vue {}
</script>
