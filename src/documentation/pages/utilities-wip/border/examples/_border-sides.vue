<template lang="pug">
<ComponentExample title="Border Sides" id="border-sides" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description")
    | Apply borders to specific sides of an element by adding <code>t</code>,
    | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
    | to the class name.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-bt--1"></div>
<div class="-br--1"></div>
<div class="-bb--1"></div>
<div class="-bl--1"></div>
<div class="-bx--1"></div>
<div class="-by--1"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -text -no-gutter -text--center">
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -bt--1 -bg--grey-10">-bt--1</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -br--1 -bg--grey-10">-br--1</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -bb--1 -bg--grey-10">-bb--1</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -bl--1 -bg--grey-10">-bl--1</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -bx--1 -bg--grey-10">-bx--1</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -by--1 -bg--grey-10">-by--1</div>
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
export default class BorderSides extends Vue {}
</script>
