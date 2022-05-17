<template lang="pug">
  ComponentExample(title="None" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text Use to render an element with no background-color.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(slot="customCell-0-2")
          .-text.-b--1(style="background:none; height:15px;")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'none-example-background-color',
      table: {
        head: ['Color Class', 'Value', 'Result'],
        body: [{ data: ['-bg--none', 'background: none;'] }],
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
export default class None extends Vue {}
</script>
