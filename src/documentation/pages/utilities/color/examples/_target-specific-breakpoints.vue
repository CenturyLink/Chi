<template lang="pug">
  div
    h4 Target specific breakpoints
    p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.
    <TableComponent :data="values" :columns="columns" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { defaultColumns } from '~/fixtures/fixtures';


@NuxtComponent({})
export default class TargetSpecificBreakpoints extends Vue {
  sizes = ['sm', 'md', 'lg', 'xl'];
  colors = [
    'none',
    'primary',
    'secondary',
    'white',
    'black',
    'muted',
    'grey',
    'grey-20',
    'grey-30',
    'success',
    'info',
    'warning',
    'danger',
  ];
  columns = defaultColumns;
  get values() {
    return this.sizes
      .map((size) =>
        this.colors.map((color) => {
          return { name: `${size}--${color}`, value: size };
        })
      )
      .flat();
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-bg--${content.name}</code>`;
      case 'value':
        return `<div class="-text">Visible only from <code>${content.value}</code></div>`;
      default:
        return '';
    }
  }
}
</script>
