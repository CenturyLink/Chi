<template lang="pug">
  div
    <TitleBar title="Overview" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Overview'
    }
  },
  components: {
    Examples
  }
})
export default class Overview extends Vue {}
</script>
