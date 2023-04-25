<template lang="pug">
<ComponentExample title="Hover" id="hover" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true" padding="-p--2">
  p.-text(slot="example-description") Use <code>-opacity-hover--{value}</code> to change the opacity of an element on hover.
  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<div class="-opacity-hover--0">...</div>
<div class="-opacity-hover--20">...</div>
<div class="-opacity-hover--40">...</div>
<div class="-opacity-hover--60">...</div>
<div class="-opacity-hover--80">...</div>
<div class="-opacity--60 -opacity-hover--100">...</div>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter">
  <div class="chi-col -w--6 -w-md--4 -w-lg--2">
    <div class="-text -text--center -b--1 -rounded -m--1 -p--2 -opacity-hover--0">0% on hover</div>
  </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2">
      <div class="-text -text--center -b--1 -rounded -m--1 -p--2 -opacity-hover--20">20% on hover</div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2">
      <div class="-text -text--center -b--1 -rounded -m--1 -p--2 -opacity-hover--40">40% on hover</div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2">
      <div class="-text -text--center -b--1 -rounded -m--1 -p--2 -opacity-hover--60">60% on hover</div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2">
      <div class="-text -text--center -b--1 -rounded -m--1 -p--2 -opacity-hover--80">80% on hover</div>
    </div>
  <div class="chi-col -w--6 -w-md--4 -w-lg--2">
    <div class="-text -text--center -b--1 -rounded -m--1 -p--2 -opacity--60 -opacity-hover--100">100% on hover</div>
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
export default class OpacityHover extends Vue {}
</script>
