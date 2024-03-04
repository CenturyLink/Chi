<template lang="pug">
  div
    <TitleAnchor title="Wrap" id="wrap" titleSize="h3"/>
    p.-text Use wrap utilities to define how flex items wrap in a flex container.
    <NoWrap />
    <Wrap />
    <WrapReverse />
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import NoWrap from './_no-wrap.vue';
import Wrap from './_wrap.vue';
import WrapReverse from './_wrap-reverse.vue';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@NuxtComponent({
  components: {
    NoWrap,
    Wrap,
    WrapReverse,
    SpecificBreakpoints,
  },
})
export default class WrapExample extends Vue {}
</script>
