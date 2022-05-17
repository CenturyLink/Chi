<template lang="pug">
  ComponentExample(title="Target all breakpoints" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text Opacity utility classes with no breakpoint defined apply to all screen sizes.
      h4 Base
      CustomTable(:tableData="baseTable" :additionalClasses="'-mb--3'" :border="true")
      h4 Hover
      CustomTable(:tableData="hoverTable" :additionalClasses="'-mb--3'" :border="true")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-all-breakpoints-opacity',
      opacities: [0, 20, 40, 60, 80, 100],
      baseTable: {
        head: ['Class', 'Value'],
        body: [],
        config: {
          cells: [{ hasCode: true, width: '40%' }, { hasCode: true }]
        }
      },
      hoverTable: {
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
    this.$data.opacities.forEach((opacity: number) => {
      this.$data.baseTable.body.push({
        data: [`-opacity--${opacity}`, `opacity: ${opacity / 100};`]
      });

      this.$data.hoverTable.body.push({
        data: [`-opacity-hover--${opacity}`, `opacity: ${opacity / 100};`]
      });
    });
  }
}
</script>
