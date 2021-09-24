<template lang="pug">
  div
    h3 Additional Sizes
    div
      <SmallSize />
      <ExtraSmallSize />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SmallSize from './_small_size.vue';
import ExtraSmallSize from './_extra_small_size.vue';

@Component({
  components: {
    SmallSize,
    ExtraSmallSize
  }
})
export default class AdditionalSizesExamples extends Vue {}
</script>
