<template lang="pug">
<TitleAnchor title="Color" id="color" titleSize="h2" />
<TitleAnchor title="Text" id="color-text" titleSize="h3" />
<TableComponent :data="textColor" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { designTokensColumns } from '~/fixtures/fixtures';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class ColorText extends Vue {
  columns = designTokensColumns;
  lumenTextColor = [
    { name: 'base', value: COLORS.GRAY_100.value, contrast: '15.4:1' },
    { name: 'primary', value: COLORS.BLUE_75.value, contrast: '6.1:1' },
    { name: 'primary-alt', value: COLORS.INFO.value, contrast: '4.8:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY.value, contrast: '10.6:1' },
    { name: 'secondary-dark', value: COLORS.CYAN_50.value, contrast: '3:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.SUCCESS.value, contrast: '5.2:1' },
    { name: COLORS.WARNING.name, value: COLORS.WARNING.value, contrast: '5.2:1' },
    { name: COLORS.DANGER.name, value: COLORS.DANGER.value, contrast: '5.2:1' },
    { name: 'info', value: COLORS.BLUE_75.value, contrast: '6.1:1' },
    { name: 'muted-light', value: COLORS.GRAY_60.value, contrast: '5.6:1' },
    { name: COLORS.MUTED.name, value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '21:1' },
  ];

  centurylinkTextColor = [
    { name: 'base', value: COLORS.GRAY_100.value, contrast: '15.4:1' },
    { name: 'primary', value: COLORS.PRIMARY_CENTURYLINK.value, contrast: '8:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.SECONDARY_CENTURYLINK.value, contrast: '11.2:1' },
    { name: COLORS.SECONDARY_CENTURYLINK_DARK.name, value: COLORS.SECONDARY_CENTURYLINK_DARK.value, contrast: '3.3:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.GREEN_CENTURYLINK_60.value, contrast: '5.1:1' },
    { name: COLORS.WARNING.name, value: COLORS.YELLOW_CENTURYLINK_60.value, contrast: '5.2:1' },
    { name: COLORS.DANGER.name, value: COLORS.RED_CENTURYLINK_60.value, contrast: '5.2:1' },
    { name: 'info', value: COLORS.BLUE_CENTURYLINK_60.value, contrast: '5.2:1' },
    { name: 'muted-light', value: COLORS.GRAY_60.value, contrast: '5.6:1' },
    { name: COLORS.MUTED.name, value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '21:1' },
  ];

  brightspeedTextColor = [
    { name: 'base', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: 'primary', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: 'primary-alt', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.SECONDARY.name, value: COLORS.YELLOW_BRIGHTSPEED_40.value, contrast: '13.5:1' },
    { name: 'secondary-dark', value: COLORS.BLACK.value, contrast: '21:1' },
    { name: COLORS.SUCCESS.name, value: COLORS.SUCCESS.value, contrast: '5.2:1' },
    { name: COLORS.WARNING.name, value: COLORS.WARNING.value, contrast: '5.2:1' },
    { name: COLORS.DANGER.name, value: COLORS.RED_BRIGHTSPEED_70.value, contrast: '8:1' },
    { name: 'info', value: COLORS.BLUE_75.value, contrast: '6.1:1' },
    { name: 'muted-light', value: COLORS.GRAY_60.value, contrast: '5.6:1' },
    { name: COLORS.MUTED.name, value: COLORS.MUTED.value, contrast: '7.4:1' },
    { name: COLORS.WHITE.name, value: COLORS.WHITE.value, contrast: '21:1' },
  ];

  theme = useSelectedTheme();

  get textColor() {
    if (this.theme === 'centurylink') {
      return this.centurylinkTextColor;
    } else if (this.theme === 'brightspeed') {
      return this.brightspeedTextColor;
    }
    return this.lumenTextColor;
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$color-text-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        if (content.name === 'white' || content.name === 'secondary') {
          return `<div class="text--lg -lh--2 -rounded -d--inline-block" style="background-color:#000;padding:2px;color:${content.value};">Aa</div>`;
        } else {
          return `<div class="text--lg -lh--2" style="color:${content.value};">Aa</div>`;
        }
      case 'contrast':
        const isSpecificIcon = content.name === 'secondary-dark' || content.name === 'primary-alt';
        return `<i class="chi-icon icon-${isSpecificIcon ? 'warning' : 'check'} -xs -mr--1 -icon--${
          isSpecificIcon ? 'warning' : 'success'
        }" aria-hidden="true"></i>
<span>
    ${content.contrast}
    <div class="-text--sm -text--muted -lh--2">
        ${content.name === 'secondary-dark' ? '20px+ text only' : ''}
        ${content.name === 'primary-alt' ? 'White backgrounds only' : ''}
    </div>
</span>`;
      default:
        return '';
    }
  }
}
</script>
