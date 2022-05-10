<template lang="pug">
  div
    h3 Examples
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <BaseLumenCenturyLink />
      <CheckedLumenCenturyLink />
      <DisabledLumenCenturyLink />
      h3 Layout Variations
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
      h3 Layout Variations
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
import BasePortal from './_portal/_base.vue';
import CheckedPortal from './_portal/_checked.vue';
import DisabledPortal from './_portal/_disabled.vue';
import InlinePortal from './_portal/_inline.vue';
import StackedPortal from './_portal/_stacked.vue';
import SwitchListPortal from './_portal/_switch-list.vue';
import SwitchLeftPortal from './_portal/_switch-left.vue';
import SwitchHiddenPortal from './_portal/_switch-hidden.vue';
import SizesPortal from './_portal/_sizes.vue';

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
