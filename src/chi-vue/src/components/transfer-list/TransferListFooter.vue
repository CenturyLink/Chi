<template>
  <footer :class="TRANSFER_LIST_CLASSES.FOOTER">
    <button
      :data-tooltip="TOOLTIP_MESSAGE"
      :class="[
        BUTTON_CLASSES.BUTTON,
        BUTTON_CLASSES.ICON_BUTTON,
        BUTTON_CLASSES.FLAT,
        BUTTON_CLASSES.SIZES.XS,
        UTILITY_CLASSES.PADDING.Y[0],
        TRANSFER_LIST_CLASSES.RESET_BUTTON,
      ]"
      :disabled="canReset()"
      @click="handleReset"
    >
      <div :class="[BUTTON_CLASSES.CONTENT, UTILITY_CLASSES.FLEX.COLUMN, UTILITY_CLASSES.ALIGN_ITEMS.CENTER]">
        <i aria-hidden="true" :class="[ICON_CLASS, 'icon-reset', '-sm--2']" />
        <span :class="UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE">Reset</span>
      </div>
    </button>
    <button :class="BUTTON_CLASSES.BUTTON" @click="handleCancel">Cancel</button>
    <button :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.PRIMARY]" @click="handleSave" :disabled="canSave()">
      Save
    </button>
  </footer>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { TransferListItem, TransferListActions } from '@/constants/types';
import { Compare } from '@/utils/Compare';
import { UTILITY_CLASSES, TRANSFER_LIST_CLASSES, BUTTON_CLASSES, ICON_CLASS } from '@/constants/classes';
import { CHI_VUE_KEYS } from '@/constants/constants';

const TOOLTIP_MESSAGE = 'Reset to default columns and order';
const props = defineProps<{
  originalTransferListData: TransferListItem[];
  savedTransferListData: TransferListItem[];
}>();
const emit = defineEmits();
const { transferList, onUpdateTransferList } = inject(CHI_VUE_KEYS.TRANSFER_LIST) as TransferListActions;

const canSave = () => {
  return Compare.deepEqual(transferList.value, props.savedTransferListData);
};

const canReset = () => {
  return Compare.deepEqual(transferList.value, props.originalTransferListData);
};

const handleReset = () => {
  emit(TRANSFER_LIST_EVENTS.RESET);
};

const handleCancel = () => {
  onUpdateTransferList(props.savedTransferListData);
};

const handleSave = () => {
  emit(TRANSFER_LIST_EVENTS.SAVE);
};
</script>
