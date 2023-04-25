<template lang="pug">
<ComponentExample title="Brand" id="border-colors-brand" titleSize="h4" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description")
    | Brand border colors reinforce Lumen's brand. Use primary and secondary
    | as accents and base, black, and white as neutrals.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<!-- For light backgrounds -->
<div class="-b--1 -b--base-light"></div>
<div class="-b--1 -b--base"></div>
<div class="-b--1 -b--base-dark"></div>
<div class="-b--1 -b--primary"></div>
<div class="-b--1 -b--black"></div>
<!-- For dark backgrounds -->
<div class="-b--1 -b--secondary"></div>
<div class="-b--1 -b--white"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter -text -text--center -mb--2">
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--base-light -bg--grey-10">Base Light</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -bg--grey-10">Base</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--base-dark -bg--grey-10">Base Dark</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--primary -bg--grey-10">Primary</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--black -bg--grey-10">Black</div>
  </div></div>
  <div class="chi-grid -no-gutter -text -text--center -bg--black -text--white">
    <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--secondary">Secondary</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--white">White</div>
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
export default class BorderColorsBrand extends Vue {}
</script>
