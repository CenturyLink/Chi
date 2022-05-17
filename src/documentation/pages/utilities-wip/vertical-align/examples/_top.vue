<template lang="pug">
  ComponentExample(title="Top" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-vertical-align--top</code> to align the top of the element and its descendants with the top of the entire line.
    .-d--flex.-flex--wrap.-p--3.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--top.-mr--1.example-vertical-align__block
        span top
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'top',
      codeSnippets: `<span class="-vertical-align--top">...</span>`
    };
  }
})
export default class Top extends Vue {}
</script>
