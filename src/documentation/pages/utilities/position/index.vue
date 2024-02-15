<template lang="pug">
  div
    <TitleBar title="Position" description="Use shorthand position utility classes to quickly change an elements position value." />
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
export default class Position extends Vue {}
</script>
