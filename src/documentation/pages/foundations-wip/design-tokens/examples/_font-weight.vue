<template lang="pug">
<TitleAnchor title="Font weight" id="font-weight" />
<TableComponent :data="fontWeight" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { designTokens3Columns } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class FontWeight extends Vue {
  columns = designTokens3Columns;
  fontWeight = [
    { name: 'light', value: '300' },
    { name: 'normal', value: '400' },
    { name: 'semi-bold', value: '600' },
    { name: 'bold', value: '700' },
    { name: 'extra-bold', value: '800' },
  ];

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$font-weight-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        return `<div class="-text" style="font-weight:${content.value}">Aa</div>`;
      default:
        return '';
    }
  }
}
</script>
