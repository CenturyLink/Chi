<template lang="pug">
  div
    h2 Examples

    <Base />
    <Light v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <Disabled />
    <Positioning />
    <Long />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Long from './_long_tooltip.vue';
import Disabled from './_disabled_tooltip.vue';
import Light from './_light_tooltip.vue';
import Positioning from './_positioned_tooltip.vue';
import Base from './_base_tooltip.vue';

@Component({
  components: {
    Long,
    Disabled,
    Light,
    Positioning,
    Base,
  }
})
export default class Examples extends Vue {}
</script>
