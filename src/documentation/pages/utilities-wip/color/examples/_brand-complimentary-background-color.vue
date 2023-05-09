<template lang="pug">
  div
    h4 Brand complimentary
    p.-text More background-colors that can be used to compliment the primary brand palette.
    section.chi-table.-bordered.-mt--3.-mb--3
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Color Class
            th
              div Value
            th
              div Result
        tbody
          tr(v-for="color in colors")
            td(width='25%')
              code {{ `-bg--${ color.name }` }}
            td(width='35%')
              code {{ `background-color: ${color.value}` }}
            td(width='40%')
              .-text.-b--1(:style='`background-color:${color.value}; height:15px;`')
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
