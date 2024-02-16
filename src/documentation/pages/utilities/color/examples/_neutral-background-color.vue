<template lang="pug">
  div
    h4 Neutral
    p.-text Neutral background-colors provide low-contrast backgrounds for application containers, cards, and more.
    <TableComponent title="Color Class" :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class NeutralBackgroundColor extends Vue {
  colors = [COLORS.GREY_20, COLORS.GREY_15, COLORS.GREY_25, COLORS.GREY_30]

  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
