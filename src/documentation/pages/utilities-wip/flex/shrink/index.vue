<template lang="pug">
  div
    h2(class="-anchor" :id="id") Shrink
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use the <code>-flex--shrink*</code> class to toggle a flex item's ability to shrink when its size is larger than its container.
    
    ShrinkExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShrinkExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'shrink',
    };
  },
  components: {
    ShrinkExamples
  }
})
export default class Shrink extends Vue {}
</script>
