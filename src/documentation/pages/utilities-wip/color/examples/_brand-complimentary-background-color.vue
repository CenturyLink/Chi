<template lang="pug">
  div
    h4 Brand complimentary
    p.-text More background-colors that can be used to compliment the primary brand palette.
    <TableComponent :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn, ITableContent } from '~/models/models';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { COLORS } from '~/constants/constants';

@Component({
  data: () => {
    return {
      colors: [
        COLORS.NAVY,
        COLORS.GREY
      ]
    }
  }
})

export default class BrandComplimentaryBackgroundColor extends Vue {
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
