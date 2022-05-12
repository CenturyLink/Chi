<template lang="pug">
  div
    h2 Examples
    p.-text To render accordion, use the class <code>chi-accordion</code>.

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <BaseLumenCenturyLink />
      <NestedLumenCenturyLink />
      <MethodsLumenCenturyLink />
      <ExpandCollapseAllLumenCenturyLink />
      <DisabledLumenCenturyLink />
      <TruncatedLumenCenturyLink />
      <SizesLumenCenturyLink />

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <CardPortal />
      <NestedPortal />
      <MethodsPortal />
      <ExpandCollapseAllPortal />
      <DisabledPortal />
      <TruncatedPortal />
      <SizesPortal />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base_lumen_centurylink.vue';
import NestedLumenCenturyLink from './_nested_lumen_centurylink.vue';
import MethodsLumenCenturyLink from './_methods_lumen_centurylink.vue';
import ExpandCollapseAllLumenCenturyLink from './_expand_collapse_all_lumen_centurylink.vue';
import DisabledLumenCenturyLink from './_disabled_lumen_centurylink.vue';
import TruncatedLumenCenturyLink from './_truncated_lumen_centurylink.vue';
import SizesLumenCenturyLink from './_sizes_lumen_centurylink.vue';
import BasePortal from './_portal/_base.vue';
import CardPortal from './_portal/_card.vue';
import NestedPortal from './_portal/_nested.vue';
import MethodsPortal from './_portal/_methods.vue';
import ExpandCollapseAllPortal from './_portal/_expand_collapse_all.vue';
import DisabledPortal from './_portal/_disabled.vue';
import TruncatedPortal from './_portal/_truncated.vue';
import SizesPortal from './_portal/_sizes.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    BasePortal,
    CardPortal,
    NestedLumenCenturyLink,
    NestedPortal,
    MethodsLumenCenturyLink,
    MethodsPortal,
    ExpandCollapseAllLumenCenturyLink,
    ExpandCollapseAllPortal,
    DisabledLumenCenturyLink,
    DisabledPortal,
    TruncatedLumenCenturyLink,
    TruncatedPortal,
    SizesLumenCenturyLink,
    SizesPortal,
  }
})
export default class Examples extends Vue {}
</script>
