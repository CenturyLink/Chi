<template lang="pug">
  div
    h4 Neutral
    p.-text Neutral background-colors provide low-contrast backgrounds for application containers, cards, and more.
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
          name: 'grey-20',
          value: '#F8F9F9',
        },
        {
          name: 'grey-15',
          value: '#F4F5F6',
        },
        {
          name: 'grey-20',
          value: '#EDF0F2'
        },
        {
          name: 'grey-25',
          value: '#DADEE2'
        },
        {
          name: 'grey-30',
          value: '#D0D4D9'
        }
      ]
    }
  }
})

export default class NeutralBackgroundColor extends Vue {}
</script>
