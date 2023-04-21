<template lang="pug">
fragment
  <AnchorTitle title="Direction" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#direction`" />
  p.-text Use direction utilities to define how items will be placed in flex containers.

  <RowDefault />
  <RowReverse />
  <Column />
  <columnReverse />

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

import RowDefault from './_row-default.vue';
import RowReverse from './_row-reverse.vue';
import Column from './_column.vue';
import columnReverse from './_column-reverse.vue';

@Component({
  components: {
    RowDefault,
    RowReverse,
    Column,
    columnReverse
  }
})
export default class Direction extends Vue {}
</script>
