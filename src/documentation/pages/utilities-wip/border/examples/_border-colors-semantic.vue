<template lang="pug">
<ComponentExample title="Semantic" id="border-colors-semantic" titleSize="h4" :tabs="$data.exampleTabs" hideTabs="true">
  p.-text(slot="example-description")
    | Use semantic border colors to communicate meaning to users.
    | Use green (success) for positive, blue (info) for informative,
    | red (danger) for negative, and yellow (warning) for needs attention.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-b--1 -b--success"></div>
<div class="-b--1 -b--success-light"></div>
<div class="-b--1 -b--info"></div>
<div class="-b--1 -b--info-light"></div>
<div class="-b--1 -b--danger"></div>
<div class="-b--1 -b--danger-light"></div>
<div class="-b--1 -b--warning"></div>
<div class="-b--1 -b--warning-light"></div>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter -text -text--center">
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--success">Success</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--success-light -bg--success-lighter">Success Light</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--info">Info</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--info-light -bg--info-lighter">Info Light</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--danger">Danger</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--danger-light -bg--danger-lighter">Danger Light</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--warning">Warning</div>
  </div>
  <div class="chi-col -w--6 -w-md--3 -w-xl--2">
    <div class="-m--1 -p--1 -py--5 -b--1 -b--warning-light -bg--warning-lighter">Warning Light</div>
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
export default class BorderColorsSemantic extends Vue {}
</script>
