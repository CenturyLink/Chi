<template lang="pug">
  div
    h4 None
    p.-text Use to render an element with no background-color.
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
        COLORS.BG_NONE
      ]
    }
  }
})

export default class NoneBackgroundColor extends Vue {
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
