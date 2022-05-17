<template lang="pug">
  ComponentExample(title="Supported values" :titleSize="'-h--2'" :id="id" :noExample="true")
    template(slot="no-example")
      CustomTable(:tableData="table" :border="false" :additionalClasses="'-sm'")
        template(v-for="body, index in table.body")
          .-text(:slot="`customCell-${index}-1`") {{ body.data[1] }}
        template(v-for="body, index in table.body")
          .-text(:slot="`customCell-${index}-2`") {{ body.data[2] }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'supported-values',
      indexes: ['0', '1', '10', '20', '30', '40', '50', '60', '70', 'auto'],
      table: {
        head: ['Class name', 'z-index value', 'Used in'],
        body: [],
        config: {
          cells: [{ hasCode: true }, { hasCode: false }, { hasCode: false }]
        }
      }
    };
  }
})
export default class SupportedValues extends Vue {
  created() {
    this._generateTableData();
  }

  _generateTableData() {
    this.$data.indexes.forEach((zIndex: string, index: number) => {
      const message = [
        'Initial value',
        'Prominent elements (E.g. focused buttons)',
        'Dropdowns',
        'Fixed elements (E.g. drawer)',
        'Backdrops',
        'Fixed elements with backdrop (E.g. drawer with backdrop)',
        'Modals',
        'Popovers',
        'Tooltips',
        '-'
      ];

      this.$data.table.body.push({
        data: [`-z--${zIndex}`, zIndex, message[index]]
      });
    });
  }
}
</script>
