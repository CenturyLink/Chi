<template lang="pug">
  div
    <TitleBar title="Card" description="A collection of templates built with responsive Cards." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  components: {
    Examples,
  },
  layout() {
    return 'wide';
  },
})
export default class Card extends Vue {}
</script>
