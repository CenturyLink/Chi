<template lang="pug">
  div
    h4 None
    p.-text Use to render an element with no background-color.
    <TableComponent title="Color Class" :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class NoneBackgroundColor extends Vue {
  colors = [COLORS.BG_NONE]
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
