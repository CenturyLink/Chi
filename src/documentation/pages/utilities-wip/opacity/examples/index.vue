<template lang="pug">
  .chi-grid__container.-pt--3
    h2 Examples
    <OpacityBase />
    <OpacityHover />
    <OpacityResponsive />
    <BreakpointsBase />
    <BreakpointsBaseHover />
    <BreakpointsSpecific />
    <BreakpointsSpecificHover />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OpacityBase from './_opacity-base.vue';
import OpacityHover from './_opacity-hover.vue';
import OpacityResponsive from './_opacity-responsive.vue';
import BreakpointsBase from './_breakpoints-base.vue';
import BreakpointsSpecific from './_breakpoints-specific.vue';
import BreakpointsBaseHover from './_breakpoints-base-hover.vue';
import BreakpointsSpecificHover from './_breakpoints-specific-hover.vue';

@Component({
  components: {
    OpacityBase,
    OpacityHover,
    OpacityResponsive,
    BreakpointsBase,
    BreakpointsBaseHover,
    BreakpointsSpecific,
    BreakpointsSpecificHover
  }
})
export default class Examples extends Vue {}
</script>
