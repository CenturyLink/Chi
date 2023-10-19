<template lang="pug">
  div
    <TitleAnchor title="Color System" id="color-system" />
    <TableComponent :data="systemColor" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { colorKits, designTokens3Columns } from '~/fixtures/fixtures';
import { ITableColumn, ITableContent } from '~/models/models';

@Component({
  data: () => {
    return {
      columns: designTokens3Columns
    };
  }
})
export default class ColorSystem extends Vue {
  lumenSystemColor = [
    ...colorKits.gray,
    ...colorKits.red,
    ...colorKits.pink,
    ...colorKits.purple,
    ...colorKits.indigo,
    ...colorKits.navy,
    ...colorKits.blue,
    ...colorKits.cyan,
    ...colorKits.teal,
    ...colorKits.green,
    ...colorKits.yellow,
    ...colorKits.orange,
    ...colorKits.black,
    ...colorKits.white,
  ]

  centurylinkSystemColor = [
    ...colorKits.gray,
    ...colorKits.redCenturylink,
    ...colorKits.pink,
    ...colorKits.indigoCenturylink,
    ...colorKits.navy,
    ...colorKits.blueCenturylink,
    ...colorKits.cyanCenturylink,
    ...colorKits.tealCenturylink,
    ...colorKits.mint,
    ...colorKits.greenCenturylink,
    ...colorKits.yellowCenturylink,
    ...colorKits.orangeCenturylink,
    ...colorKits.black,
    ...colorKits.white,
  ]

  brightspeedSystemColor = [
    ...colorKits.greyBrightspeed,
    ...colorKits.redBrightspeed,
    ...colorKits.pink,
    ...colorKits.purple,
    ...colorKits.indigo,
    ...colorKits.navy,
    ...colorKits.blue,
    ...colorKits.cyan,
    ...colorKits.teal,
    ...colorKits.green,
    ...colorKits.yellowBrightspeed,
    ...colorKits.orangeBrightspeed,
    ...colorKits.black,
    ...colorKits.white,
  ]

  get theme() {
    return this.$store.state.themes.theme;
  }

  get systemColor() {
    if (this.theme === 'centurylink') {
      return this.centurylinkSystemColor;
    } else if (this.theme === 'brightspeed') {
      return this.brightspeedSystemColor;
    }
    return this.lumenSystemColor;
  }


  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$color-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        const isSpecial = content.name === 'white';
        return `<div class="-text -rounded -w--100 -w-lg--60 ${isSpecial ? '-s--1' : ''}" style="height:1rem;background-color:${content.value}"></div>`;
      default:
        return '';
    }
  }
}
</script>
