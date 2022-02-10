<template lang="pug">
  div
    h2 Examples
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <BaseLumenCenturyLink />
      <CheckedLumenCenturyLink />
      <DisabledLumenCenturyLink />
      h2 Layout Variations
      <StackedLumenCenturyLink />
      <InlineLumenCenturyLink />
      <SwitchListLumenCenturyLink />
      <SwitchLeftLumenCenturyLink />
      <SwitchHiddenLumenCenturyLink />
      <SizesLumenCenturyLink />
    div(v-else)
      <BasePortal />
      <CheckedPortal />
      <DisabledPortal />
      h2 Layout Variations
      <StackedPortal />
      <InlinePortal />
      <SwitchListPortal />
      <SwitchLeftPortal />
      <SwitchHiddenPortal />
      <SizesPortal />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base-lumen-centurylink.vue';
import DisabledLumenCenturyLink from './_disabled-lumen-centurylink.vue';
import CheckedLumenCenturyLink from './_checked-lumen-centurylink.vue';
import InlineLumenCenturyLink from './_inline-lumen-centurylink.vue';
import StackedLumenCenturyLink from './_stacked-lumen-centurylink.vue';
import SwitchListLumenCenturyLink from './_switch-list-lumen-centurylink.vue';
import SwitchLeftLumenCenturyLink from './_switch-left-lumen-centurylink.vue';
import SwitchHiddenLumenCenturyLink from './_switch-hidden-lumen-centurylink.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
import BasePortal from './_portal/_base-portal.vue';
import CheckedPortal from './_portal/_checked-portal.vue';
import DisabledPortal from './_portal/_disabled-portal.vue';
import InlinePortal from './_portal/_inline-portal.vue';
import StackedPortal from './_portal/_stacked-portal.vue';
import SwitchListPortal from './_portal/_switch-list-portal.vue';
import SwitchLeftPortal from './_portal/_switch-left-portal.vue';
import SwitchHiddenPortal from './_portal/_switch-hidden-portal.vue';
import SizesPortal from './_portal/_sizes-portal.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    CheckedLumenCenturyLink,
    DisabledLumenCenturyLink,
    InlineLumenCenturyLink,
    StackedLumenCenturyLink,
    SwitchListLumenCenturyLink,
    SwitchLeftLumenCenturyLink,
    SwitchHiddenLumenCenturyLink,
    SizesLumenCenturyLink,
    BasePortal,
    CheckedPortal,
    DisabledPortal,
    InlinePortal,
    StackedPortal,
    SwitchListPortal,
    SwitchLeftPortal,
    SwitchHiddenPortal,
    SizesPortal,
  }
})
export default class Examples extends Vue {}
</script>
