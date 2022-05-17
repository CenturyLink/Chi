<template lang="pug">
  ComponentExample(title="Target all breakpoints" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text Sizing utility classes with no breakpoint defined apply to all screen sizes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="body, index in table.body")
          .-text(v-if="body.data[2] === '*'" :slot="`customCell-${index}-1`") can be incremented by 5%
          .-text(v-else :slot="`customCell-${index}-1`") <code>width: {{ body.data[2] }};</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-all-breakpoints-size-width',
      widths: ['auto', '*'],
      table: {
        head: ['Sizing Class', 'Value'],
        body: [],
        config: {
          cells: [{ hasCode: true, width: '40%' }, { hasCode: false }]
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
    this.$data.widths.forEach((width: string) => {
      this.$data.table.body.push({
        data: [`-w--${width}`, `width: ${width};`, width]
      });
    });
  }
}
</script>
