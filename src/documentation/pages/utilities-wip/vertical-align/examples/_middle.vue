<template lang="pug">
  ComponentExample(title="Middle" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-vertical-align--middle</code> to align the middle of an element with the baseline plus half the x-height of the parent.
    .-d--flex.-flex--wrap.-p--3.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--middle.-mr--1.example-vertical-align__block
        span middle
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'top',
      codeSnippets: `<span class="-vertical-align--middle">...</span>`
    };
  }
})
export default class Middle extends Vue {}
</script>
