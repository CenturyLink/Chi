<template lang="pug">
<ComponentExample title="Breakpoints" id="breakpoints" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description") Target specific breakpoints with responsive classes.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-bx--0 -by--4 -bx-lg--4 -by-lg--0"></div>
<div class="-b--0 -b-sm--1 -b-md--2 -b-lg--3 -b-xl--4"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -text -no-gutter -text--center">
  <div class="chi-col -w--6 -d--flex">
    <div class="-d--flex -flex--grow1 -align-items--center -justify-content--center -m--1 -p--1 -py--5 -bx--0 -by--4 -bx-lg--4 -by-lg--0 -bg--grey-10">-bx--0 -by--4<br>-bx-lg--4 -by-lg--0</div>
  </div>
  <div class="chi-col -w--6">
    <div class="-d--flex -flex--grow1 -align-items--center -justify-content--center -m--1 -p--1 -py--5 -b--0 -b-sm--1 -b-md--2 -b-lg--3 -b-xl--4 -bg--grey-10">-b--0 -b-sm--1<br>-b-md--2 -b-lg--3<br>-b-xl--4</div>
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
export default class Breakpoints extends Vue {}
</script>
