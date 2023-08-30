<template lang="pug">
  div
    <TitleAnchor title="Target all breakpoints" id="breakpoints-base-vertical" />
    p.-text
      | Vertical-align utility classes with no breakpoint defined apply to all screen sizes.
    <TableComponent :columns="columns" :data="values" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn, ITableContent } from "~/models/models";
import { defaultColumns } from "~/fixtures/fixtures";

@Component({
  data: () => {
    return {
      columns: defaultColumns,
      values: [
        {
          name: 'baseline',
          value: 'baseline'
        },
        {
          name: 'top',
          value: 'top'
        },
        {
          name: 'middle',
          value: 'middle'
        },
        {
          name: 'bottom',
          value: 'bottom'
        },
        {
          name: 'text-top',
          value: 'text-top'
        },
        {
          name: 'text-bottom',
          value: 'text-bottom'
        }
      ]
    };
  },
})
export default class Breakpoints extends Vue {
  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-vertical-align--${content.name}</code>`;
      case 'value':
        return `<code>vertical-align: ${content.value}</code>`;
      default:
        return '';
    }
  };
}
</script>
