<template lang="pug">
  div
    h2 Examples
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <BaseLumenCenturyLink />
      <DisabledLumenCenturyLink />
      <TruncationLumenCenturyLink />
      <DoubleTruncationLumenCenturyLink />
      <ResultsLabelLumenCenturyLink />
      <PageSizeLumenCenturyLink />
      <PageJumperLumenCenturyLink />
      <Compact />
      <AdditionalSizesLumenCenturyLink />
      
    div(v-if="$store.state.themes.theme === 'portal'")
      <Portal />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base_lumen_centurylink.vue';
import DisabledLumenCenturyLink from './_disabled_lumen_centurylink.vue';
import TruncationLumenCenturyLink from './_truncation_lumen_centurylink.vue';
import DoubleTruncationLumenCenturyLink from './_double-truncation_lumen_centurylink.vue';
import ResultsLabelLumenCenturyLink from './_results-label_lumen_centurylink.vue';
import PageSizeLumenCenturyLink from './_page-size_lumen_centurylink.vue';
import PageJumperLumenCenturyLink from './_page-jumper_lumen_centurylink.vue';
import Compact from './_compact/index.vue';
import AdditionalSizesLumenCenturyLink from './_additional-sizes_lumen_centurylink.vue';
import Portal from './_portal/index.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    DisabledLumenCenturyLink,
    TruncationLumenCenturyLink,
    DoubleTruncationLumenCenturyLink,
    ResultsLabelLumenCenturyLink,
    PageSizeLumenCenturyLink,
    PageJumperLumenCenturyLink,
    Compact,
    AdditionalSizesLumenCenturyLink,
    Portal
  }
})
export default class Examples extends Vue {}
</script>
