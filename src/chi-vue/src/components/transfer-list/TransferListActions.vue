<template>
  <div :class="TRANSFER_LIST_CLASSES.ACTIONS">
    <chi-button
      v-for="action in getTransferListActions()"
      variant="flat"
      type="icon"
      :key="action.icon"
      :disabled="action.disabled()"
      @click="action.event()"
    >
      <chi-icon :icon="action.icon" />
    </chi-button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { swapElementsInArray } from '@/utils/utils';
import { TransferListItem, TransferListActions } from '@/constants/types';
import { TRANSFER_LIST_CLASSES } from '@/constants/classes';
import { CHI_VUE_KEYS } from '@/constants/constants';

const props = defineProps<{ move: 'transfer' | 'sort' }>();
const { currentList, selectedItems, onUpdateCurrentList, onClearSelection } = inject(
  CHI_VUE_KEYS.TRANSFER_LIST
) as TransferListActions;

const getTransferListActions = () => {
  const actions = {
    transfer: [
      {
        icon: 'arrow-right',
        event: () => handleTransferAll('from'),
        disabled: () => getCurrentList('from').length === 0,
      },
      {
        icon: 'chevron-right',
        event: () => handleTransferItems('from'),
        disabled: () => selectedItems.value.from.length === 0,
      },
      {
        icon: 'chevron-left',
        event: () => handleTransferItems('to'),
        disabled: () => selectedItems.value.to.length === 0,
      },
      {
        icon: 'arrow-left',
        event: () => handleTransferAll('to'),
        disabled: () => getCurrentList('to').filter(({ locked }) => !locked).length === 0,
      },
    ],
    sort: [
      {
        icon: 'chevron-up',
        event: () => !isSortButtonDisabled('up') && onSortItems('up'),
        disabled: () => isSortButtonDisabled('up'),
      },
      {
        icon: 'chevron-down',
        event: () => !isSortButtonDisabled('down') && onSortItems('down'),
        disabled: () => isSortButtonDisabled('down'),
      },
    ],
  };

  return actions[props.move];
};

const handleTransferItems = (direction: 'from' | 'to') => {
  const items = selectedItems.value[direction];
  const filteredList = currentList.value.filter(({ value }) => !items.includes(value));
  const itemsToMove = getCurrentList(direction)
    .filter(({ value }) => items.includes(value))
    .map((item) => ({ ...item, selected: !item.selected }));
  const newList = [...filteredList, ...itemsToMove];

  onUpdateCurrentList(newList);
  onClearSelection();
};

const handleTransferAll = (direction: 'from' | 'to') => {
  const currentColumn = getCurrentList(direction);
  const targetColumn = getCurrentList(direction === 'from' ? 'to' : 'from');
  const lockedItems = currentColumn.filter(({ locked }) => locked);
  const unlockedItems = currentColumn.filter(({ locked }) => !locked);
  const mappedItems = unlockedItems.map((item) => ({ ...item, selected: !item.selected }));
  const newList = [...targetColumn, ...lockedItems, ...mappedItems];

  onUpdateCurrentList(newList);
  onClearSelection();
};

const onSortItems = (direction: 'up' | 'down') => {
  const itemsToMove = selectedItems.value.to;
  const sorted = sortTransferList({ direction, items: itemsToMove });
  const newList = [...getCurrentList('from'), ...sorted.flat()];

  onUpdateCurrentList(newList);
};

const getItemStatus = (item: string, direction: 'up' | 'down') => {
  const currItemIndex = getCurrentList('to').findIndex(({ value }) => value === item);
  const currItem = getCurrentList('to')[currItemIndex] as TransferListItem;
  const nextItemIndex = direction === 'up' ? currItemIndex - 1 : currItemIndex + 1;
  const nextItem = getCurrentList('to')[nextItemIndex] as TransferListItem;
  const isDisabled = !nextItem || (nextItem.locked && !currItem?.wildcard);

  return { currItemIndex, currItem, nextItemIndex, nextItem, isDisabled };
};

const sortTransferList = ({ direction, items }): TransferListItem[] => {
  const list = getCurrentList('to');

  items.forEach((item: string) => {
    const { currItemIndex, nextItemIndex, isDisabled } = getItemStatus(item, direction);

    if (!isDisabled) {
      swapElementsInArray<TransferListItem>(list, currItemIndex, nextItemIndex);
    }
  });

  return list;
};

const isSortButtonDisabled = (direction: 'up' | 'down') => {
  const selectedItem = selectedItems.value.to[0];
  const { isDisabled } = getItemStatus(selectedItem, direction);

  return selectedItem ? isDisabled : true;
};

const getCurrentList = (column: 'from' | 'to' = 'from') => {
  return currentList.value.filter(({ selected }) => (column === 'to' ? selected : !selected));
};
</script>
