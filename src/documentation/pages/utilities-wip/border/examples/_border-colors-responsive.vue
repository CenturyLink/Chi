<template lang="pug">
<ComponentExample title="Responsive" id="border-colors-responsive" titleSize="h4" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description")
    | Use breakpoint classes to change an element's border color on different viewports.
    | Follow the format <code>-b[-{breakpoint}]--{color}</code>.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-b--1 -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter -text -text--center">
  <div class="chi-col -w--8">
    <div class="-m--1 -p--1 -py--4 -b--1 -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning -bg--grey-10">-b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning</div>
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
export default class BorderColorsResponsive extends Vue {}
</script>
