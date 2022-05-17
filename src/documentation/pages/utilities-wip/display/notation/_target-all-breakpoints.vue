<template lang="pug">
  ComponentExample(title="Target all breakpoints" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text Display utility classes with no breakpoint defined apply to all screen sizes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-all-breakpoints-notation-display',
      displays: [
        'none',
        'inline',
        'inline-block',
        'block',
        'table',
        'table-cell',
        'table-row',
        'flex',
        'inline-flex'
      ],
      table: {
        head: ['Display Class', 'Value'],
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
    this.$data.displays.forEach((display: string) => {
      this.$data.table.body.push({
        data: [`-d--${display}`, `display: ${display};`]
      });
    });
  }
}
</script>
