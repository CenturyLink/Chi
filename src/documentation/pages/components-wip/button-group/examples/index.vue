<template lang="pug">
  div 
    h3 Examples
    <Base />
    <Vertical />
    h3 Fluid buttons
    p.-text
      | Button groups can be expanded to fill the parent space by applying the class <code>-fluid</code>.
    <FluidHorizontal />
    <FluidVertical />
    <FluidAlignment />
    <FluidDisabled />
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      h3 Sizes
      p.-text
        | Button groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>,
        |  <code>-lg</code>, <code>-xl</code>.
        | The default size is <code>-md</code>.
      <SizesHorizontalLumenCenturyLink />
      <SizesVerticalLumenCenturyLink />
      <HybridButtons />
      <HybridFluid />
      <HybridSizesLumenCenturyLink />
    div(v-else)
      h3 Sizes
      p.-text
        | Button groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>,
        |  <code>-lg</code>.
        | The default size is <code>-md</code>.
      <SizesHorizontalPortal />
      <SizesVerticalPortal />
      <HybridButtons />
      <HybridFluid />
      <HybridSizesPortal />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import FluidHorizontal from './_fluid-horizontal.vue';
import FluidVertical from './_fluid-vertical.vue';
import HybridButtons from './_hybrid-buttons.vue';
import HybridSizesLumenCenturyLink from './_hybrid-sizes-lumen-centurylink.vue';
import HybridSizesPortal from './_portal/_hybrid-sizes.vue';
import SizesHorizontalPortal from './_portal/_sizes-horizontal.vue';
import SizesVerticalPortal from './_portal/_sizes-vertical.vue';
import SizesHorizontalLumenCenturyLink from './_sizes-horizontal-lumen-centurylink.vue';
import SizesVerticalLumenCenturyLink from './_sizes-vertical-lumen-centurylink.vue';
import Vertical from './_vertical.vue';

@Component({
  components: {
    Base,
    Vertical,
    FluidHorizontal,
    FluidVertical,
    FluidAlignment,
    FluidDisabled,
    SizesHorizontalLumenCenturyLink,
    SizesVerticalLumenCenturyLink,
    HybridButtons,
    HybridFluid,
    HybridSizesLumenCenturyLink,
    HybridSizesPortal,
    SizesHorizontalPortal,
    SizesVerticalPortal,
  }
})
export default class Examples extends Vue {}
</script>
