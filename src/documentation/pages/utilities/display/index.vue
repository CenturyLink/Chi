<template lang="pug">
  div
    <TitleBar title="Display" description="Use shorthand display utility classes to quickly change an element's display value." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Display'
    }
  },
  components: {
    Examples
  }
})
export default class Display extends Vue {}
</script>
