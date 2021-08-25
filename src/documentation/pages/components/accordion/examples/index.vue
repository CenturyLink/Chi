<template lang="pug">
  div
    h2 Examples
    p.-text To render accordion, use the class <code>chi-accordion</code>.

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <BaseLumenCenturylink />
      <NestedLumenCenturyLink />
      <MethodsLumenCenturyLink />
      <ExpandAllLumenCenturyLink />
      <DisabledLumenCenturyLink />
      <TruncatedLumenCenturyLink />
      <SizesLumenCenturyLink />

    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <Card />
      <NestedPortal />
      <MethodsPortal />
      <ExpandAllPortal />
      <DisabledPortal />
      <TruncatedPortal />
      <SizesPortal />

    div(v-if="$store.state.themes.theme === 'centurylink'")
      h3 CenturyLink examples

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturylink from './_base_lumen_centurylink.vue';
import NestedLumenCenturyLink from './_nested_lumen_centurylink.vue';
import MethodsLumenCenturyLink from './_methods_lumen_centurylink.vue';
import ExpandAllLumenCenturyLink from './_expand_all_lumen_centurylink.vue';
import DisabledLumenCenturyLink from './_disabled_lumen_centurylink.vue';
import TruncatedLumenCenturyLink from './_truncated_lumen_centurylink.vue';
import SizesLumenCenturyLink from './_sizes_lumen_centurylink.vue';
import BasePortal from './_portal/_base_portal.vue';
import Card from './_portal/_card.vue';
import NestedPortal from './_portal/_nested.vue';
import MethodsPortal from './_portal/_methods.vue';
import ExpandAllPortal from './_portal/_expand_all.vue';
import DisabledPortal from './_portal/_disabled.vue';
import TruncatedPortal from './_portal/_truncated.vue';
import SizesPortal from './_portal/_sizes.vue';

@Component({
  components: {
    BaseLumenCenturylink,
    BasePortal,
    Card,
    NestedLumenCenturyLink,
    NestedPortal,
    MethodsLumenCenturyLink,
    MethodsPortal,
    ExpandAllLumenCenturyLink,
    ExpandAllPortal,
    DisabledLumenCenturyLink,
    DisabledPortal,
    TruncatedLumenCenturyLink,
    TruncatedPortal,
    SizesLumenCenturyLink,
    SizesPortal,
  },
})
export default class AccordionExamples extends Vue {}
</script>
