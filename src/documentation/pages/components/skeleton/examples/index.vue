<template lang="pug">
  div
    h2 Examples

    <Base />
    <Rounded />
    <CircleSkeleton />
    <Square />
    <RoundedSquare />
    <ComplexCombination />
    <Sizes />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Rounded from './_rounded.vue';
import CircleSkeleton from './_circle.vue';
import Square from './_square.vue';
import RoundedSquare from './_rounded-square.vue';
import ComplexCombination from './_complex-combination.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Base,
    Rounded,
    CircleSkeleton,
    Square,
    RoundedSquare,
    ComplexCombination,
    Sizes
  }
})
export default class Examples extends Vue {}
</script>
