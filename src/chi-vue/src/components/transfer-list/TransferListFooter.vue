<template>
  <footer :class="[TRANSFER_LIST_CLASSES.FOOTER]">
    <button
      :data-tooltip="TOOLTIP_MESSAGE"
      :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.ICON_BUTTON, BUTTON_CLASSES.FLAT, BUTTON_CLASSES.SIZES.XS]"
      :disabled="!canReset"
      @click="handleResetTransferList"
    >
      <div :class="[BUTTON_CLASSES.CONTENT, UTILITY_CLASSES.FLEX.COLUMN, UTILITY_CLASSES.ALIGN_ITEMS.CENTER]">
        <i aria-hidden="true" :class="[ICON_CLASS, 'icon-reset', '-sm--2']" />
        <span :class="[UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE, UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS]">Reset</span>
      </div>
    </button>
    <button :class="[BUTTON_CLASSES.BUTTON]" @click="handleCancel">Cancel</button>
    <button :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.PRIMARY]" @click="handleSave" :disabled="!canSave">
      Save
    </button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { Prop, Emit } from 'vue-property-decorator';
import EventBus from '@/utils/EventBus';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { TransferListItem } from '@/constants/types';
import { Compare } from '@/utils/Compare';
import { UTILITY_CLASSES, TRANSFER_LIST_CLASSES, BUTTON_CLASSES, ICON_CLASS } from '@/constants/classes';

@Component({})
export default class TransferListFooter extends Vue {
  @Prop() original!: TransferListItem[];

  canSave = false;
  canReset = false;

  UTILITY_CLASSES = UTILITY_CLASSES;
  TRANSFER_LIST_CLASSES = TRANSFER_LIST_CLASSES;
  BUTTON_CLASSES = BUTTON_CLASSES;
  ICON_CLASS = ICON_CLASS;
  TOOLTIP_MESSAGE = 'Reset to default columns and order';

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
