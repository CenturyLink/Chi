<template lang="pug">
  div
    h3 Special display classes
    p.-text To target screen readers only or a specific media type (@media screen or @media print), use the below classes.
    <TableComponent :data="values" :columns="columns" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { displayDefaultColumns } from "~/fixtures/fixtures";
import { ITableColumn, ITableContent } from "~/models/models";

@Component({
  data: () => {
    return {
      values: [
        {
          name: '-sr--only',
          value: 'Screen reader only'
        },
        {
          name: '-d-screen--only',
          value: {
            code: ['display: block;', 'display: none;'],
            text: ['on @media screen,', 'on @media print.']
          }
        },
        {
          name: '-d-print--only',
          value: {
            code: ['display: none;', 'display: block;'],
            text: ['on @media screen,', 'on @media print.']
          }
        }
      ],
      columns: displayDefaultColumns
    };
  }
})
export default class SpecialDisplayClasses extends Vue {
  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-d--${content.name}--none</code>`;
      case 'value':
        if (typeof content.value === 'string') {
          return content.value;
        }
        return `<code>${content.value.code[0]}</code>${content.value.text[0]} <code>${content.value.code[1]}</code>${content.value.text[1]}`;
      default:
        return '';
    }
  }
}
</script>
