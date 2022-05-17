<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/spacing/?theme=' + $store.state.themes.theme + '#' + id") #

    Margins
    SideMargins
    Paddings
    SidePaddings
    MarginAndPadding
    AutoMargin
    Breakpoints
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Margins from './_margins.vue';
import SideMargins from './_side-margins.vue';
import Paddings from './_paddings.vue';
import SidePaddings from './_side-paddings.vue';
import MarginAndPadding from './_margin-and-padding.vue';
import AutoMargin from './_auto-margin.vue';
import Breakpoints from './_breakpoints.vue';

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    Margins,
    SideMargins,
    Paddings,
    SidePaddings,
    MarginAndPadding,
    AutoMargin,
    Breakpoints
  }
})
export default class Examples extends Vue {}
</script>
