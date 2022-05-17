<template lang="pug">
  ComponentExample(title="Bottom" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Use <code>-vertical-align--bottom</code> to align the bottom of an element and its descendants with the bottom of the entire line.
    .-d--flex.-flex--wrap.-p--3.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--bottom.-mr--1.example-vertical-align__block
        span bottom
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'top',
      codeSnippets: `<span class="-vertical-align--bottom">...</span>`
    };
  }
})
export default class Bottom extends Vue {}
</script>
