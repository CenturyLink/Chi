<template lang="pug">
  div
    h2 Examples

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <BackgroundIconsPortal />
      <CompactPortal />
      <CarouselPortal />
    div(v-else)
      <BaseLumenCenturyLink />
      <CenterLumenCenturyLink />
      <BackgroundIconsLumenCenturyLink />
      <CompactLumenCenturyLink />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base-lumen-centurylink.vue';
import CenterLumenCenturyLink from './_center-lumen-centurylink.vue';
import BackgroundIconsLumenCenturyLink from './_background-icons-lumen-centurylink.vue';
import CompactLumenCenturyLink from './_compact-lumen-centurylink.vue';
import BasePortal from './_portal/_base.vue';
import BackgroundIconsPortal from './_portal/_background-icons.vue';
import CompactPortal from './_portal/_compact.vue';
import CarouselPortal from './_portal/_carousel.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    CenterLumenCenturyLink,
    BackgroundIconsLumenCenturyLink,
    CompactLumenCenturyLink,
    BasePortal,
    BackgroundIconsPortal,
    CompactPortal,
    CarouselPortal
  }
})
export default class Examples extends Vue {}
</script>
