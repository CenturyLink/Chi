<template lang="pug">
  div
    h2(class="-anchor" :id="id") Direction
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use direction utilities to define how items will be placed in flex containers.

    DirectionExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DirectionExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'direction'
    };
  },
  components: {
    DirectionExamples
  }
})
export default class Direction extends Vue {}
</script>
