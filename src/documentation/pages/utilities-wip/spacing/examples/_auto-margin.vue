<template lang="pug">
  ComponentExample(title="Auto margin" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Apply margin auto to an element
    .example-spacing-margin.-d--flex(slot="example")
      .-m--auto.example-spacing-padding
          .example-spacing-padding__block
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'auto-margin',
      codeSnippets: `<div class="-m--auto"></div>`
    };
  }
})
export default class AutoMargin extends Vue {}
</script>
