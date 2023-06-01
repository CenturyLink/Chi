<template lang="pug">
  div  
    <ComponentExample title="Available Column Sizes" titleSize="h3" id="available-column-sizes" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | The size classes are defined from <code>-w--1</code>, which takes up 
        | ~8.3% of the width to <code>-w--12</code>, which consumes the entire row.
      
        .-show--example.chi-grid.-mb--3(slot="example" v-for="i in arr")
          .chi-col(:class="`-w--${i}`" :key="i")
    </ComponentExample>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      arr: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    };
  }
})
export default class AvailabeColumnSizes extends Vue {}
</script>
