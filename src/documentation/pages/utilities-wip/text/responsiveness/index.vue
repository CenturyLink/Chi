<template lang="pug">
  div
    h2(class="-anchor" :id="id") Responsiveness
      span
        a(class="-ml--1" :href="'/utilities/text/?theme=' + $store.state.themes.theme + '#' + id") #

    Sizes
    LineHeights
    TextAlignment
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sizes from './sizes/index.vue';
import LineHeights from './line-heights/index.vue';
import TextAlignment from './text-alignment/index.vue';

@Component({
  data: () => {
    return {
      id: 'responsiveness'
    };
  },
  components: {
    Sizes,
    LineHeights,
    TextAlignment
  }
})
export default class Responsiveness extends Vue {}
</script>
