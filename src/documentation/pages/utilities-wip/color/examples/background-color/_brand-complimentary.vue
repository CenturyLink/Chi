<template lang="pug">
  ComponentExample(title="Brand complimentary" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text More background-colors that can be used to compliment the primary brand palette.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="color, index in colors" :slot="`customCell-${index}-2`")
          .-text.-b--1(:style="`background-color:${color}; height:15px;`")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand-complimentary-example-background-color',
      colors: ['#083176', '#3F4145'],
      table: {
        head: ['Color Class', 'Value', 'Result'],
        body: [
          { data: ['-bg--navy', 'background-color:#083176'] },
          { data: ['-bg--grey', 'background-color:#3F4145'] }
        ],
        config: {
          cells: [
            { hasCode: true, width: '25%' },
            { hasCode: true, width: '35%' },
            { hasCode: false, width: '45%' }
          ]
        }
      }
    };
  }
})
export default class BrandComplimentary extends Vue {}
</script>
