<template lang="pug">
  div
    h2 Examples

    div(v-if="['portal', 'portalrebrand24'].includes(selectedTheme)")
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
import { Vue } from 'vue-facing-decorator';
import BaseLumenCenturyLink from './_base-lumen-centurylink.vue';
import CenterLumenCenturyLink from './_center-lumen-centurylink.vue';
import BackgroundIconsLumenCenturyLink from './_background-icons-lumen-centurylink.vue';
import Compact from './_compact.vue';
import BasePortal from './_portal/_base.vue';
import BackgroundIconsPortal from './_portal/_background-icons.vue';
import CarouselPortal from './_portal/_carousel.vue';

@NuxtComponent({
  components: {
    BaseLumenCenturyLink,
    CenterLumenCenturyLink,
    BackgroundIconsLumenCenturyLink,
    Compact,
    BasePortal,
    BackgroundIconsPortal,
    CarouselPortal,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
