<template lang="pug">
  div
    <TitleAnchor title="Maximum width/height" id="maximum-width-height" />
    p.-text Using the format <code>-mw--{value}</code> for max-width and <code>-mh--{value}</code> for max-height
    <TableComponent :data="widthHeightRows" :columns="columns" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sizingColumns } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      columns: sizingColumns
    };
  }
})
export default class maximumWidthHeight extends Vue {
  width = ['100', '480', '640', '720', '960', '980', '1200'];
  height = ['100', '400', '480'];

  get widthHeightRows() {
    return [...this.getRows(this.width, 'width', 'w'), ...this.getRows(this.height, 'height', 'h')]
  }

  getRows(array: string[], name: string, shortName: string) {
    return array.map(value => ({
      class: `<code>-m${shortName}--${value}</code>`,
      value: `<code>max-${name}: ${value}${value === '100' ? '%' : 'px'};</code>`
    }))
  }
}
</script>
