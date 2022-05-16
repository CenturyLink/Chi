<template lang="pug">
  div
    h3 Compact
    <CompactBasePortal />
    <ResultsLabelPortal />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CompactBasePortal from './_base.vue';
import ResultsLabelPortal from './_results-label.vue';

@Component({
  components: {
    CompactBasePortal,
    ResultsLabelPortal
  }
})
export default class Portal extends Vue {}
</script>
