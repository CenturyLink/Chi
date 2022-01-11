<template lang="pug">
  <Wrapper>
    h2 Examples
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <BaseLumenCenturylink />
      <DisabledLumenCenturylink />
      <TruncationLumenCenturylink />
      <DoubleTruncationLumenCenturylink />
      <ResultsLabelLumenCenturylink />
      <PageSizeLumenCenturylink />
      <PageJumperLumenCenturylink />
      <Compact />
      <AdditionalSizesLumenCenturylink />
      
    div(v-if="$store.state.themes.theme === 'portal'")
      <Portal />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturylink from './_base_lumen_centurylink.vue';
import DisabledLumenCenturylink from './_disabled_lumen_centurylink.vue';
import TruncationLumenCenturylink from './_truncation_lumen_centurylink.vue';
import DoubleTruncationLumenCenturylink from './_double-truncation_lumen_centurylink.vue';
import ResultsLabelLumenCenturylink from './_results-label_lumen_centurylink.vue';
import PageSizeLumenCenturylink from './_page-size_lumen_centurylink.vue';
import PageJumperLumenCenturylink from './_page-jumper_lumen_centurylink.vue';
import Compact from './compact/index.vue';
import AdditionalSizesLumenCenturylink from './_additional-sizes_lumen_centurylink.vue';
import Portal from './portal/index.vue';

@Component({
  components: {
    BaseLumenCenturylink,
    DisabledLumenCenturylink,
    TruncationLumenCenturylink,
    DoubleTruncationLumenCenturylink,
    ResultsLabelLumenCenturylink,
    PageSizeLumenCenturylink,
    PageJumperLumenCenturylink,
    Compact,
    AdditionalSizesLumenCenturylink,
    Portal
  }
})
export default class Examples extends Vue {}
</script>
