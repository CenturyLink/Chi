<template lang="pug">
  ComponentExample(title="Brand" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text Brand background-colors reinforce CenturyLink's brand.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="color, index in colors" :slot="`customCell-${index}-2`")
          .-text.-b--1(:style="`background-color:${color}; height:15px;`")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'brand-centuryLink-example-background-color',
      colors: ['#0047BB', '#48D597', '#000000', '#FFFFFF'],
      table: {
        head: ['Color Class', 'Value', 'Result'],
        body: [
          { data: ['-bg--primary', 'background-color:#0047BB'] },
          { data: ['-bg--secondary', 'background-color:#48D597'] },
          { data: ['-bg--black', 'background-color:#000000'] },
          { data: ['-bg--white', 'background-color:#FFFFFF'] }
        ],
        config: {
          cells: [
            { hasCode: true, width: '25%' },
            { hasCode: true, width: '35%' },
            { hasCode: false, width: '40%' }
          ]
        }
      }
    };
  }
})
export default class BrandCenturyLink extends Vue {}
</script>
