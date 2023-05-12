<template lang="pug">
  div
    <TitleBar title="Z-index" description="Use z-index utility classes to control the index of your elements in the z dimension. When two elements overlap each other, z-index establishes what element overlaps the other. Usually elements with larger z-index overlap elements with smaller ones." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './example/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Z-index'
    }
  },
  components: {
    Examples
  }
})
export default class ImageUtility extends Vue {}
</script>
