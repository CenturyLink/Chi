<template>
  <div class="chi-transfer-list__actions">
    <chi-button
      variant="flat"
      type="icon"
      v-for="(item, index) in actionList"
      :key="index"
      @click="events[item.event]()"
      :disabled="item.disabled && events[item.disabled]()">
      <chi-icon :icon="item.icon" />
    </chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { Prop } from 'vue-property-decorator';
import { Event } from '@/utils/Event';
import EventBus from '@/utils/EventBus';

const actions = {
  transfer: [
    { icon: 'arrow-right', event: 'onTransferAllToColumnFrom', disabled: null },
    { icon: 'chevron-right', event: 'onTransferItemsToColumnFrom', disabled: 'isColumnFromDisabled' },
    { icon: 'chevron-left', event: 'onTransferItemsToColumnTo', disabled: 'isColumnToDisabled' },
    { icon: 'arrow-left', event: 'onTransferAllToColumnTo', disabled: null },
  ],
  sort: [
    { icon: 'arrow-up', event: 'onMoveItemsToUp', disabled: 'isColumnToDisabled' },
    { icon: 'arrow-down', event: 'onMoveItemsToDown', disabled: 'isColumnToDisabled' },
  ],
};

interface ColumnItemsActive {
  from: string[];
  to: string[];
}

const DEFAULT_ACTIVE_ITEMS = { from: [], to: [] };

@Component({})
export default class TransferListActions extends Vue {
  @Prop() move!: 'transfer' | 'sort';

  activeItems: ColumnItemsActive = DEFAULT_ACTIVE_ITEMS;
  actionList = actions[this.move];
  events = {
    onTransferAllToColumnFrom: () => this.handleTransferAllToColumn('from'),
    onTransferAllToColumnTo: () => this.handleTransferAllToColumn('to'),
    onTransferItemsToColumnFrom: () => this.handleTransferItemsToColumn('from'),
    onTransferItemsToColumnTo: () => this.handleTransferItemsToColumn('to'),
    onMoveItemsToUp: () => this.handleSortItems('up'),
    onMoveItemsToDown: () => this.handleSortItems('down'),
    isColumnFromDisabled: () => this.isColumnFromDisabled(),
    isColumnToDisabled: () => this.isColumnToDisabled(),
  };

  mounted() {
    EventBus.on(TRANSFER_LIST_EVENTS.ITEMS_SELECTED, (event) => this.handleSelectItem(event as CustomEvent));
  }

  isColumnFromDisabled() {
    return this.activeItems.from.length === 0;
  }

  isColumnToDisabled() {
    return this.activeItems.to.length === 0;
  }

  handleSelectItem(event: CustomEvent) {
    this.activeItems = { ...this.activeItems, ...event.detail };
  }

  handleTransferItemsToColumn(direction: 'from' | 'to') {
    const itemsToMove = this.activeItems[direction];

    this.$emit(TRANSFER_LIST_EVENTS.ITEMS_MOVED, itemsToMove);
    this.clearSelecteds();
  }

  handleTransferAllToColumn(direction: 'from' | 'to') {
    this.$emit(TRANSFER_LIST_EVENTS.ITEMS_MOVE_ALL, direction);
    this.clearSelecteds();
  }

  handleSortItems(direction: 'up' | 'down') {
    const itemsToMove = this.activeItems['to'];

    this.$emit(TRANSFER_LIST_EVENTS.ITEMS_SORTED, { direction, items: itemsToMove });
  }

  clearSelecteds() {
    this.activeItems = DEFAULT_ACTIVE_ITEMS;

    const evt = Event(TRANSFER_LIST_EVENTS.CLEAR_SELECTION);
    window.dispatchEvent(evt);
  }
}
</script>
