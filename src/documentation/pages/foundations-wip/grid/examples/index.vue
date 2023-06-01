<template lang="pug">
 .chi-grid__container.-pt--3
      <TitleAnchor title="Overview" id="overview" titleSize="h2" />
      p.-text
        | Grids accelerate the development process by imposing a set of constraints 
        | that guide developers where to place elements and how to size them. Adhering 
        | to the grid ensures no matter what Lumen webpage or application customers use, 
        | they are provided with a consistent and familiar experience.

      <TitleAnchor title="Layout Grid" id="layout-grid" titleSize="h2" />
      p.-text
        | Chi includes a responsive mobile-first 12-column layout grid. Built on the 
        | flexbox standards, the Chi layout grid allows for complex layouts with 
        | minimal markup and styles.

      <Breakpoints />
      <AutomaticLayout />
      <RemovingGutters />
      <CustomizingGridLayout />
      <ColumnSizing />
      <MixingSizesAutomatic />
      <AvailabeColumnSizes />
      <ColumnWrapping />
      <OffsetPositionColumns />
      <AvailabeOffsetSizes />
      <ReorderingColumns />
      <ResponsiveLayout />
      <ViewportColumnSizing />
      <ColumnStacking />
      <ColumnOffset />
      <Alignment />
      <AlignTop />
      <AlignCenter />
      <AlignBottom />
      <ColumnSpecificVerticalAlignment />
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breakpoints from './_breakpoints.vue';
import AutomaticLayout from './_automatic-layout.vue';
import RemovingGutters from './_removing-gutters.vue';
import CustomizingGridLayout from './_customizing-grid-layouts.vue';
import ColumnSizing from './_column-sizing.vue';
import MixingSizesAutomatic from './_mixing-sizes-automatic.vue';
import AvailabeColumnSizes from './_available-column-sizes.vue';
import ColumnWrapping from './_column-wrapping.vue';
import OffsetPositionColumns from './_offset-position-columns.vue';
import AvailabeOffsetSizes from './_available-offset-sizes.vue';
import ReorderingColumns from './_reordering-columns.vue';
import ResponsiveLayout from './_responsive-layout.vue';
import ViewportColumnSizing from './_viewport-column-sizing.vue';
import ColumnStacking from './_column-stacking.vue';
import ColumnOffset from './_viewport-column-offset.vue';
import Alignment from './_alignment.vue';
import AlignTop from './_align-top.vue';
import AlignCenter from './_align-center.vue';
import AlignBottom from './_align-bottom.vue';
import ColumnSpecificVerticalAlignment from './_column-specific-vertical-alignment.vue';

@Component({
  components: {
    Breakpoints,
    AutomaticLayout,
    RemovingGutters,
    CustomizingGridLayout,
    ColumnSizing,
    MixingSizesAutomatic,
    AvailabeColumnSizes,
    ColumnWrapping,
    OffsetPositionColumns,
    AvailabeOffsetSizes,
    ReorderingColumns,
    ResponsiveLayout,
    ViewportColumnSizing,
    ColumnStacking,
    ColumnOffset,
    Alignment,
    AlignTop,
    AlignCenter,
    AlignBottom,
    ColumnSpecificVerticalAlignment
  }
})
export default class Examples extends Vue {}
</script>
