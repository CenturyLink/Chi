<template lang="pug">
  div
    <TitleAnchor title="Icon" id="color-icon" />
    <TableComponent :data="iconColor" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { designTokensColumns } from '~/fixtures/fixtures';
import {ITableColumn, ITableContent} from '~/models/models';
import { COLORS } from  '~/constants/constants';

@Component({
  data: () => {
    return {
      columns: designTokensColumns
    };
  }
})
export default class ColorIcon extends Vue {
  lumenIconColor = [
    { name: 'base', value: COLORS.GREY.value, contrast: '10.2:1' },
    { name: 'primary', value: COLORS.PRIMARY.value, contrast: '4.8:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY.value, contrast: '10.6:1' },
    { name: 'secondary-dark', value: COLORS.CYAN_50.value, contrast: '3:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_60.value, contrast: '4.1:1' },
    { name: COLORS.WARNING.name, value: COLORS.YELLOW_BRIGHTSPEED_60.value, contrast: '4.1:1' },
    { name: COLORS.DANGER.name, value: COLORS.RED_60.value, contrast: '4.1:1' },
    { name: 'info', value: COLORS.BLUE_60.value, contrast: '4.1:1' },
    { name: 'muted-light', value: COLORS.GRAY_50.value, contrast: '3.1:1' },
    { name: COLORS.MUTED.name, value: COLORS.GRAY_60.value, contrast: '5.6:1' },
    { name: 'muted-dark', value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '21:1' }
  ]

  centurylinkIconColor = [
    { name: 'base', value: COLORS.GRAY_100.value, contrast: '15.4:1' },
    { name: 'primary', value: COLORS.PRIMARY_CENTURYLINK.value, contrast: '8:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY_CENTURYLINK.value, contrast: '11.2:1' },
    { name: COLORS.SECONDARY_CENTURYLINK_DARK.name, value: COLORS.SECONDARY_CENTURYLINK_DARK.value, contrast: '3.3:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_CENTURYLINK_50.value, contrast: '3.5:1' },
    { name: COLORS.WARNING.name, value: COLORS.WARNING_CENTURYLINK.value, contrast: '3.6:1' },
    { name: COLORS.DANGER.name, value: COLORS.RED_CENTURYLINK_50.value, contrast: '3.3:1' },
    { name: 'info', value: COLORS.BLUE_CENTURYLINK_50.value, contrast: '3.4:1' },
    { name: 'muted-light', value: COLORS.GRAY_50.value, contrast: '3.1:1' },
    { name: COLORS.MUTED.name, value: COLORS.GRAY_60.value, contrast: '5.6:1' },
    { name: 'muted-dark', value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '21:1' }
  ]

  brightspeedIconColor = [
    { name: 'base', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: 'primary', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.YELLOW_BRIGHTSPEED_40.value, contrast: '13.5:1' },
    { name: COLORS.SECONDARY_CENTURYLINK_DARK.name, value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_60.value, contrast: '4.1:1' },
    { name: COLORS.WARNING.name, value: COLORS.YELLOW_BRIGHTSPEED_60.value, contrast: '4.1:1' },
    { name: COLORS.DANGER.name, value: COLORS.RED_BRIGHTSPEED_60.value, contrast: '5:1' },
    { name: 'info', value: COLORS.BLUE_60.value, contrast: '4.1:1' },
    { name: 'muted-light', value: COLORS.GRAY_50.value, contrast: '3.1:1' },
    { name: COLORS.MUTED.name, value: COLORS.GRAY_60.value, contrast: '5.6:1' },
    { name: 'muted-dark', value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '21:1' }
  ]

  generatePortalIconColor() {
    const portalIconColor = [...this.lumenIconColor];
    const portalBase = { name: 'base', value: COLORS.BLUE_75.value, contrast: '6.1:1' }
    portalIconColor[0] = portalBase;
    portalIconColor[1] = portalBase;
    return portalIconColor;
  }

  get theme() {
    return this.$store.state.themes.theme;
  }

  get iconColor() {
    if (this.theme === 'centurylink') {
      return this.centurylinkIconColor;
    } else if (this.theme === 'brightspeed') {
      return this.brightspeedIconColor;
    } else if (this.theme === 'portal') {
      return this.generatePortalIconColor();
    }
    return this.lumenIconColor;
  }


  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$color-icon-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        if (content.name === 'white' || content.name === 'secondary') {
          return `<div class="-text--lg -lh--1 -rounded -d--inline-block" style="background-color:#000;padding:2px;color:${content.value}"><i class="chi-icon icon-circle" aria-hidden="true"></i></div>`;
        } else {
          return `<div class="-text--lg -lh--1" style="color:${content.value}"><i class="chi-icon icon-circle" aria-hidden="true"></i></div>`;
        }
      case 'contrast':
        return `<i class="chi-icon icon-check -xs -icon--success -mr--1" aria-hidden="true"></i>
<span>${content.contrast}</span>`;
      default:
        return '';
    }
  }
}
</script>
