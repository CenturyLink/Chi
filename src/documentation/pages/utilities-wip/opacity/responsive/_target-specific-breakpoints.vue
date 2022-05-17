<template lang="pug">
  ComponentExample(title="Target specific breakpoints" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text
        | To target a specific breakpoint, add the breakpoint abbreviation to the class. As Chi is a mobile first library, the value
        | will apply to that specific breakpoint and up.
      h4 Base
      CustomTable(:tableData="baseTable" :additionalClasses="'-mb--3'" :border="true")
        template(v-for="body, index in baseTable.body")
          .-text(:slot="`customCell-${index}-1`") 60% opacity on <code>{{ body.data[1] }}</code> and up.
      h4 Hover
      CustomTable(:tableData="hoverTable" :additionalClasses="'-mb--3'" :border="true")
        template(v-for="body, index in hoverTable.body")
          .-text(:slot="`customCell-${index}-1`") 60% opacity on hover on <code>{{ body.data[1] }}</code> and up.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-specific-breakpoints-opacity',
      sizes: ['sm', 'md', 'lg', 'xl'],
      baseTable: {
        head: ['Class', 'Value'],
        body: [],
        config: {
          cells: [{ hasCode: true, width: '40%' }, { hasCode: false }]
        }
      },
      hoverTable: {
        head: ['Class', 'Value'],
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
      this.$data.baseTable.body.push({
        data: [`-opacity-${size}--60`, size]
      });

      this.$data.hoverTable.body.push({
        data: [`-opacity-hover-${size}--60`, size]
      });
    });
  }
}
</script>
