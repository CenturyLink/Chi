<template lang="pug">
  ComponentExample(title="Maximum width/height" :titleSize="'h3'" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text Using the format <code>-mw--{value}</code> for max-width and <code>-mh--{value}</code> for max-height
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'maximum-width-height',
      maxWidths: ['100', '480', '640', '720', '960', '980', '1200'],
      maxHeights: ['100', '400', '480'],
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
export default class MaximumWidthsHeights extends Vue {
  created() {
    this._generateTableData();
  }

  _generateTableData() {
    this.$data.maxWidths.forEach((width: number) => {
      this.$data.table.body.push({
        data: [
          `-mw--${width}`,
          `max-width: ${width}${width !== 100 ? 'px' : '%'};`
        ]
      });
    });

    this.$data.maxHeights.forEach((height: number) => {
      this.$data.table.body.push({
        data: [
          `-mh--${height}`,
          `max-width: ${height}${height !== 100 ? 'px' : '%'};`
        ]
      });
    });
  }
}
</script>
