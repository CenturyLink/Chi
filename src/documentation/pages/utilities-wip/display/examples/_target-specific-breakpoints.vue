<template lang="pug">
  div
    h3 Target specific breakpoints
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As a mobile first framework, it will
      | apply to that specific breakpoint and up.
    <TableComponent :data="values" :columns="columns" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { displayColorColumns } from "~/fixtures/fixtures";
import { ITableColumn, ITableContent } from "~/models/models";

@Component({
  data: () => {
    return {
      values: ['sm', 'md', 'lg', 'xl'],
      columns: displayColorColumns
    };
  }
})
export default class TargetSpecificBreakpoints extends Vue {
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
