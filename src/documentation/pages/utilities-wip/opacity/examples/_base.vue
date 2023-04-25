<template lang="pug">
<ComponentExample title="Base" id="base" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true" padding="-p--2">
  p.-text(slot="example-description") Use <code>-opacity--{value}</code> to change the opacity of an element.
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-opacity--0">...</div>
<div class="-opacity--20">...</div>
<div class="-opacity--40">...</div>
<div class="-opacity--60">...</div>
<div class="-opacity--80">...</div>
<div class="-opacity--100">...</div>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter">
  <div class="chi-col -w--6 -w-md--4 -w-lg--2 -p--1">
    <div class="example-opacity -rounded" style="height:3rem;">
      <div class="-text -bg--black -rounded -opacity--0" style="height:3rem;"></div>
    </div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2 -p--1">
    <div class="example-opacity -rounded" style="height:3rem;">
      <div class="-text -bg--black -rounded -opacity--20" style="height:3rem;"></div>
    </div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2 -p--1">
    <div class="example-opacity -rounded" style="height:3rem;">
      <div class="-text -bg--black -rounded -opacity--40" style="height:3rem;"></div>
    </div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2 -p--1">
    <div class="example-opacity -rounded" style="height:3rem;">
      <div class="-text -bg--black -rounded -opacity--60" style="height:3rem;"></div>
    </div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2 -p--1">
    <div class="example-opacity -rounded" style="height:3rem;">
      <div class="-text -bg--black -rounded -opacity--80" style="height:3rem;"></div>
    </div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2 -p--1">
    <div class="example-opacity -rounded" style="height:3rem;">
      <div class="-text -bg--black -rounded -opacity--100" style="height:3rem;"></div>
    </div>
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
export default class OpacityBase extends Vue {}
</script>
