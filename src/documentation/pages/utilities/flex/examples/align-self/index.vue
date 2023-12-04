<template lang="pug">
  div
    <TitleAnchor title="Align self" id="align-self" titleSize="h3"/>
    p.-text Use align-self utilities to alter the alignment of individual flex items on the cross axis.
    <Start />
    <End />
    <Center />
    <Baseline />
    <Stretch />
    <SpecificBreakpoints />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Start from './_start.vue';
import End from './_end.vue';
import Center from './_center.vue';
import Baseline from './_baseline.vue';
import Stretch from './_stretch.vue';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@Component({
  components: {
    Start,
    End,
    Center,
    Baseline,
    Stretch,
    SpecificBreakpoints,
  }
})
export default class AlignSelf extends Vue {}
</script>
