<template lang="pug">
  div
    h2 Examples
    client-only(placeholder="loading...")
      BaseExample
      <BaseWithSaveView />
      <BaseWithSaveViewAndBulkActionsPortalBrightSpeed v-if="['portal', 'brightspeed'].includes(selectedTheme)" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import BaseWithSaveView from './_base-with-save-view.vue';
import BaseWithSaveViewAndBulkActionsPortalBrightSpeed from './_portal/_base-with-save-view-bulk-actions.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    BaseWithSaveView,
    BaseWithSaveViewAndBulkActionsPortalBrightSpeed,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
