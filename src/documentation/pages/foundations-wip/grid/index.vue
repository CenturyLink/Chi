<template lang="pug">
  div
    <TitleBar title="Grid" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Grid'
    };
  },
  components: {
    Examples
  }
})
export default class Grid extends Vue {}
</script>
