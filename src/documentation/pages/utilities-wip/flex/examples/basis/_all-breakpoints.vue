<template lang="pug">
  div
    <TitleAnchor title="Target all breakpoints" id="basis-all-breakpoints" titleSize="h4"/>
    p.-text
      | Flex-basis utility classes with no breakpoint defined apply to all screen sizes.
    table.chi-table.-bordered.-mb--3.-mt--3
      thead
        tr
          th
            div Flex-basis Class
          th
            div Value
      tbody
        tr(v-for="type in types")
          td(width="40%")
            code="-flex-basis--{{type}}"
          td
            template(v-if="type=='*'")="can be incremented by 5%"
            code(v-else)="flex-basis: {{type}}"

    //        todo finish when TableComponent will be updated
    <TableComponent :data="rows" :columns="columns" :getContent="getContent" additionalClasses="" />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn } from "~/models/models";

@Component({
  data: () => {
    return {
      types: ['auto;', '0;', '*'],
      columns: [
      {
        title: `Flex-basis Class`,
        key: 'cell1',
        width: '40%',
      },
      {
        title: 'Value',
        key: 'cell2',
        width: ''
      },
    ],
      rows: [
        { cell1: 'Name 1', cell2: 'name-1' },
        { cell1: 'Name 2', cell2: 'name-2' },
        { cell1: 'Name 3', cell2: 'name-3' }
      ],
    };
  }
})
export default class AllBreakpoints extends Vue {
  getContent(column: ITableColumn, content: any) {
    return content[column.key];
  }
}
</script>
