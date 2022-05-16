<template lang="pug">
  div
    h2 Examples

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <BackgroundIconsPortal />
      <Compact key="isPortal" />
      <CarouselPortal />
    div(v-else)
      <BaseLumenCenturyLink />
      <CenterLumenCenturyLink />
      <BackgroundIconsLumenCenturyLink />
      <Compact />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base-lumen-centurylink.vue';
import CenterLumenCenturyLink from './_center-lumen-centurylink.vue';
import BackgroundIconsLumenCenturyLink from './_background-icons-lumen-centurylink.vue';
import Compact from './_compact.vue';
import BasePortal from './_portal/_base.vue';
import BackgroundIconsPortal from './_portal/_background-icons.vue';
import CarouselPortal from './_portal/_carousel.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    CenterLumenCenturyLink,
    BackgroundIconsLumenCenturyLink,
    Compact,
    BasePortal,
    BackgroundIconsPortal,
    CarouselPortal
  }
})
export default class Examples extends Vue {}
</script>
