<template lang="pug">
  div
    <TitleBar title="Flex" description="Use shorthand flex utility classes to manage the layout, alignment, and size of Chi components." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Flex'
    }
  },
  components: {
    Examples
  }
})
export default class Flex extends Vue {}
</script>
