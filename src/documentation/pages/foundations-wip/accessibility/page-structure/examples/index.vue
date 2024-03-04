<template lang="pug">
.chi-grid__container.-pt--3
  <Description />
  <MeaningfulSequence />
  <BypassBlocks />
  <PageTitled />
  <LinkPurpose />
  <MultipleWays />
  <HeadingsLabels />
  <LanguagePage />
  <LanguageParts />
  <Parsing />
  <ConsistentNavigation />
  <ConsistentIdentification />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Description from './_description.vue';
import MeaningfulSequence from './_meaningful-sequence.vue';
import BypassBlocks from './_bypass_blocks.vue';
import PageTitled from './_page-titled.vue';
import LinkPurpose from './_link-purpose.vue';
import MultipleWays from './_multiple-ways.vue';
import HeadingsLabels from './_heading-labels.vue';
import LanguagePage from './_language-page.vue';
import LanguageParts from './_language-parts.vue';
import Parsing from './_parsing.vue';
import ConsistentNavigation from './_consistant-navigation.vue';
import ConsistentIdentification from './_consistant-identification.vue';

@NuxtComponent({
  components: {
    Description,
    MeaningfulSequence,
    BypassBlocks,
    PageTitled,
    LinkPurpose,
    MultipleWays,
    HeadingsLabels,
    LanguagePage,
    LanguageParts,
    Parsing,
    ConsistentNavigation,
    ConsistentIdentification,
  },
})
export default class Examples extends Vue {}
</script>
