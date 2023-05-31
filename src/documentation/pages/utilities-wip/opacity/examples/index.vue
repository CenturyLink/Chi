<template lang="pug">
  .chi-grid__container.-pt--3
    <TitleAnchor title="Examples" id="opacity-title" titleSize="h2"/>
    <Base />
    <Hover />
    <Responsive />
    <BreakpointsBase />
    <BreakpointsBaseHover />
    <BreakpointsSpecific />
    <BreakpointsSpecificHover />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Hover from './_hover.vue';
import Responsive from './_responsive.vue';
import BreakpointsBase from './_breakpoints-base.vue';
import BreakpointsSpecific from './_breakpoints-specific.vue';
import BreakpointsBaseHover from './_breakpoints-base-hover.vue';
import BreakpointsSpecificHover from './_breakpoints-specific-hover.vue';

@Component({
  components: {
    Base,
    Hover,
    Responsive,
    BreakpointsBase,
    BreakpointsBaseHover,
    BreakpointsSpecific,
    BreakpointsSpecificHover
  }
})
export default class Examples extends Vue {}
</script>
