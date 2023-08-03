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
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse()
    };
  }
})
export default class AvailableColumnSizes extends Vue {}
</script>
