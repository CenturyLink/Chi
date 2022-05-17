<template lang="pug">
  div
    h2.-py--2.-anchor(:id="id") Additional classes
      span
        a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + id") #
    div(v-for="position in positions")
      h3.-anchor(:id="position") {{ setTitle(position) }}
        span
          a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + position") #
      p.-text Use the <code>-position--{{ position }}</code> class to position an element at the {{ position.split('-')[1] }} of the viewport.
      .-mb--2
        pre(class="language-html" :slot="`code-snippet-position-${position}`")
          code(v-highlight="setCodeSnippets(position)" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'additional-classes',
      positions: ['fixed-top', 'fixed-bottom']
    };
  }
})
export default class AdditionalClasses extends Vue {
  setCodeSnippets(position: string) {
    return `<div class="-position--${position}"></div>`;
  }

  setTitle(position: string) {
    return `${position
      .split('-')[0]
      .charAt(0)
      .toUpperCase() + position.split('-')[0].slice(1)} ${position
      .split('-')[1]
      .charAt(0)
      .toUpperCase() + position.split('-')[1].slice(1)}`;
  }
}
</script>
