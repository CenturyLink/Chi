<template lang="pug">
  div
    <TitleBar title="Opacity" description="Use to change the opacity of an element." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Opacity',
    };
  },
  components: {
    Examples,
  },
})
export default class Opacity extends Vue {}
</script>
