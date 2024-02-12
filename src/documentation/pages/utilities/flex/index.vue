<template lang="pug">
  div
    <TitleBar title="Flex" description="Use shorthand flex utility classes to manage the layout, alignment, and size of Chi components." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Flex',
    };
  },
  components: {
    Examples,
  },
})
export default class Flex extends Vue {}
</script>
