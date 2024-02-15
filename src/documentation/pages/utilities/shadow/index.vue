<template lang="pug">
  div
    <TitleBar title="Shadow" description="Use shadow utility classes to assist in creating a visual hierarchy." />
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
export default class Shadow extends Vue {}
</script>
