<template lang="pug">
  ComponentExample(title="Target all breakpoints" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text Sizing utility classes with no breakpoint defined apply to all screen sizes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-all-breakpoints-size-height',
      heights: ['auto', '25', '50', '75', '100'],
      table: {
        head: ['Sizing Class', 'Value'],
        body: [],
        config: {
          cells: [{ hasCode: true, width: '40%' }, { hasCode: true }]
        }
      }
    };
  }
})
export default class TargetAllBreakpoints extends Vue {
  created() {
    this._generateTableData();
  }

  _generateTableData() {
    this.$data.heights.forEach((height: string) => {
      this.$data.table.body.push({
        data: [
          `-h--${height}`,
          `height: ${height}${height !== 'auto' ? '%' : ''};`
        ]
      });
    });
  }
}
</script>
