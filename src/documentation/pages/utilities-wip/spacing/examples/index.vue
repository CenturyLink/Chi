<template lang="pug">
  .chi-grid__container.-pt--3
    <Notation />
    h2 Examples
    <Margins />
    <SideMargins />
    <Padding />
    <SidePadding />
    <MarginPadding />
    <AutoMargin />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notation from './_notation.vue';
import Margins from './_margins.vue';
import SideMargins from './_side-margins.vue';
import Padding from './_paddings.vue';
import SidePadding from './_side-paddings.vue';
import MarginPadding from './_margin-padding.vue';
import AutoMargin from './_auto-margin.vue';

@Component({
  components: {
    Notation,
    Margins,
    SideMargins,
    Padding,
    SidePadding,
    MarginPadding,
    AutoMargin
  }
})
export default class Examples extends Vue {}
</script>
