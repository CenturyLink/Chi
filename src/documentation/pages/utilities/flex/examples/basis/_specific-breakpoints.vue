<template lang="pug">
  div
    <TitleAnchor title="Target specific breakpoints" id="basis-specific-breakpoints" titleSize="h4"/>
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class.
    <TableComponent :data="getRows()" :columns="columns" additionalClasses="-bordered" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SpecificBreakpoints extends Vue {
  columns = [
    {
      title: `Flex-basis Class`,
      key: 'cell1',
      width: '40%',
    },
    {
      title: 'Value',
      key: 'cell2',
      width: '',
    },
  ]
  types = ['auto', '0', '*'];
  breakpoints = ['sm', 'md', 'lg', 'xl'];

  getRows() {
    return this.breakpoints
      .map((breakpoint) =>
        this.types.map((type) => ({
          cell1: `<code>-flex-basis-${breakpoint}--${type}</code>`,
          cell2: `Visible only from <code>${breakpoint}</code>${type === '*' ? ', can be incremented by 5%' : ''}`,
        }))
      )
      .flat();
  }
}
</script>
