<template lang="pug">
  ComponentExample(title="Target all breakpoints" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text Vertical-align utility classes with no breakpoint defined apply to all screen sizes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-all-breakpoints-vertical-align',
      positions: [
        'baseline',
        'top',
        'middle',
        'bottom',
        'text-top',
        'text-bottom'
      ],
      table: {
        head: ['Class', 'Value'],
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
    this.$data.positions.forEach((position: string) => {
      this.$data.table.body.push({
        data: [`-vertical-align--${position}`, `vertical-align: ${position};`]
      });
    });
  }
}
</script>
