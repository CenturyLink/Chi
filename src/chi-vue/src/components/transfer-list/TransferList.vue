<template>
  <div :class="[TRANSFER_LIST_CLASSES.TRANSFER_LIST]">
    <div :class="[TRANSFER_LIST_CLASSES.CONTENT]">
      <TransferListColumn
        type="from"
        :title="config.columns.from.title"
        :description="config.columns.from.description"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />
      <TransferListActions move="transfer" />
      <TransferListColumn
        type="to"
        :title="config.columns.to.title"
        :description="config.columns.to.description"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />
      <TransferListActions move="sort" />
    </div>

    <TransferListFooter
      :original="transferListData"
      @chiTransferListSave="onSaveTransferList"
      @chiTransferListReset="onResetTransferList"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, readonly, watch } from 'vue';
import TransferListColumn from './TransferListColumn.vue';
import TransferListActions from './TransferListActions.vue';
import TransferListFooter from './TransferListFooter.vue';
import { TransferListItem, TransferListColumnItemsActive, TransferList } from '@/constants/types';
import { TRANSFER_LIST_CLASSES } from '@/constants/classes';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';

const DEFAULT_ITEMS_SELECTION = { from: [], to: [] };

const props = defineProps<TransferList>();
const emit = defineEmits();
const currentList = ref<TransferListItem[]>(props.transferListData);
const selectedItems = ref<TransferListColumnItemsActive>(DEFAULT_ITEMS_SELECTION);

watch(currentList, () => {
  emit(TRANSFER_LIST_EVENTS.CHANGE, currentList.value);
});

const onSaveTransferList = () => {
  emit(TRANSFER_LIST_EVENTS.SAVE, currentList.value);
};

const onResetTransferList = () => {
  emit(TRANSFER_LIST_EVENTS.RESET, props.transferListData);
};

const onUpdateTransferList = (list: TransferListItem[]) => {
  currentList.value = list;
};

const onSelectItem = (list: TransferListColumnItemsActive) => {
  selectedItems.value = list;
};

const onClearSelection = () => {
  selectedItems.value = DEFAULT_ITEMS_SELECTION;
};

provide('transferList', {
  transferList: readonly(currentList),
  selectedItems: readonly(selectedItems),
  onUpdateTransferList,
  onSelectItem,
  onClearSelection,
});
</script>
