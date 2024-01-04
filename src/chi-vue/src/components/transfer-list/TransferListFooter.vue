<template>
  <footer :class="[TRANSFER_LIST_CLASSES.FOOTER]">
    <button
      :data-tooltip="TOOLTIP_MESSAGE"
      :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.ICON_BUTTON, BUTTON_CLASSES.FLAT, BUTTON_CLASSES.SIZES.XS]"
      :disabled="canReset()"
      @click="handleReset"
    >
      <div :class="[BUTTON_CLASSES.CONTENT, UTILITY_CLASSES.FLEX.COLUMN, UTILITY_CLASSES.ALIGN_ITEMS.CENTER]">
        <i aria-hidden="true" :class="[ICON_CLASS, 'icon-reset', '-sm--2']" />
        <span :class="[UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE, UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS]">Reset</span>
      </div>
    </button>
    <button :class="[BUTTON_CLASSES.BUTTON]" @click="handleCancel">Cancel</button>
    <button :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.PRIMARY]" @click="handleSave" :disabled="canSave()">
      Save
    </button>
  </footer>
</template>

<script lang="ts" setup>
import { inject, Ref } from 'vue';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { TransferListItem } from '@/constants/types';
import { Compare } from '@/utils/Compare';
import { UTILITY_CLASSES, TRANSFER_LIST_CLASSES, BUTTON_CLASSES, ICON_CLASS } from '@/constants/classes';

const props = defineProps<{ original: TransferListItem[] }>();
const emit = defineEmits();

const { transferList, onUpdateTransferList } = inject('transferList') as {
  transferList: Ref<TransferListItem[]>;
  onUpdateTransferList: (list: TransferListItem[]) => void;
};

const TOOLTIP_MESSAGE = 'Reset to default columns and order';

const canSave = () => {
  return Compare.deepEqual(transferList.value, props.original);
};

const canReset = () => {
  return Compare.deepEqual(transferList.value, props.original);
};

const handleReset = () => {
  onUpdateTransferList(props.original);
};

const handleCancel = () => {
  onUpdateTransferList(props.original);
};

const handleSave = () => {
  emit(TRANSFER_LIST_EVENTS.SAVE);
};
</script>
