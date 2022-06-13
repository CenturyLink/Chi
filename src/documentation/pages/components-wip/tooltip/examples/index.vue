<template lang="pug">
  div
    h2 Examples

    <Base />
    <LightLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <Disabled />
    <Positioning />
    <Long />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Long from './_long.vue';
import Disabled from './_disabled.vue';
import LightLumenCenturyLink from './_light-lumen-centurylink.vue';
import Positioning from './_positioned.vue';
import Base from './_base.vue';

@Component({
  components: {
    Long,
    Disabled,
    LightLumenCenturyLink,
    Positioning,
    Base,
  }
})
export default class Examples extends Vue {}
</script>
