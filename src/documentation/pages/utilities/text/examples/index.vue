<template lang="pug">
  .chi-grid__container.-pt--3
    //- <Size />
    //- <Headings />
    <LineHeight />
    <Alignment />
    <Decoration />
    <Transform />
    <Weight />
    <Wrapping />

    <TitleAnchor title="Text colors" id="text-colors" titleSize="h2"/>
    p.-text
      | Change text colors with contextual classes.

    <Brand />
    <Semantic />
    <Complimentary v-if="$store.state.themes.theme === 'lumen'" />

    <TitleAnchor title="Responsiveness" id="text-responsiveness" titleSize="h2"/>
    <Sizes />
    <LineHeights />
    <AlignmentResponsiveness />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Size from './_size.vue';
import Headings from './_headings.vue';
import LineHeight from './_line-height.vue';
import Alignment from './_alignment.vue';
import Decoration from './_decoration.vue';
import Transform from './_transform.vue';
import Weight from './_weight.vue';
import Wrapping from './_wrapping.vue';
import Brand from './_brand.vue';
import Semantic from './_semantic.vue';
import Complimentary from './_complimentary.vue';
import Sizes from './_sizes.vue';
import LineHeights from './_line-heights.vue';
import AlignmentResponsiveness from './_alignment-responsiveness.vue';

@Component({
  components: {
    Size,
    Headings,
    LineHeight,
    Alignment,
    Decoration,
    Transform,
    Weight,
    Wrapping,
    Brand,
    Semantic,
    Complimentary,
    Sizes,
    LineHeights,
    AlignmentResponsiveness
  },
})
export default class Examples extends Vue {}
</script>
