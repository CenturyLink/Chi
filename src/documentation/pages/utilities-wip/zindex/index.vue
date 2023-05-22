<template lang="pug">
  div
    <TitleBar title="Z-index" description="Use z-index utility classes to control the index of your elements in the z dimension. When two elements overlap each other, z-index establishes what element overlaps the other. Usually elements with larger z-index overlap elements with smaller ones." />
    <ZIndexExamples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ZIndexExamples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Z-index'
    }
  },
  components: {
    ZIndexExamples
  }
})
export default class ZIndex extends Vue {}
</script>
