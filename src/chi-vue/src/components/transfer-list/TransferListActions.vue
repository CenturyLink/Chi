<template>
  <div class="chi-transfer-list__actions">
    <chi-button
      variant="flat"
      type="icon"
      v-for="action in getActions()"
      :key="action.icon"
      @click="action.ev()"
      :disabled="action.disabled()"
    >
      <chi-icon :icon="action.icon" />
    </chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { Prop, Emit } from 'vue-property-decorator';
import EventBus from '@/utils/EventBus';
import { swapElementsInArray } from '@/utils/utils';
import { TransferListItem } from '@/constants/types';

interface ColumnItemsActive {
  from: string[];
  to: string[];
}

const DEFAULT_ACTIVE_ITEMS = { from: [], to: [] };

@Component({})
export default class TransferListActions extends Vue {
  @Prop() move!: 'transfer' | 'sort';

  selectedItems: ColumnItemsActive = DEFAULT_ACTIVE_ITEMS;
  currentTransferList: TransferListItem[] = [];
  currentTransferListMapped = DEFAULT_ACTIVE_ITEMS;

  getActions() {
    const actions = {
      transfer: [
        {
          icon: 'arrow-right',
          ev: () => this.transferAllFromColumn('from'),
          disabled: () => this.currentTransferListMapped.from.length === 0,
        },
        {
          icon: 'chevron-right',
          ev: () => this.transferItemsToColumn('from'),
          disabled: () => this.selectedItems.from.length === 0,
        },
        {
          icon: 'chevron-left',
          ev: () => this.transferItemsToColumn('to'),
          disabled: () => this.selectedItems.to.length === 0,
        },
        {
          icon: 'arrow-left',
          ev: () => this.transferAllFromColumn('to'),
          disabled: () => this.currentTransferListMapped.to.filter(({ locked }) => !locked).length === 0,
        },
      ],
      sort: [
        {
          icon: 'chevron-up',
          ev: () => !this.isSortButtonDisabled('up') && this.onSortItems('up'),
          disabled: () => this.isSortButtonDisabled('up'),
        },
        {
          icon: 'chevron-down',
          ev: () => !this.isSortButtonDisabled('down') && this.onSortItems('down'),
          disabled: () => this.isSortButtonDisabled('down'),
        },
      ],
    };

    return actions[this.move];
  }

  mounted() {
    EventBus.on(TRANSFER_LIST_EVENTS.CURRENT_LIST, this.handleUpdateCurrentList);
    EventBus.on(TRANSFER_LIST_EVENTS.ITEMS_SELECTED, this.handleSelectItem);
    EventBus.on(TRANSFER_LIST_EVENTS.CLEAR_SELECTION, () => (this.selectedItems = DEFAULT_ACTIVE_ITEMS));
    EventBus.on(TRANSFER_LIST_EVENTS.RESET_LIST, this.clearSelecteds);
  }

  handleUpdateCurrentList(list) {
    const from = list.filter((item) => !item?.selected);
    const to = list.filter((item) => item?.selected);

    this.currentTransferList = list;
    this.currentTransferListMapped = { from, to };
  }

  handleSelectItem(event) {
    this.selectedItems = { ...this.selectedItems, ...event };
  }

  @Emit(TRANSFER_LIST_EVENTS.ITEMS_MOVED)
  transferItemsToColumn(direction: 'from' | 'to') {
    const itemsToMove = this.selectedItems[direction];
    EventBus.emit(TRANSFER_LIST_EVENTS.ITEMS_MOVED, itemsToMove);
    this.clearSelecteds();
  }

  @Emit(TRANSFER_LIST_EVENTS.ITEMS_MOVE_ALL)
  transferAllFromColumn(direction: 'from' | 'to') {
    EventBus.emit(TRANSFER_LIST_EVENTS.ITEMS_MOVE_ALL, direction);
    this.clearSelecteds();
  }

  @Emit(TRANSFER_LIST_EVENTS.ITEMS_SORTED)
  onSortItems(direction: 'up' | 'down') {
    const itemsToMove = this.selectedItems['to'];

    const sorted = this.updateListOnItemsSorted({ direction, items: itemsToMove });
    const newList = [...this.currentTransferListMapped.from, ...sorted.flat()];

    EventBus.emit(TRANSFER_LIST_EVENTS.ITEMS_SORTED, newList);
  }

  @Emit(TRANSFER_LIST_EVENTS.CLEAR_SELECTION)
  clearSelecteds() {
    EventBus.emit(TRANSFER_LIST_EVENTS.CLEAR_SELECTION);
  }

  getItemStatus(item: string, direction: 'up' | 'down') {
    const currItemIndex = this.currentTransferListMapped.to.findIndex(({ value }) => value === item);
    const currItem = this.currentTransferListMapped.to[currItemIndex] as TransferListItem;

    const nextItemIndex = direction === 'up' ? currItemIndex - 1 : currItemIndex + 1;
    const nextItem = this.currentTransferListMapped.to[nextItemIndex] as TransferListItem;

    const isDisabled = !nextItem || (nextItem.locked && !currItem?.wildcard);

    return { currItemIndex, currItem, nextItemIndex, nextItem, isDisabled };
  }

  updateListOnItemsSorted({ direction, items }): TransferListItem[] {
    const list = this.currentTransferListMapped.to;

    items.forEach((item) => {
      const { currItemIndex, nextItemIndex, isDisabled } = this.getItemStatus(item, direction);

      if (!isDisabled) {
        swapElementsInArray<TransferListItem>(list, currItemIndex, nextItemIndex);
      }
    });

    return list;
  }

  isSortButtonDisabled(direction: 'up' | 'down') {
    const selectedItem = this.selectedItems.to[0];
    const { isDisabled } = this.getItemStatus(selectedItem, direction);

    if (!selectedItem) {
      return true;
    }

    return isDisabled;
  }
}
</script>
