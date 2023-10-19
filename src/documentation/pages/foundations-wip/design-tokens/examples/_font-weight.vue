<template lang="pug">
  div
    <TitleAnchor title="Font weight" id="font-weight" />
    <TableComponent :data="fontWeight" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {ITableColumn, ITableContent} from '~/models/models';
import { designTokens3Columns } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      columns: designTokens3Columns
    };
  }
})
export default class FontWeight extends Vue {
  fontWeight = [
    { name: 'light', value: '300' },
    { name: 'normal', value: '400' },
    { name: 'semi-bold', value: '600' },
    { name: 'bold', value: '700' },
    { name: 'extra-bold', value: '800' },
  ]

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$font-weight-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        return `<div class="-text" style="font-weight:${content.value}">Aa</div>`
      default:
        return '';
    }
  }
}
</script>
