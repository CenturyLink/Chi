<template lang="pug">
<ComponentExample title="Brand complimentary" id="icon-color-brand-complimentary" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true" padding="0">
  p.-text(slot="example-description") More icon colors that can be used to compliment the primary brand palette.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
  </template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<i class="chi-icon icon-atom -md -icon--navy" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--orange" aria-hidden="true"></i>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter">
  <div class="chi-col -w--12-text--center -p--1 -d--flex -justify-content--center">
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--navy -m--1"></i>
    <i aria-hidden="true" class="chi-icon icon-atom -md -icon--orange -m--1"></i>
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
export default class IconColorBrandComplimentary extends Vue {}
</script>
