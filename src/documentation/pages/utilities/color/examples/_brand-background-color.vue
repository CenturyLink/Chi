<template lang="pug">
  div
    h4 Brand
    p.-text More background-colors that can be used to compliment the primary brand palette.
    <TableComponent title="Color Class" :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class BrandBackgroundColor extends Vue {
  theme = useSelectedTheme();
  get isNotCenturylink() {
    return this.theme !== 'centurylink';
  }
  get colors() {
    return [
      {
        name: COLORS.PRIMARY.name,
        value: this.isNotCenturylink ? COLORS.PRIMARY.value : COLORS.PRIMARY_CENTURYLINK.value,
      },
      {
        name: COLORS.SECONDARY.name,
        value: this.isNotCenturylink ? COLORS.SECONDARY.value : COLORS.SECONDARY_CENTURYLINK.value,
      },
      COLORS.BLACK,
      COLORS.WHITE,
    ];
  }

  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
