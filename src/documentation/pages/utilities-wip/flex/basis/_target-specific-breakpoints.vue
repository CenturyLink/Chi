<template lang="pug">
  ComponentExample(title="Target specific breakpoints" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="body, index in table.body")
          .-text(:slot="`customCell-${index}-1`") Visible only from <code>{{ body.data[1] }}</code> {{ showIncrementMessage(body.data[0]) }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-specific-breakpoints-flex-basis',
      sizes: ['sm', 'md', 'lg', 'xl'],
      types: ['auto', '*'],
      table: {
        head: ['Flex-basis Class', 'Value'],
        body: [],
        config: {
          cells: [{ hasCode: true, width: '40%' }, { hasCode: false }]
        }
      }
    };
  }
})
export default class TargetSpecificBreakpoints extends Vue {
  created() {
    this._generateTableData();
  }

  _generateTableData() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.types.forEach((type: string) => {
        this.$data.table.body.push({
          data: [`-flex-basis-${size}--${type}`, size]
        });
      });
    });
  }

  showIncrementMessage(flex: string) {
    return flex.includes('*') ? ', can be incremented by 5%' : '';
  }
}
</script>
