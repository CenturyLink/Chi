<template lang="pug">
  ComponentExample(title="Neutral" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text Neutral background-colors provide low-contrast backgrounds for application containers, cards, and more.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="color, index in colors" :slot="`customCell-${index}-2`")
          .-text.-b--1(:style="`background-color:${color}; height:15px;`")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'neutral-example-background-color',
      colors: ['#F4F5F6', '#EDF0F2', '#DADEE2', '#D0D4D9'],
      table: {
        head: ['Color Class', 'Value', 'Result'],
        body: [
          { data: ['-bg--grey-15', 'background-color:#F4F5F6'] },
          { data: ['-bg--grey-20', 'background-color:#EDF0F2'] },
          { data: ['-bg--grey-25', 'background-color:#DADEE2'] },
          { data: ['-bg--grey-30', 'background-color:#D0D4D9'] }
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
export default class Neutral extends Vue {}
</script>
