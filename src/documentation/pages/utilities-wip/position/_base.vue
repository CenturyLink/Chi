<template lang="pug">
  div
    h2.-py--2.-anchor(:id="id") Base
      span
        a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + id") #
    div(v-for="position in positions")
      h3.-anchor(:id="position") {{ setTitle(position) }}
        span
          a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + position") #
      .-mb--2
        pre(class="language-html" :slot="`code-snippet-position-${position}`")
          code(v-highlight="setCodeSnippets(position)" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'base',
      positions: ['static', 'relative', 'fixed', 'absolute', 'sticky']
    };
  }
})
export default class Base extends Vue {
  setCodeSnippets(position: string) {
    return `<div class="-position--${position}"></div>`;
  }

  setTitle(position: string) {
    return position.charAt(0).toUpperCase() + position.slice(1);
  }
}
</script>
