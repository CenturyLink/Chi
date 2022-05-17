<template lang="pug">
  div
    TitleBar(title="Spacing" description="Use shorthand margin and padding utility classes to control spacing between elements.")
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
export default class Spacing extends Vue {}
</script>
