<template lang="pug">
  .chi-grid__container.-pt--3
    <TitleAnchor title="Examples" id="opacity-title" titleSize="h2"/>
    <Base />
    <Hover />

    <TitleAnchor title="Responsive" id="opacity-responsive" titleSize="h2"/>
    p.-text
      | Responsive opacity classes can be defined using the format <code>-opacity[-{breakpoint}]--{value}</code> and
      | <code>-opacity-hover[-{breakpoint}]--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    <TitleAnchor title="Target all breakpoints" id="opacity-target-all"/>
    p.-text
      | Opacity utility classes with no breakpoint defined apply to all screen sizes.

    <BreakpointsBase />
    <BreakpointsBaseHover />

    <TitleAnchor title="Target specific breakpoints" id="breakpoints-specific"/>
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As Chi is a mobile first library, the value
      | will apply to that specific breakpoint and up.

    <BreakpointsSpecific />
    <BreakpointsSpecificHover />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Hover from './_hover.vue';
import BreakpointsBase from './_breakpoints-base.vue';
import BreakpointsSpecific from './_breakpoints-specific.vue';
import BreakpointsBaseHover from './_breakpoints-base-hover.vue';
import BreakpointsSpecificHover from './_breakpoints-specific-hover.vue';

@Component({
  components: {
    Base,
    Hover,
    BreakpointsBase,
    BreakpointsBaseHover,
    BreakpointsSpecific,
    BreakpointsSpecificHover,
  },
})
export default class Examples extends Vue {}
</script>
