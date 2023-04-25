<template lang="pug">
<ComponentExample title="Border Sizes" id="border-sizes" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description") Control an element's border size by adjusting the size from <code>0</code> - <code>4</code>.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-b--0"></div>
<div class="-b--1"></div>
<div class="-b--2"></div>
<div class="-b--3"></div>
<div class="-b--4"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -text -no-gutter -text--center">
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--0 -bg--grey-10">-b--0</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -bg--grey-10">-b--1</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--2 -bg--grey-10">-b--2</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--3 -bg--grey-10">-b--3</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--4 -bg--grey-10">-b--4</div>
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
export default class BorderSizes extends Vue {}
</script>
