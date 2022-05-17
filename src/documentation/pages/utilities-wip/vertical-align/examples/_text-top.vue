<template lang="pug">
  ComponentExample(title="Text top" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-vertical-align--text-top</code> to align the top of an element with the top of the parent element's font.
    .-d--flex.-flex--wrap.-p--3.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--text-top.-mr--1.example-vertical-align__block
        span text-top
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-top',
      codeSnippets: `<span class="-vertical-align--text-top">...</span>`
    };
  }
})
export default class TextTop extends Vue {}
</script>
