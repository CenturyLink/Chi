<template>
  <div class="chi-transfer-list__actions">
    <chi-button variant="flat" type="icon" @click="handleTransferAllFromColumn('to')">
      <chi-icon icon="arrow-left" />
    </chi-button>

    <chi-button variant="flat" type="icon" :disabled="isToColumnDisabled()" @click="handleTransferItemsToColumn('to')">
      <chi-icon icon="chevron-left" />
    </chi-button>

    <chi-button
      variant="flat"
      type="icon"
      :disabled="isFromColumnDisabled()"
      @click="handleTransferItemsToColumn('from')">
      <chi-icon icon="chevron-right" />
    </chi-button>

    <chi-button variant="flat" type="icon" @click="handleTransferAllFromColumn('from')">
      <chi-icon icon="arrow-right" />
    </chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';

interface ColumnItemsActive {
  from: string[];
  to: string[];
}

const defaultActiveItems = { from: [], to: [] };

@Component({})
export default class TransferListActions extends Vue {
  activeItems: ColumnItemsActive = defaultActiveItems;

  isFromColumnDisabled() {
    return this.activeItems.from.length === 0;
  }

  isToColumnDisabled() {
    return this.activeItems.to.length === 0;
  }

  mounted() {
    const parentComponents = this.$parent.$children;
    const allColumns = parentComponents.filter(({ $options }: any) => $options.name === 'TransferListColumn');
    allColumns.forEach((component: any) => {
      component.$on(TRANSFER_LIST_EVENTS.ITEMS_SELECTED, (value: ColumnItemsActive) => {
        this.activeItems = { ...this.activeItems, ...value };
      });
    });
  }

  handleTransferItemsToColumn(columnToMove: 'from' | 'to') {
    const itemsToMove = this.activeItems[columnToMove];

    this.$emit(TRANSFER_LIST_EVENTS.ITEMS_MOVED, itemsToMove);

    this.activeItems = defaultActiveItems;
  }

  handleTransferAllFromColumn(columnFrom: 'from' | 'to') {
    this.$emit(TRANSFER_LIST_EVENTS.ITEMS_MOVE_ALL, columnFrom);
    this.activeItems = defaultActiveItems;
  }
}
</script>
