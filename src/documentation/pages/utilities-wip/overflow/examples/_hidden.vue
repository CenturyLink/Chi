<template lang="pug">
  ComponentExample(title="Hidden" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-overflow--hidden</code> to hide content that overflows its box. No scrollbars are shown.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-p--1
        .-overflow--hidden.-b--1.-p--1(style=`height:4rem;`)
          p.-text.-m--0
            | This is an example of an element with a defined height
            | using <code>-overflow--hidden</code> to hide its overflow.
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'overflow-hidden-example',
      codeSnippets: `<div class="-overflow--hidden">...</div>`
    };
  }
})
export default class Hidden extends Vue {}
</script>
