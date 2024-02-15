<template lang="pug">
  div
    <TitleBar title="Spacing" description="Use shorthand margin and padding utility classes to control spacing between elements." />
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
export default class Spacing extends Vue {}
</script>
