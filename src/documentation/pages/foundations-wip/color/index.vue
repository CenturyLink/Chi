<template lang="pug">
  div
    <TitleBar title="Color" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Color'
    }
  },
  components: {
    Examples
  },
})
export default class Color extends Vue {}
</script>
