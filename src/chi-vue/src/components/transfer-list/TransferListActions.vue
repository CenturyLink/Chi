<template>
  <div class="chi-transfer-list__actions">
    <chi-button variant="flat" type="icon" :disabled="checkAvailableActive">
      <chi-icon icon="chevron-left" />
    </chi-button>

    <chi-button variant="flat" type="icon" :disabled="checkSelectedActive">
      <chi-icon icon="chevron-right" />
    </chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { TransferListItem } from '@/constants/types';
interface ColumnItemsActive {
  availables: TransferListItem[];
  selecteds: TransferListItem[];
}
@Component({})
export default class TransferListActions extends Vue {
  activeItems: ColumnItemsActive = {
    availables: [],
    selecteds: [],
  };

  mounted() {
    // LISTEN EVENT
  }

  checkAvailableActive() {
    return this.activeItems.availables.length === 0;
  }

  checkSelectedActive() {
    return this.activeItems.selecteds.length === 0;
  }
}
</script>
