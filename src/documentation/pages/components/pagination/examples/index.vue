<template lang="pug">
  <div>
    h2 Examples
    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <Base />
      <Disabled />
      <Truncation />
      <DoubleTruncation />
      <ResultsLabel />
      <PageSize />
      <PageJumper />
      <Compact />
      <AdditionalSizes />
      
    div(v-if="$store.state.themes.theme === 'portal'")
      <Portal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Truncation from './_truncation.vue';
import DoubleTruncation from './_double-truncation.vue';
import ResultsLabel from './_results-label.vue';
import PageSize from './_page-size.vue';
import PageJumper from './_page-jumper.vue';
import Compact from './compact/index.vue';
import AdditionalSizes from './_additional-sizes.vue';
import Portal from './portal/index.vue';

@Component({
  components: {
    Base,
    Disabled,
    Truncation,
    DoubleTruncation,
    ResultsLabel,
    PageSize,
    PageJumper,
    Compact,
    AdditionalSizes,
    Portal
  }
})
export default class Examples extends Vue {}
</script>
