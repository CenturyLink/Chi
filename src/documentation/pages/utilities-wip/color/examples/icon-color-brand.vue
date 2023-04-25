<template lang="pug">
<ComponentExample title="Brand" id="icon-color-brand" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true" padding="0">
  p.-text(slot="example-description") Brand icon colors reinforce Lumen's brand. Use primary and secondary as accents, and dark, grey, and light as neutrals.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<!-- For light backgrounds -->
<i class="chi-icon icon-atom -md -icon--dark" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--primary" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--grey" aria-hidden="true"></i>
<!-- For dark backgrounds -->
<i class="chi-icon icon-atom -md -icon--secondary" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--light" aria-hidden="true"></i>`;

const codeSnippetPrintable = `
<div class="chi-grid -no-gutter">
  <div class="chi-col -w--12 -w-md--6 -p--1 -d--flex -justify-content--center">
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--dark -m--1"></i>
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--primary -m--1"></i>
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--grey -m--1"></i>
  </div>
  <div class="chi-col -w--12 -w-md--6 -bg--black -p--1 -d--flex -justify-content--center">
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--secondary -m--1"></i>
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--light -m--1"></i>
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
export default class IconColorBrand extends Vue {}
</script>
