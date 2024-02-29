<template lang="pug">
  div
    <TitleBar title="Overflow" description="Use to change how content overflows an element." />
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
export default class Overflow extends Vue {}
</script>
