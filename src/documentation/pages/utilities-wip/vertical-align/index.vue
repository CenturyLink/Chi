<template lang="pug">
  div
    TitleBar(title="Vertical-align" description="Use to change the vertical alignment of inline, inline-block, inline-table, and table cell elements.")
    .chi-grid__container.-pt--3
      Notation
      Examples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notation from './notation/index.vue';
import Examples from './examples/index.vue';

@Component({
  components: {
    Notation,
    Examples
  }
})
export default class Border extends Vue {}
</script>
