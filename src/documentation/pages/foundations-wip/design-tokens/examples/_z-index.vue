<template lang="pug">
  div
    <TitleAnchor title="Z-index" id="x-index" titleSize="h2" />
    <TableComponent :data="elementZindex" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {ITableColumn, ITableContent} from '~/models/models';

@Component({
  data: () => {
    return {
      columns: [
        {
          title: 'Token',
          key: 'token',
          width: '35%'
        },
        {
          title: 'Value',
          key: 'value',
          width: '65%'
        }
      ]
    };
  }
})
export default class ZIndex extends Vue {
  elementZindex = [
    { name: '0', value: '0' },
    { name: '10', value: '10' },
    { name: '20', value: '20' },
    { name: '30', value: '30' },
    { name: '40', value: '40' },
    { name: '50', value: '50' },
    { name: '60', value: '60' },
    { name: '70', value: '70' },
    { name: '80', value: '80' },
    { name: '90', value: '90' },
  ]

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$z-index-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      default:
        return '';
    }
  }
}
</script>
