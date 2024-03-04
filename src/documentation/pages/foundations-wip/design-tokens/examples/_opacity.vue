<template lang="pug">
<TitleAnchor title="Opacity" id="opacity" titleSize="h2" />
<TableComponent :data="elementOpacity" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { designTokens3Columns } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class Opacity extends Vue {
  columns = designTokens3Columns;
  elementOpacity = [
    { name: '0', value: '0' },
    { name: '20', value: '0.2' },
    { name: '40', value: '0.4' },
    { name: '60', value: '0.6' },
    { name: '80', value: '0.8' },
    { name: '100', value: '1' },
  ];

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$opacity-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        return `<div class="example-opacity -rounded" style="height:3rem;"><div class="-text -bg--black -rounded" style="height:3rem;opacity:${content.value}"></div></div>`;
      default:
        return '';
    }
  }
}
</script>
