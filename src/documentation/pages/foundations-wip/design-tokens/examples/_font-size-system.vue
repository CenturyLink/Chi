<template lang="pug">
<TitleAnchor title="Font size - headings" id="font-size-headings" />
<TableComponent :data="fontHeadingSize" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { designTokens3Columns } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class FontSizeHeading extends Vue {
  columns = designTokens3Columns;
  fontHeadingSize = [
    { name: '1', value: ['11px', '0.6875rem'] },
    { name: '2', value: ['12px', '0.75rem'] },
    { name: '3', value: ['13px', '0.8125rem'] },
    { name: '4', value: ['14px', '0.875rem'] },
    { name: '5', value: ['16px', '1rem'] },
    { name: '6', value: ['18px', '1.125rem'] },
    { name: '7', value: ['20px', '1.25rem'] },
    { name: '8', value: ['22px', '1.375rem'] },
    { name: '9', value: ['24px', '1.5rem'] },
    { name: '10', value: ['28px', '1.75rem'] },
    { name: '11', value: ['32px', '2rem'] },
    { name: '12', value: ['36px', '2.25rem'] },
    { name: '13', value: ['40px', '2.5rem'] },
    { name: '14', value: ['48px', '3rem'] },
    { name: '15', value: ['56px', '3.5rem'] },
    { name: '16', value: ['64px', '4rem'] },
    { name: '17', value: ['72px', '4.5rem'] },
    { name: '18', value: ['80px', '5rem'] },
    { name: '19', value: ['96px', '6rem'] },
    { name: '20', value: ['120px', '7.5rem'] },
  ];

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$font-size-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value[1]}</div> <div class="-text">${content.value[0]}</div>`;
      case 'example':
        return `<div class="-text" style="font-size:${content.value[1]};line-height:${content.value[0]};">Aa</div>`;
      default:
        return '';
    }
  }
}
</script>
