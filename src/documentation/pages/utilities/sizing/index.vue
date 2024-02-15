<template lang="pug">
  div
    <TitleBar title="Sizing" description="Use responsive sizing utility classes to quickly apply widths and heights on elements." />
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
export default class Sizing extends Vue {}
</script>
