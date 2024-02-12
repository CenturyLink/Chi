<template lang="pug">
  div
    <TitleBar title="Color and sensory" />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Color and sensory',
    };
  },
  components: {
    Examples,
  },
})
export default class ColorSensory extends Vue {}
</script>
