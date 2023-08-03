<template lang="pug">
  <ComponentExample title="Available Column Sizes" id="available-column-sizes" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
    p.-text(slot="example-description")
      | The size classes are defined from <code>-w--1</code>, which takes up 
      | ~8.3% of the width to <code>-w--12</code>, which consumes the entire row.
    
    .-show--example.chi-grid.-mb--3(slot="example" v-for="item in columns")
      .chi-col(:class="`-w--${item}`" :key="item")
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      columns: Array.from({ length: 12 }, (_, i) => i + 1).reverse()
    };
  }
})
export default class AvailableColumnSizes extends Vue {}
</script>
