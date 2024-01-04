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

    <TransferListFooter :original="transferListData" @chiTransferListSave="handleSaveList" />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, readonly } from 'vue';
import TransferListColumn from './TransferListColumn.vue';
import TransferListActions from './TransferListActions.vue';
import TransferListFooter from './TransferListFooter.vue';
import { TransferListConfig, TransferListItem, TransferListColumnItemsActive } from '@/constants/types';
import { TRANSFER_LIST_CLASSES } from '@/constants/classes';

const DEFAULT_ITEMS_SELECTION = { from: [], to: [] };

const props = defineProps<{
  transferListData: TransferListItem[];
  config: TransferListConfig;
}>();
const currentList = ref<TransferListItem[]>(props.transferListData);
const selectedItems = ref<TransferListColumnItemsActive>(DEFAULT_ITEMS_SELECTION);

const handleSaveList = () => {
  // TODO: implement save list
  console.log('Save list');
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
