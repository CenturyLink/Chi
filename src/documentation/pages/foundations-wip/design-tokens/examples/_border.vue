<template lang="pug">
<TitleAnchor title="Border" id="border" />
<TableComponent :data="borderColor" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { designTokensColumns } from '~/fixtures/fixtures';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class Border extends Vue {
  columns = designTokensColumns;
  lumenBorderColor = [
    { name: 'base-light', value: COLORS.GREY_20.value },
    { name: 'base', value: COLORS.GREY_25.value },
    { name: 'base-dark', value: COLORS.GREY_30.value },
    { name: 'primary', value: COLORS.PRIMARY.value },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY.value },
    { name: 'secondary-dark', value: COLORS.CYAN_50.value },
    { name: 'success-light', value: COLORS.GREEN_30.value },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_60.value },
    { name: 'warning-light', value: COLORS.YELLOW_30.value },
    { name: COLORS.WARNING.name, value: COLORS.YELLOW_BRIGHTSPEED_60.value },
    { name: 'danger-light', value: COLORS.RED_30.value },
    { name: COLORS.DANGER.name, value: COLORS.RED_60.value },
    { name: 'info-light', value: COLORS.BLUE_30.value },
    { name: 'info', value: COLORS.BLUE_60.value },
    { name: 'muted-light', value: COLORS.GREY_30.value },
    { name: COLORS.MUTED.name, value: COLORS.GRAY_60.value },
    { name: 'black', value: COLORS.BLACK.value },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value },
  ];

  centurylinkBorderColor = [
    { name: 'base-light', value: COLORS.GREY_20.value },
    { name: 'base', value: COLORS.GREY_25.value },
    { name: 'base-dark', value: COLORS.GREY_30.value },
    { name: 'primary', value: COLORS.PRIMARY_CENTURYLINK.value },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY_CENTURYLINK.value },
    { name: 'secondary-dark', value: COLORS.SECONDARY_CENTURYLINK_DARK.value },
    { name: 'success-light', value: COLORS.GREEN_CENTURYLINK_30.value },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_CENTURYLINK_50.value },
    { name: 'warning-light', value: COLORS.YELLOW_CENTURYLINK_30.value },
    { name: COLORS.WARNING.name, value: COLORS.WARNING_CENTURYLINK.value },
    { name: 'danger-light', value: COLORS.RED_CENTURYLINK_30.value },
    { name: COLORS.DANGER.name, value: COLORS.RED_CENTURYLINK_60.value },
    { name: 'info-light', value: COLORS.BLUE_CENTURYLINK_30.value },
    { name: 'info', value: COLORS.INFO_CENTURYLINK.value },
    { name: 'muted-light', value: COLORS.GREY_30.value },
    { name: COLORS.MUTED.name, value: COLORS.GRAY_60.value },
    { name: 'black', value: COLORS.BLACK.value },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value },
  ];

  theme = useSelectedTheme();

  get borderColor() {
    if (this.theme === 'centurylink') {
      return this.centurylinkBorderColor;
    }
    return this.lumenBorderColor;
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$color-border-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        if (content.name === 'white') {
          return `<div class="-text -rounded -w--80" style="background-color:#000;height:1.25rem;padding:2px;">
    <div class="-text -rounded" style="height:1rem;border:1px solid ${content.value}"></div>
</div>`;
        }
        return `<div class="-text -rounded -w--80" style="height:1rem;border:1px solid ${content.value}"></div>`;
      case 'contrast':
        return `<div class="-text">—</div>`;
      default:
        return '';
    }
  }
}
</script>
