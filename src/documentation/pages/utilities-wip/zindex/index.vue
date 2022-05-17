<template lang="pug">
  div
    TitleBar(title="Z-index" description="Use z-index utility classes to control the index of your elements in the z dimension. When two elements overlap each other, z-index establishes what element overlaps the other. Usually elements with larger z-index overlap elements with smaller ones.")
    .chi-grid__container.-pt--3
      SupportedValues
      Example
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SupportedValues from './_supported-values.vue';
import Example from './_example.vue';

@Component({
  components: {
    SupportedValues,
    Example
  }
})
export default class ZIndex extends Vue {}
</script>
