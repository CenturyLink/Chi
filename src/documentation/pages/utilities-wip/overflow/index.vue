<template lang="pug">
  div
    <TitleBar title="Overflow" description="Use to change how content overflows an element." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Overflow'
    }
  },
  components: {
    Examples
  }
})
export default class OverflowUtility extends Vue {}
</script>
