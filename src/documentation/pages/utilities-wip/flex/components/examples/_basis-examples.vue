<template lang="pug">
<ComponentExample title="Examples" id="examples" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<!-- flex-basis 25% on all breakpoints -->
<div class="-d--flex">
  <div class="-flex-basis--25"></div>
</div>
<!-- flex-basis 50% on all breakpoints -->
<div class="-d--flex">
  <div class="-flex-basis--50"></div>
</div>
<!-- flex-basis 75% from md -->
<div class="-d--flex">
  <div class="-flex-basis-md--75"></div>
</div>
<!-- flex-basis 50% from xl -->
<div class="-d--flex">
  <div class="-flex-basis-xl--50"></div>
</div>`;

const codeSnippetPrintable = `<div class="-pb--1">
  <div class="-mb--2 -d--flex -show--example -bg--grey-10">
    <div class="-text -p--2 -flex-basis--25">-flex-basis--25</div>
  </div>
  <div class="-mb--2 -d--flex -show--example -bg--grey-10">
    <div class="-text -p--2 -flex-basis--50">-flex-basis--50</div>
  </div>
  <div class="-mb--2 -d--flex -show--example -bg--grey-10">
    <div class="-text -p--2 -flex-basis-md--75">-flex-basis-md--75</div>
  </div>
  <div class="-d--flex -show--example -bg--grey-10">
    <div class="-text -p--2 -flex-basis-xl--50">-flex-basis-xl--50</div>
  </div>
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
export default class BasisExamples extends Vue {}
</script>
