<template lang="pug">
  div
    h2 Examples
    div(v-if="$store.state.themes.theme === 'portal'")
      <BasePortal />
      <BaseWithRibbonPortal />
      <BaseWithRibbonAndBulkActionsPortal />
    div(v-else)
      <BaseLumenCenturyLink />
      <BaseWithRibbonLumenCenturyLink />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLumenCenturyLink from './_base-lumen-centurylink.vue';
import BaseWithRibbonLumenCenturyLink from './_base-with-ribbon-lumen-centurylink.vue';
import BasePortal from './_portal/_base.vue';
import BaseWithRibbonPortal from './_portal/_base-with-ribbon.vue';
import BaseWithRibbonAndBulkActionsPortal from './_portal/_base-with-ribbon-bulk-actions.vue';

@Component({
  components: {
    BaseLumenCenturyLink,
    BaseWithRibbonLumenCenturyLink,
    BasePortal,
    BaseWithRibbonPortal,
    BaseWithRibbonAndBulkActionsPortal
  }
})
export default class Examples extends Vue {}
</script>
