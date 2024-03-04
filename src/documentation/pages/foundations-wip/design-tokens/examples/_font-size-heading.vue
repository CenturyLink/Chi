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
    { name: 'h6', value: ['14px', '0.875rem'] },
    { name: 'h5', value: ['16px', '1rem'] },
    { name: 'h4', value: ['18px', '1.125rem'] },
    { name: 'h3', value: ['24px', '1.5rem'] },
    { name: 'h2', value: ['32px', '2rem'] },
    { name: 'h1', value: ['48px', '3rem'] },
  ];

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$font-size-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value[1]}</div> <div class="-text">${content.value[0]}</div>`;
      case 'example':
        return `<div class="-text" style="font-size:${content.value[1]};line-height:1;">Aa</div>`;
      default:
        return '';
    }
  }
}
</script>
