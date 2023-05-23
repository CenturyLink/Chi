<template lang="pug">
  div
    h4 None
    p.-text Use to render an element with no background-color.
    <DataTable title="Color Class" :data="colors" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      colors: [
        {
          name: '-bg--none',
          value: 'none',
        }
      ]
    }
  }
})

export default class NoneBackgroundColor extends Vue {}
</script>
