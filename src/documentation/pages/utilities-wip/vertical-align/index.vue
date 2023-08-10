<template lang="pug">
  div
    <TitleBar title="Vertical-align" description="Use to change the vertical alignment of inline, inline-block, inline-table, and table cell elements." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Vertical-align'
    }
  },
  components: {
    Examples
  }
})
export default class VerticalAlign extends Vue {}
</script>
