<template lang="pug">
  div
    h4 Brand accents
    p.-text More background-colors that can be used to compliment the primary brand palette.
    <TableComponent :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class BrandComplimentaryBackgroundColor extends Vue {
  colors = [COLORS.RED_50_LUMEN, COLORS.ORANGE_50];
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
