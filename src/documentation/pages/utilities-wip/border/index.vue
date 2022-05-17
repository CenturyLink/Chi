<template lang="pug">
  div
    TitleBar(title="Border" description="Use shorthand border utility classes to control border, border width and border color on elements.")
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
