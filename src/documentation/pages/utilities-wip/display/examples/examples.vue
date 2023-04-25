<template lang="pug">
<ComponentExample title="Examples" id="examples" titleSize="h2" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<!-- hidden on all breakpoints except xl -->
<div class="-d--none -d-xl--inline-flex"></div>
<!-- hidden on sm breakpoints -->
<div class="-d-sm--none"></div>
<!-- inline-flex on all breakpoints -->
<div class="-d--inline-flex"></div>
<!-- flex on all breakpoints -->
<div class="-d--flex"></div>`;

const codeSnippetPrintable = `<div class="-p--0 -show--example">
  <div class="-text -p--3 -m--1 -d--none -d-xl--inline-flex">-d--none -d-xl--inline-flex</div>
  <div class="-text -p--3 -m--1 -d--flex -d-sm--none">-d-sm--none</div>
  <div class="-text -p--3 -m--1 -d--inline-flex">-d--inline-flex</div>
  <div class="-text -p--3 -m--1 -d--flex">-d--flex</div>
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
export default class Examples extends Vue {}
</script>
