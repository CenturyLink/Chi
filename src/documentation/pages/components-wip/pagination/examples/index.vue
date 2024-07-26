<template lang="pug">
  div
    h2 Examples
    <client-only placeholder="loading...">
      div(v-if="['lumen', 'centurylink'].includes(selectedTheme)")
        <BaseLumenCenturyLink />
        <DisabledLumenCenturyLink />
        <TruncationLumenCenturyLink />
        <DoubleTruncationLumenCenturyLink />
        <ResultsLabelLumenCenturyLink />
        <PageSizeLumenCenturyLink />
        <PageJumperLumenCenturyLink />
        <Compact />
        <AdditionalSizesLumenCenturyLink />

      div(v-else)
        <Portal />
    </client-only>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
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

@NuxtComponent({
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
    Portal,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
