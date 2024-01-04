<template>
  <div :class="[TRANSFER_LIST_CLASSES.ACTIONS]">
    <chi-button
      variant="flat"
      type="icon"
      v-for="action in transferListActions()"
      :key="action.icon"
      @click="action.event()"
      :disabled="action.disabled()"
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

const props = defineProps<{ move: 'transfer' | 'sort' }>();
const { transferList, selectedItems, onUpdateTransferList, onClearSelection } = inject(
  'transferList'
) as TransferListActions;

const transferListActions = () => {
  const actions = {
    transfer: [
      {
        icon: 'arrow-right',
        event: () => handleTransferAllFromColumn('from'),
        disabled: () => getMappedCurrentList('from').length === 0,
      },
      {
        icon: 'chevron-right',
        event: () => handleTransferItemsToColumn('from'),
        disabled: () => selectedItems.value.from.length === 0,
      },
      {
        icon: 'chevron-left',
        event: () => handleTransferItemsToColumn('to'),
        disabled: () => selectedItems.value.to.length === 0,
      },
      {
        icon: 'arrow-left',
        event: () => handleTransferAllFromColumn('to'),
        disabled: () => getMappedCurrentList('to').filter(({ locked }) => !locked).length === 0,
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

const handleTransferItemsToColumn = (direction: 'from' | 'to') => {
  const itemsToMove = selectedItems.value[direction];
  const list = transferList.value.map((item: TransferListItem) => {
    const shouldMove = itemsToMove.includes(item.value);
    return { ...item, ...(shouldMove && { selected: !item.selected }) };
  });

  onUpdateTransferList(list);
  onClearSelection();
};

const handleTransferAllFromColumn = (direction: 'from' | 'to') => {
  let options = getMappedCurrentList(direction);

  if (direction === 'to') {
    options = options.filter(({ locked }) => !locked);
  }

  const list = transferList.value.map((item: TransferListItem) => {
    const shouldMove = options.map(({ value }) => value).includes(item.value);
    return { ...item, ...(shouldMove && { selected: !item.selected }) };
  });

  onUpdateTransferList(list);
  onClearSelection();
};

const onSortItems = (direction: 'up' | 'down') => {
  const itemsToMove = selectedItems.value.to;

  const sorted = updateListOnItemsSorted({ direction, items: itemsToMove });
  const newList = [...getMappedCurrentList('from'), ...sorted.flat()];

  onUpdateTransferList(newList);
};

const getItemStatus = (item: string, direction: 'up' | 'down') => {
  const currItemIndex = getMappedCurrentList('to').findIndex(({ value }) => value === item);
  const currItem = getMappedCurrentList('to')[currItemIndex] as TransferListItem;

  const nextItemIndex = direction === 'up' ? currItemIndex - 1 : currItemIndex + 1;
  const nextItem = getMappedCurrentList('to')[nextItemIndex] as TransferListItem;

  const isDisabled = !nextItem || (nextItem.locked && !currItem?.wildcard);

  return { currItemIndex, currItem, nextItemIndex, nextItem, isDisabled };
};

const updateListOnItemsSorted = ({ direction, items }): TransferListItem[] => {
  const list = getMappedCurrentList('to');

  items.forEach((item) => {
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

  return !selectedItem ? true : isDisabled;
};

function getMappedCurrentList(column: 'from' | 'to' = 'from') {
  return transferList.value.filter(({ selected }) => (column === 'to' ? selected : !selected));
}
</script>
