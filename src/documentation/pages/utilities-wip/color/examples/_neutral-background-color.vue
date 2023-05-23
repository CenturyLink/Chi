<template lang="pug">
  div
    h4 Neutral
    p.-text Neutral background-colors provide low-contrast backgrounds for application containers, cards, and more.
    <DataTable title="Color Class" :data="colors" />
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
