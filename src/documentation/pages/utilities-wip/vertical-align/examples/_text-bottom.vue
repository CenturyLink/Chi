<template lang="pug">
  ComponentExample(title="Text bottom" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-vertical-align--text-bottom</code> to align the bottom of an element with the bottom of the parent element's font.
    .-d--flex.-flex--wrap.-p--3.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--text-bottom.-mr--1.example-vertical-align__block
        span text-bottom
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-bottom',
      codeSnippets: `<span class="-vertical-align--text-bottom">...</span>`
    };
  }
})
export default class TextBottom extends Vue {}
</script>
