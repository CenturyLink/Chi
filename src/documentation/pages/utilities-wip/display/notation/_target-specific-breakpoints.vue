<template lang="pug">
  ComponentExample(title="Target specific breakpoints" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text 
        | To target a specific breakpoint, add the breakpoint abbreviation to the class. As a mobile first framework, it will
        | apply to that specific breakpoint and up.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="body, index in table.body")
          .-text(:slot="`customCell-${index}-1`") Visible only from <code>{{ body.data[1] }}</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-specific-breakpoints-notation-display',
      sizes: ['sm', 'md', 'lg', 'xl'],
      table: {
        head: ['Display Class', 'Value'],
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
      this.$data.table.body.push({
        data: [`-d-${size}--none`, size]
      });
    });
  }
}
</script>
