<template lang="pug">
  div
    h2 Examples
    client-only(placeholder="loading...")
      <Base />
      <BaseWithSaveView />
      <BaseWithSaveViewAndBulkActionsPortalBrightSpeed v-if="['portal', 'brightspeed'].includes($store.state.themes.theme)" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import BaseWithSaveView from './_base-with-save-view.vue';
import BaseWithSaveViewAndBulkActionsPortalBrightSpeed from './_portal/_base-with-save-view-bulk-actions.vue';

@Component({
  components: {
    Base,
    BaseWithSaveView,
    BaseWithSaveViewAndBulkActionsPortalBrightSpeed
  }
})
export default class Examples extends Vue {}
</script>
