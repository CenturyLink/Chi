<template lang="pug">
  div
    h2 Examples
    <client-only placeholder="loading...">
      <Base />
      div(v-if="$store.state.themes.theme === 'portal'")
        <BaseWithRibbonPortal />
        <BaseWithRibbonAndBulkActionsPortal />
      div(v-else)
        <BaseWithRibbonLumenCenturyLink />
    </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import BaseWithRibbonLumenCenturyLink from './_base-with-ribbon-lumen-centurylink.vue';
import BaseWithRibbonPortal from './_portal/_base-with-ribbon.vue';
import BaseWithRibbonAndBulkActionsPortal from './_portal/_base-with-ribbon-bulk-actions.vue';

@Component({
  components: {
    Base,
    BaseWithRibbonLumenCenturyLink,
    BaseWithRibbonPortal,
    BaseWithRibbonAndBulkActionsPortal
  }
})
export default class Examples extends Vue {}
</script>
