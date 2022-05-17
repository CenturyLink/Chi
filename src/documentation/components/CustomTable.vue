<template lang="pug">
  section.chi-table(:class="[border ? '-bordered' : '', additionalClasses]")
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th(v-for="header in tableData.head")
              div {{ header }}
        tbody
            tr(v-for="row, rowIndex in tableData.body" :key="rowIndex")
              td(v-for="cell, cellIndex in tableData.config.cells" :class="cell.additionalCellClasses" :width="cell.width" :key="cellIndex")
                code(v-if="cell.hasCode") {{ row.data[cellIndex] }}
                slot(v-else :name="`customCell-${rowIndex}-${cellIndex}`")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TableData } from '../models/models';

@Component({})
export default class CustomTable extends Vue {
  @Prop() tableData?: TableData;
  @Prop() additionalClasses?: string;
  @Prop() additionalCellClasses?: string;
  @Prop() border?: boolean;
}
</script>
<style scoped lang="scss"></style>
