<template lang="pug">
  div 
    h2 Examples

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <Base />
      <Empty />
      <NoBorder />
      <Striped />
      <Hover />
      <Bordered />
      <Active />
      <Selectable />
      <RadioSelection />
      <Accordion />
      <Sorting />
      <SortingAscending />
      <SortingDescending />
      <Sizes />
    
    div(v-if="['portal', 'brightspeed', 'colt'].includes($store.state.themes.theme)")
      <BasePortal />
      <SecondLineWrapping />
      <State />
      <EmptyPortal />
      <RadioSelectionPortal />
      <AccordionPortal />
      <AccordionChild />
      <AccordionGrandChild />
      <TwoTierHeader />
 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Accordion from './base/_accordion.vue';
import Active from './base/_active.vue';
import Base from './base/_base.vue';
import Bordered from './base/_bordered.vue';
import Empty from './base/_empty.vue';
import Hover from './base/_hover.vue';
import NoBorder from './base/_no-border.vue';
import RadioSelection from './base/_radio-selection.vue';
import Selectable from './base/_selectable.vue';
import Sizes from './base/_sizes.vue';
import Striped from './base/_striped.vue';
import Sorting from './base/_sorting.vue';
import SortingAscending from './base/_sorting-ascending.vue';
import SortingDescending from './base/_sorting-descending.vue';

import AccordionChild from './portal/_accordion-child.vue';
import AccordionGrandChild from './portal/_accordion-grand-child.vue';
import AccordionPortal from './portal/_accordion.vue';
import BasePortal from './portal/_base.vue';
import EmptyPortal from './portal/_empty.vue';
import RadioSelectionPortal from './portal/_radio-selection.vue';
import SecondLineWrapping from './portal/_second-line-wrapping.vue';
import State from './portal/_state.vue';
import TwoTierHeader from './portal/_two-tier.vue';

@Component({
  components: {
    Accordion,
    Active,
    Base,
    Bordered,
    Empty,
    Hover,
    RadioSelection,
    Selectable,
    Sizes,
    SortingAscending,
    SortingDescending,
    NoBorder,
    Sorting,
    Striped,
    AccordionChild,
    AccordionGrandChild,
    AccordionPortal,
    BasePortal,
    EmptyPortal,
    RadioSelectionPortal,
    SecondLineWrapping,
    State,
    TwoTierHeader
  }
})
export default class Examples extends Vue {}
</script>
