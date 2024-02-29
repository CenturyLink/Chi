<template lang="pug">
  div
    h3 Target all breakpoints
    p.-text Display utility classes with no breakpoint defined apply to all screen sizes.
    <TableComponent :data="values" :columns="columns" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { displayDefaultColumns } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class TargetAllBreakpoints extends Vue {
  values = ['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex'];
  columns = displayDefaultColumns;
  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-d--${content}</code>`;
      case 'value':
        return `<code>display:  ${content};</code>`;
      default:
        return '';
    }
  }
}
</script>
