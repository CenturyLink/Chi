<template lang="pug">
<ComponentExample title="Semantic" id="icon-color-semantic" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true" padding="0">
  p.-text(slot="example-description")
    | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
    | validation, user status, application state and more. Use green (success) for positive, blue (info)
    | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
    | for neutral. Semantic colors should never be used for decorative purposes.

  div(slot="example", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<i class="chi-icon icon-atom -md -icon--success" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--info" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--warning" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--danger" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--muted" aria-hidden="true"></i>`;

const codeSnippetPrintable = `<div class="chi-grid -no-gutter">
  <div class="chi-col -w--12-text--center -p--1 -d--flex -justify-content--center">
  <i aria-hidden="true" class="chi-icon icon-atom -md -icon--success -m--1"></i>
  <i aria-hidden="true" class="chi-icon icon-atom -md -icon--info -m--1"></i>
  <i aria-hidden="true" class="chi-icon icon-atom -md -icon--warning -m--1"></i>
  <i aria-hidden="true" class="chi-icon icon-atom -md -icon--danger -m--1"></i>
  <i aria-hidden="true" class="chi-icon icon-atom -md -icon--muted -m--1"></i>
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
export default class IconColorSemantic extends Vue {}
</script>
