<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/vertical-align/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | Vertical-align is only compatible with inline, inline-block, inline-table, and table cell elements.
      | It cannot be used to vertically align block-level elements.

    Baseline
    Top
    Middle
    Bottom
    TextTop
    TextBottom
    TableCellElements
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Baseline from './_baseline.vue';
import Top from './_top.vue';
import Middle from './_middle.vue';
import Bottom from './_bottom.vue';
import TextTop from './_text-top.vue';
import TextBottom from './_text-bottom.vue';
import TableCellElements from './_table-cell-elements.vue';

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    Baseline,
    Top,
    Middle,
    Bottom,
    TextTop,
    TextBottom,
    TableCellElements
  }
})
export default class Examples extends Vue {}
</script>
