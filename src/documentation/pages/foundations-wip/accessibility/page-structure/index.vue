<template lang="pug">
  div
    <TitleBar title="Page structure" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Page structure'
    }
  },
  components: {
    Examples
  }
})
export default class PageStructure extends Vue {}
</script>
