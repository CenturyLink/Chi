<template lang="pug">
  div
    <TitleAnchor title="Width" id="width" titleSize="h2" />

    <TitleAnchor title="Target all breakpoints" id="target-all-breakpoints" />
    p.-text Sizing utility classes with no breakpoint defined apply to all screen sizes.
    <TableComponent :data="allBreakpointsRows" :columns="columns" />

    <TitleAnchor title="Target specific breakpoints" id="target-specific-breakpoints" />
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
export default class Width extends Vue {
  types = ['auto', '*'];
  breakpoints = ['sm', 'md', 'lg', 'xl'];

  get allBreakpointsRows() {
    return this.types.map(type => ({
      class: `<code>-w--${type}</code>`,
      value: type === '*' ? 'can be incremented by 5%' : `<code>width: ${type};</code>`
    }))
  }

  get specificBreakpointsRows() {
    return this.breakpoints.map(breakpoint =>
      this.types.map(type => ({
        class: `<code>-w-${breakpoint}--${type}</code>`,
        value: `Visible only from <code>${breakpoint}</code>${type === '*' ? ', can be incremented by 5%' : ''}`
      }))).flat();
  }
}
</script>
