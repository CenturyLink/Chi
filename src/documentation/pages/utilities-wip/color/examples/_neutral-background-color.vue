<template lang="pug">
  div
    h4 Neutral
    p.-text Neutral background-colors provide low-contrast backgrounds for application containers, cards, and more.
    <TableComponent title="Color Class" :data="colors" :getContent="getContent" />
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
        COLORS['GREY-20'],
        COLORS['GREY-15'],
        COLORS['GREY-25'],
        COLORS['GREY-30']
      ]
    }
  }
})

export default class NeutralBackgroundColor extends Vue {
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
