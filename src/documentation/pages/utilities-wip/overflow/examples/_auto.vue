<template lang="pug">
  ComponentExample(title="Auto" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") 
      | Use <code>-overflow--auto</code> to show scrollbars if content overflows its box.
      | If content fits within its box, no scrollbars are shown.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-p--1
        .-overflow--auto.-b--1.-p--1(style=`height:4rem;`)
          p.-text.-m--0
            | This is an example of an element with a defined height
            | using <code>-overflow--auto</code> to scroll the content overflowing its box.
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'overflow-auto-example',
      codeSnippets: `<div class="-overflow--auto">...</div>`
    };
  }
})
export default class Auto extends Vue {}
</script>
