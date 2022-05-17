<template lang="pug">
  ComponentExample(title="Target all breakpoints" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text Flex-basis utility classes with no breakpoint defined apply to all screen sizes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="body, index in table.body")
          .-text(v-if="index === 1" :slot="`customCell-${index}-1`") can be incremented by 5%;
          code(v-else :slot="`customCell-${index}-1`") {{ body.data[1] }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-all-breakpoints-flex-basis',
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
export default class TargetAllBreakpoints extends Vue {
  created() {
    this._generateTableData();
  }

  _generateTableData() {
    this.$data.types.forEach((type: string) => {
      this.$data.table.body.push({
        data: [`-flex-basis--${type}`, `flex-basis: ${type};`]
      });
    });
  }
}
</script>
