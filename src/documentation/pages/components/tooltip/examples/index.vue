<template lang="pug">
  div
    h2 Examples

    <BaseTooltip />
    <LightTooltip />
    <DisabledTooltip />
    <PositionedTooltip />
    <LongTooltip />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LongTooltip from './_long_tooltip.vue';
import DisabledTooltip from './_disabled_tooltip.vue';
import LightTooltip from './_light_tooltip.vue';
import PositionedTooltip from './_positioned_tooltip.vue';
import BaseTooltip from './_base_tooltip.vue';

@Component({
  components: {
    LongTooltip,
    DisabledTooltip,
    LightTooltip,
    PositionedTooltip,
    BaseTooltip,
  }
})
export default class Examples extends Vue {}
</script>
