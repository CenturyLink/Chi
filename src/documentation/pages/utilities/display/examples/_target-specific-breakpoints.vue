<template lang="pug">
  div
    h3 Target specific breakpoints
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As a mobile first framework, it will
      | apply to that specific breakpoint and up.
    <TableComponent :data="values" :columns="columns" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { displayDefaultColumns } from '~/fixtures/fixtures';
import { type ITableColumn, type ITableContent } from '~/models/models';

@NuxtComponent({})
export default class TargetSpecificBreakpoints extends Vue {
  values: ['sm', 'md', 'lg', 'xl'];
  columns: displayDefaultColumns;
  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-d--${content}--none</code>`;
      case 'value':
        return `<div class="-text">Hidden only on <code>${content}</code></div>`;
      default:
        return '';
    }
  }
}
</script>
