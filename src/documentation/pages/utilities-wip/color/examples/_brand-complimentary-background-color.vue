<template lang="pug">
  div
    h4 Brand complimentary
    p.-text More background-colors that can be used to compliment the primary brand palette.
    <DataTable :data="colors" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      colors: [
        {
          name: 'navy',
          value: '#083176',
        },
        {
          name: 'grey',
          value: '#3F4145',
        }
      ]
    }
  }
})

export default class BrandComplimentaryBackgroundColor extends Vue {}
</script>
