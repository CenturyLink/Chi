<template lang="pug">
  div
    h2 Examples
    div
      <Area />
      <Sizes />     
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Area from './_area.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Area,
    Sizes,
  }
})
export default class FlagIconExamples extends Vue {}
</script>
