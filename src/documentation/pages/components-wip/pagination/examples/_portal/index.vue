<template lang="pug">
  div
    h3 Compact
    <CompactBasePortal />
    <ResultsLabelPortal />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import CompactBasePortal from './_base.vue';
import ResultsLabelPortal from './_results-label.vue';

@NuxtComponent({
  components: {
    CompactBasePortal,
    ResultsLabelPortal,
  },
})
export default class Portal extends Vue {}
</script>
