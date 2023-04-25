<template lang="pug">
<ComponentExample title="Responsive background-color examples" id="responsive-background-color-examples" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true" padding="0">
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<!-- background-color primary on all breakpoints -->
<div class="-bg--primary"></div>
<!-- background-color secondary from sm -->
<div class="-bg-sm--secondary"></div>
<!-- background-color warning from md -->
<div class="-bg-md--warning"></div>
<!-- background-color danger from lg -->
<div class="-bg-lg--danger"></div>
<!-- background-color black from xl -->
<div class="-bg-xl--black"></div>
<!-- background none on all breakpoints -->
<div class="-bg--none"></div>`;

const codeSnippetPrintable = `<div class="-p--3">
  <div class="-text -b--1 -p--3 -m--1 -bg--primary" style="color:white;">-bg--primary</div>
  <div class="-text -b--1 -p--3 -m--1 -bg-sm--secondary" style="color:black;">-bg-sm--secondary</div>
  <div class="-text -b--1 -p--3 -m--1 -bg-md--warning" style="color:white;">-bg-md--warning</div>
  <div class="-text -b--1 -p--3 -m--1 -bg-lg--danger" style="color:white;">-bg-lg--danger</div>
  <div class="-text -b--1 -p--3 -m--1 -bg-xl--black" style="color:white;">-bg-xl--black</div>
  <div class="-text -b--1 -p--3 -m--1 -bg--none" style="color:black;">-bg--none</div>
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
export default class ResponsiveBackgroundColorExamples extends Vue {}
</script>
