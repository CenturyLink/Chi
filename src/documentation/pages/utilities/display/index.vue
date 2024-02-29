<template lang="pug">
  div
    <TitleBar title="Display" description="Use shorthand display utility classes to quickly change an element's display value." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  components: {
    Examples,
  },
})
export default class Display extends Vue {}
</script>
