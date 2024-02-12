<template lang="pug">
  .chi-grid__container.-pt--3
    <TitleAnchor title="Notation" id="vertical-align-title" titleSize="h2"/>
    p.-text
      | Vertical-align classes can be defined using the format <code>-vertical-align[-{breakpoint}]--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    <Breakpoints />
    <BreakpointsSpecific />

    <TitleAnchor title="Examples" id="vertical-align-examples" titleSize="h2"/>
    p.-text
      | Vertical-align is only compatible with inline, inline-block, inline-table, and table cell elements.
      | It cannot be used to vertically align block-level elements.

    <Baseline />
    <Top />
    <Middle />
    <Bottom />
    <TextTop />
    <TextBottom />
    <TableCellElements />

</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Breakpoints from './_breakpoints.vue';
import BreakpointsSpecific from './_breakpoints-specific.vue';
import Baseline from './_baseline.vue';
import Top from './_top.vue';
import Middle from './_middle.vue';
import Bottom from './_bottom.vue';
import TextTop from './_text-top.vue';
import TextBottom from './_text-bottom.vue';
import TableCellElements from './_table-cell.vue';

@NuxtComponent({
  components: {
    Breakpoints,
    BreakpointsSpecific,
    Baseline,
    Top,
    Middle,
    Bottom,
    TextTop,
    TextBottom,
    TableCellElements,
  },
})
export default class Examples extends Vue {}
</script>
