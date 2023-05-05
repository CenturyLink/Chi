<template lang="pug">
fragment
  <AnchorTitle title="Direction" tag="h2" id="direction" />
  p.-text Use direction utilities to define how items will be placed in flex containers.

  fragment(v-for="(type, index) in types", :key="index")
    <DirectionExample :title="type.title" :id="type.id" />

  p.-text Target specific breakpoints with Direction responsive classes.
  ul.-mb--3
    li
      code -flex--row
    li
      code -flex--row-reverse
    li
      code -flex--column
    li
      code -flex--column-reverse
    each size in ['sm', 'md', 'lg', 'xl']
      each type in ['row', 'row-reverse', 'column', 'column-reverse']
        li
          code=`-flex-${size}--${type}`

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DirectionExample from './examples/_direction-example.vue';

@Component({
  data() {
    return {
      types: [
        { id: 'row', title: 'Row (default)' },
        { id: 'row-reverse', title: 'Row reverse' },
        { id: 'column', title: 'Column' },
        { id: 'column-reverse', title: 'Column reverse' }
      ]
    };
  },
  components: {
    DirectionExample
  }
})
export default class Direction extends Vue {}
</script>
