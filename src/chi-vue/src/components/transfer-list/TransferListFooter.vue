<template>
  <footer class="chi-transfer-list__footer">
    <button
      data-tooltip="Reset to default columns and order"
      class="chi-button -icon -flat -xs"
      :disabled="!canReset"
      @click="handleResetTransferList"
    >
      <div class="chi-button__content -flex--column -align-items--center">
        <i aria-hidden="true" class="chi-icon icon-reset -sm--2" />
        <span class="-text--uppercase -text--2xs">Reset</span>
      </div>
    </button>
    <button class="chi-button" @click="handleCancel">Cancel</button>
    <button class="chi-button -primary" @click="handleSave" :disabled="!canSave">Save</button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import EventBus from '@/utils/EventBus';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { Prop, Emit } from 'vue-property-decorator';
import { TransferListItem } from '@/constants/types';
import { Compare } from '@/utils/Compare';

@Component({})
export default class TransferListFooter extends Vue {
  @Prop() original!: TransferListItem[];

  canSave = false;
  canReset = false;

  mounted() {
    EventBus.on(TRANSFER_LIST_EVENTS.CURRENT_LIST, this.onUpdateCurrentList);
  }

  onUpdateCurrentList(currentList) {
    const isEqual = Compare.deepEqual(currentList, this.original);
    this.canReset = !isEqual;
    this.canSave = !isEqual;
  }

  @Emit(TRANSFER_LIST_EVENTS.RESET_LIST)
  handleResetTransferList() {
    EventBus.emit(TRANSFER_LIST_EVENTS.RESET_LIST);
  }

  @Emit(TRANSFER_LIST_EVENTS.CANCEL)
  handleCancel() {
    EventBus.emit(TRANSFER_LIST_EVENTS.CANCEL);
  }

  @Emit(TRANSFER_LIST_EVENTS.SAVE)
  handleSave() {
    EventBus.emit(TRANSFER_LIST_EVENTS.SAVE);
  }
}
</script>
