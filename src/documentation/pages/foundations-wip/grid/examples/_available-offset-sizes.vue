<template lang="pug">
  div  
    <ComponentExample title="Available Offset Sizes" id="available-offset-sizes" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | Offset sizes, like column sizes, range from <code>-o--1</code>, which 
        | takes up ~8.3% of the width to <code>-o--11</code>, which consumes 
        | ~91.6% of the row.
      
      .-show--example.chi-grid.-mb--3(slot="example" v-for="item in columns")
        .chi-col(:class="`-o--${item}`" :key="item")
    </ComponentExample>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };
  }
})
export default class AvailableOffsetSizes extends Vue {}
</script>
