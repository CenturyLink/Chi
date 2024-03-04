<template lang="pug">
<TitleAnchor title="Border radius" id="border-radius" titleSize="h2" />
<TableComponent :data="borderRadius" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { designTokens3Columns } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class BorderRadius extends Vue {
  columns = designTokens3Columns;

  borderRadius = [
    { name: 'base', value: ['4px', '0.25rem'] },
    { name: 'sharp', value: ['0'] },
    { name: 'circle', value: ['50%'] },
  ];

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$border-radius-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value[0]}</div>${
          content.value[1] ? `<div class="-text">${content.value[1]}</div>` : ''
        }`;
      case 'example':
        return `<div class="-text -bg--black" style="height:1rem;width:1rem;border-radius:${content.value[0]}"></div>`;
      default:
        return '';
    }
  }
}
</script>
