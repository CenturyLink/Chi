<template lang="pug">
  div
    <TitleBar title="Color" description="Use shorthand color utility classes to quickly apply or remove colors." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Color',
    };
  },
  components: {
    Examples,
  },
})
export default class Color extends Vue {}
</script>
