<template lang="pug">
<ComponentExample title="Available Column Sizes" id="available-column-sizes" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | The size classes are defined from <code>-w--1</code>, which takes up
      | ~8.3% of the width to <code>-w--12</code>, which consumes the entire row.
  template(#example)
    .-show--example.chi-grid.-mb--3( v-for="item in columns")
      .chi-col(:class="`-w--${item}`" :key="item")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      columns: Array.from({ length: 12 }, (_, i) => i + 1).reverse(),
    };
  },
})
export default class AvailableColumnSizes extends Vue {}
</script>
