<template lang="pug">
  div
    h4 Brand
    p.-text More background-colors that can be used to compliment the primary brand palette.
    <TableComponent title="Color Class" :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { ITableColumn, ITableContent } from '~/models/models';
import { COLORS } from '~/constants/constants';

@Component({})
export default class BrandBackgroundColor extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }
  get isNotCenturylink() {
    return this.theme !== 'centurylink';
  }
  get colors() {
    return [
      {
        name: 'primary',
        value: this.isNotCenturylink ? COLORS.PRIMARY : COLORS['PRIMARY-CENTURYLINK'],
      },
      {
        name: 'secondary',
        value: this.isNotCenturylink ? COLORS.SECONDARY : COLORS['SECONDARY-CENTURYLINK'],
      },
      {
        name: 'black',
        value: COLORS.BLACK,
      },
      {
        name: 'white',
        value: COLORS.WHITE,
      }
    ]
  }

  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
