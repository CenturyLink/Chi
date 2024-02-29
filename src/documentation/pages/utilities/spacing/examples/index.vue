<template lang="pug">
  .chi-grid__container.-pt--3
    <Notation />
    <TitleAnchor title="Examples" id="examples" titleSize="h2" />
    <Margins />
    <SideMargins />
    <Padding />
    <SidePadding />
    <MarginPadding />
    <AutoMargin />
    <Breakpoints />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Notation from './_notation.vue';
import Margins from './_margins.vue';
import SideMargins from './_side-margins.vue';
import Padding from './_paddings.vue';
import SidePadding from './_side-paddings.vue';
import MarginPadding from './_margin-padding.vue';
import AutoMargin from './_auto-margin.vue';
import Breakpoints from './_breakpoints.vue';

@NuxtComponent({
  components: {
    Notation,
    Margins,
    SideMargins,
    Padding,
    SidePadding,
    MarginPadding,
    AutoMargin,
    Breakpoints,
  },
})
export default class Examples extends Vue {}
</script>
