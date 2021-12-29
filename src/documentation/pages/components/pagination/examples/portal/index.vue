<template lang="pug">
  <div>
    h3 Compact
    <CompactBase />
    <ResultsLabel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CompactBase from './_base.vue';
import ResultsLabel from './_results-label.vue';

@Component({
  components: {
    CompactBase,
    ResultsLabel
  }
})
export default class Portal extends Vue {}
</script>
