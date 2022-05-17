<template lang="pug">
  ComponentExample(title="Margin + Padding" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Apply both margin and padding to an element by adding both class names.
    .chi-grid.-no-gutter(slot="example")
      .example-spacing-margin
        .-m--3.-p--3.example-spacing-padding
          .example-spacing-padding__block
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'margin-and-padding',
      codeSnippets: `<div class="-m--3 -p--3"></div>`
    };
  }
})
export default class MarginAndPadding extends Vue {}
</script>
