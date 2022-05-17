<template lang="pug">
  div
    h2(class="-anchor" :id="id") Grow
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use the <code>-flex--grow*</code> class to toggle a flex item's ability to grow and take up all available space.
    
    GrowExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GrowExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'grow'
    };
  },
  components: {
    GrowExamples
  }
})
export default class Grow extends Vue {}
</script>
