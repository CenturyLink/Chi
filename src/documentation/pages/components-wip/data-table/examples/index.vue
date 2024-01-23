<template lang="pug">
  div 
    h2 Examples

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <Complex />
      <Base />
      <Empty />
      <ConfigStyled />
      <Active />
      <Selectable />
      <Accordion />
      <Sorting />
      <Sizes />
    
    div(v-if="['portal', 'brightspeed', 'colt'].includes($store.state.themes.theme)")
      <ComplexPortal />
      <BasePortal />
      <SecondLineWrapping />
      <State />
      <EmptyPortal />
      <RadioSelectionPortal />
      <AccordionPortal />
      <TwoTierHeader />
 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Accordion from './base/_accordion.vue';
import Active from './base/_active.vue';
import Base from './base/_base.vue';
import Empty from './base/_empty.vue';
import ConfigStyled from './base/_config-styled.vue';
import Selectable from './base/_selectable.vue';
import Sizes from './base/_sizes.vue';
import Sorting from './base/_sorting.vue';
import Complex from './base/_complex.vue';

import AccordionPortal from './portal/_accordion.vue';
import BasePortal from './portal/_base.vue';
import EmptyPortal from './portal/_empty.vue';
import RadioSelectionPortal from './portal/_radio-selection.vue';
import SecondLineWrapping from './portal/_second-line-wrapping.vue';
import State from './portal/_state.vue';
import TwoTierHeader from './portal/_two-tier.vue';
import ComplexPortal from './portal/_complex.vue';

@Component({
  components: {
    Complex,
    Accordion,
    Active,
    Base,
    Empty,
    Selectable,
    Sizes,
    ConfigStyled,
    Sorting,
    AccordionPortal,
    BasePortal,
    EmptyPortal,
    RadioSelectionPortal,
    SecondLineWrapping,
    State,
    TwoTierHeader,
    ComplexPortal
  }
})
export default class Examples extends Vue {}
</script>
