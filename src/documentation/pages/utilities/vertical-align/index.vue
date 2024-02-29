<template lang="pug">
  div
    <TitleBar title="Vertical-align" description="Use to change the vertical alignment of inline, inline-block, inline-table, and table cell elements." />
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
export default class VerticalAlign extends Vue {}
</script>
