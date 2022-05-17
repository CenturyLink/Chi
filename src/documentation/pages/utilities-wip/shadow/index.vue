<template lang="pug">
  div
    TitleBar(title="Shadow" description="Use shadow utility classes to assist in creating a visual hierarchy.")
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
export default class Shadow extends Vue {}
</script>
