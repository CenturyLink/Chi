<template lang="pug">
  div
    <TitleBar title="Color and sensory" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Color and sensory'
    }
  },
  components: {
    Examples
  }
})
export default class ColorSensory extends Vue {}
</script>
