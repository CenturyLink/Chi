<template lang="pug">
  div
    h2 Examples
    client-only(placeholder="loading...")
      Base
      BaseWithRibbonSaveView(:theme="$store.state.themes.theme")
      BaseWithRibbonAndBulkActionsPortal(v-if="$store.state.themes.theme === 'portal'")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import BaseWithRibbonSaveView from './_base-with-ribbon-save-view.vue';
import BaseWithRibbonAndBulkActionsPortal from './_portal/_base-with-ribbon-bulk-actions.vue';

@Component({
  components: {
    Base,
    BaseWithRibbonSaveView,
    BaseWithRibbonAndBulkActionsPortal
  }
})
export default class Examples extends Vue {}
</script>
