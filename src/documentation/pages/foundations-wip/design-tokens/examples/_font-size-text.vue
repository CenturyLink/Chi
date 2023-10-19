<template lang="pug">
  div
    <TitleAnchor title="Font size - text" id="font-size-text" />
    <TableComponent :data="fontSizeText" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
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
export default class FontSizeText extends Vue {
  fontSizeText = [
    { name: 'base', value: ['14px', '0.875rem'] },
    { name: '2xs', value: ['11px', '0.6875rem'] },
    { name: 'xs', value: ['12px', '0.75rem'] },
    { name: 'sm', value: ['13px', '0.8125rem'] },
    { name: 'md', value: ['14px', '0.875rem'] },
    { name: 'lg', value: ['16px', '1rem'] },
    { name: 'xl', value: ['18px', '1.125rem'] },
  ]

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$font-size-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value[1]}</div> <div class="-text">${content.value[0]}</div>`;
      case 'example':
        return `<div class="-text" style="font-size:${content.value[1]}">Aa</div>`
      default:
        return '';
    }
  }
}
</script>
