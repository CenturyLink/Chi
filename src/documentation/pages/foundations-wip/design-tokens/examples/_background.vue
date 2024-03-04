<template lang="pug">
<TitleAnchor title="Background" id="background" />
<TableComponent :data="backgroundColor" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { designTokensColumns } from '~/fixtures/fixtures';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class Background extends Vue {
  columns = designTokensColumns;
  lumenBackgroundColor = [
    { name: 'base', value: COLORS.WHITE.value, contrast: '15.4:1' },
    { name: 'base-dark', value: COLORS.GREY_15.value, contrast: '14.1:1' },
    { name: 'base-darker', value: COLORS.GREY_20.value, contrast: '13.4:1' },
    { name: 'base-darkest', value: COLORS.GREY_25.value, contrast: '11.4:1' },
    { name: 'primary-light', value: COLORS.INFO_LIGHTER.value, contrast: '13.5:1' },
    { name: 'primary', value: COLORS.PRIMARY.value, contrast: '4.8:1' },
    { name: 'secondary-light', value: COLORS.SECONDARY_LIGHT.value, contrast: '14:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY.value, contrast: '7.7:1' },
    { name: 'secondary-dark', value: COLORS.CYAN_50.value, contrast: '5.1:1' },
    { name: 'success-lighter', value: COLORS.SUCCESS_LIGHTER.value, contrast: '14.8:1' },
    { name: 'success-light', value: COLORS.SUCCESS_LIGHT.value, contrast: '13.8:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_60.value, contrast: '5.2:1' },
    { name: 'warning-lighter', value: COLORS.WARNING_LIGHTER.value, contrast: '14.6:1' },
    { name: 'warning-light', value: COLORS.WARNING_LIGHT.value, contrast: '13.2:1' },
    { name: COLORS.WARNING.name, value: COLORS.WARNING.value, contrast: '5.2:1' },
    { name: 'danger-lighter', value: COLORS.DANGER_LIGHTER.value, contrast: '14.4:1' },
    { name: 'danger-light', value: COLORS.DANGER_LIGHT.value, contrast: '13.1:1' },
    { name: COLORS.DANGER.name, value: COLORS.DANGER.value, contrast: '5.2:1' },
    { name: 'info-lighter', value: COLORS.INFO_LIGHT.value, contrast: '14.4:1' },
    { name: 'info-light', value: COLORS.INFO_LIGHTER.value, contrast: '13.5:1' },
    { name: 'info', value: COLORS.INFO.value, contrast: '4.8:1' },
    { name: 'muted-lighter', value: COLORS.MUTED_LIGHTER.value, contrast: '14.6:1' },
    { name: 'muted-light', value: COLORS.MUTED_LIGHT.value, contrast: '13.4:1' },
    { name: COLORS.MUTED.name, value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: 'black', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '15.4:1' },
  ];

  centurylinkBackgroundColor = [
    { name: 'base', value: COLORS.WHITE.value, contrast: '15.4:1' },
    { name: 'base-dark', value: COLORS.GREY_15.value, contrast: '14.1:1' },
    { name: 'base-darker', value: COLORS.GREY_20.value, contrast: '13.4:1' },
    { name: 'base-darkest', value: COLORS.GREY_25.value, contrast: '11.4:1' },
    { name: 'primary-lighter', value: COLORS.PRIMARY_LIGHTER.value, contrast: '14.4:1' },
    { name: 'primary-light', value: COLORS.BLUE_CENTURYLINK_20.value, contrast: '13.4:1' },
    { name: 'primary', value: COLORS.PRIMARY_CENTURYLINK.value, contrast: '8:1' },
    { name: 'primary-dark', value: COLORS.PRIMARY_DARK.value, contrast: '11.7:1' },
    { name: 'primary-darker', value: COLORS.PRIMARY_DARKER.value, contrast: '15.5:1' },
    { name: 'secondary-light', value: COLORS.SECONDARY_LIGHT_CENTURYLINK.value, contrast: '14.3:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY_CENTURYLINK.value, contrast: '11.2:1' },
    { name: 'secondary-dark', value: COLORS.SECONDARY_CENTURYLINK_DARK.value, contrast: '6.3:1' },
    { name: 'secondary-darker', value: COLORS.SECONDARY_CENTURYLINK_DARKER.value, contrast: '4.1:1' },
    { name: 'success-lighter', value: COLORS.SUCCESS_LIGHTER_CENTURYLINK.value, contrast: '14:1' },
    { name: 'success-light', value: COLORS.GREEN_CENTURYLINK_20.value, contrast: '12.6:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_CENTURYLINK_60.value, contrast: '5.1:1' },
    { name: 'warning-lighter', value: COLORS.WARNING_LIGHTER_CENTURYLINK.value, contrast: '14.6:1' },
    { name: 'warning-light', value: COLORS.YELLOW_CENTURYLINK_20.value, contrast: '13.8:1' },
    { name: COLORS.WARNING.name, value: COLORS.YELLOW_CENTURYLINK_60.value, contrast: '5.2:1' },
    { name: 'danger-lighter', value: COLORS.DANGER_LIGHTER.value, contrast: '14.4:1' },
    { name: 'danger-light', value: COLORS.RED_CENTURYLINK_20.value, contrast: '13.1:1' },
    { name: COLORS.DANGER.name, value: COLORS.RED_CENTURYLINK_60.value, contrast: '5.2:1' },
    { name: 'info-lighter', value: COLORS.PRIMARY_LIGHTER.value, contrast: '14.4:1' },
    { name: 'info-light', value: COLORS.BLUE_CENTURYLINK_20.value, contrast: '13.4:1' },
    { name: 'info', value: COLORS.BLUE_CENTURYLINK_60.value, contrast: '5.2:1' },
    { name: 'muted-lighter', value: COLORS.MUTED_LIGHTER.value, contrast: '14.6:1' },
    { name: 'muted-light', value: COLORS.GREY_20.value, contrast: '13.4:1' },
    { name: COLORS.MUTED.name, value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: 'black', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '15.4:1' },
  ];

  brightspeedBackgroundColor = [
    { name: 'base', value: COLORS.WHITE.value, contrast: '15.4:1' },
    { name: 'base-dark', value: COLORS.GREY_15.value, contrast: '14.1:1' },
    { name: 'base-darker', value: COLORS.GREY_20.value, contrast: '13.4:1' },
    { name: 'base-darkest', value: COLORS.GREY_25.value, contrast: '11.4:1' },
    { name: 'primary-light', value: COLORS.INFO_LIGHTER.value, contrast: '13.5:1' },
    { name: 'primary', value: COLORS.PRIMARY.value, contrast: '4.8:1' },
    { name: 'secondary-light', value: COLORS.SECONDARY_LIGHT.value, contrast: '14:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY.value, contrast: '7.7:1' },
    { name: 'secondary-dark', value: COLORS.CYAN_50.value, contrast: '5.1:1' },
    { name: 'success-lighter', value: COLORS.SUCCESS_LIGHTER.value, contrast: '14.8:1' },
    { name: 'success-light', value: COLORS.SUCCESS_LIGHT.value, contrast: '13.8:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.SUCCESS.value, contrast: '5.2:1' },
    { name: 'warning-lighter', value: COLORS.WARNING_LIGHTER.value, contrast: '14.6:1' },
    { name: 'warning-light', value: COLORS.WARNING_LIGHT.value, contrast: '13.2:1' },
    { name: COLORS.WARNING.name, value: COLORS.WARNING.value, contrast: '5.2:1' },
    { name: 'danger-lighter', value: COLORS.DANGER_LIGHTER.value, contrast: '14.4:1' },
    { name: 'danger-light', value: COLORS.DANGER_LIGHT.value, contrast: '13.1:1' },
    { name: COLORS.DANGER.name, value: COLORS.DANGER.value, contrast: '5.2:1' },
    { name: 'info-lighter', value: COLORS.INFO_LIGHT.value, contrast: '14.4:1' },
    { name: 'info-light', value: COLORS.INFO_LIGHTER.value, contrast: '13.5:1' },
    { name: 'info', value: COLORS.INFO.value, contrast: '4.8:1' },
    { name: 'muted-lighter', value: COLORS.MUTED_LIGHTER.value, contrast: '14.6:1' },
    { name: 'muted-light', value: COLORS.MUTED_LIGHT.value, contrast: '13.4:1' },
    { name: COLORS.MUTED.name, value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: 'black', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '15.4:1' },
  ];

  theme = useSelectedTheme();

  get backgroundColor() {
    if (this.theme === 'centurylink') {
      return this.centurylinkBackgroundColor;
    } else if (this.theme === 'brightspeed') {
      return this.brightspeedBackgroundColor;
    }
    return this.lumenBackgroundColor;
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$color-background-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        const isSpecial = content.name === 'white' || content.name === 'base';
        return `<div class="-text -rounded -w--80 ${isSpecial ? '-s--1' : ''}" style="height:1rem;background-color:${
          content.value
        }"></div>`;
      case 'contrast':
        return `<i class="chi-icon icon-check -xs -icon--success -mr--1" aria-hidden="true"></i>
<span>${content.contrast}</span>`;
      default:
        return '';
    }
  }
}
</script>
