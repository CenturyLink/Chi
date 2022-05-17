<template lang="pug">
  div
    TitleBar(title="Display" description="Use shorthand display utility classes to quickly change an element's display value.")
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
export default class Display extends Vue {}
</script>
