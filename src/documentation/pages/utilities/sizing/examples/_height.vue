<template lang="pug">
  div
    <TitleAnchor title="Height" id="height" titleSize="h2" />

    <TitleAnchor title="Target all breakpoints" id="target-all-breakpoints-1" />
    p.-text Sizing utility classes with no breakpoint defined apply to all screen sizes.
    <TableComponent :data="allBreakpointsRows" :columns="columns" />

    <TitleAnchor title="Target specific breakpoints" id="target-specific-breakpoints-1" />
    p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.
    <TableComponent :data="specificBreakpointsRows" :columns="columns" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sizingColumns } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      columns: sizingColumns
    };
  }
})
export default class Height extends Vue {
  types = ['auto', '25', '50', '75', '100'];
  breakpoints = ['sm', 'md', 'lg', 'xl'];

  get allBreakpointsRows() {
    return this.types.map(type => ({
      class: `<code>-h--${type}</code>`,
      value: `<code>height: ${type}${type !== 'auto' ? '%' : ''};</code>`
    }))
  }

  get specificBreakpointsRows() {
    return this.breakpoints.map(breakpoint =>
      this.types.map(type => ({
        class: `<code>-h-${breakpoint}--${type}</code>`,
        value: `Visible only from <code>${breakpoint}</code>`
      }))).flat();
  }
}
</script>
