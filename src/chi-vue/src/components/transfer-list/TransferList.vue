<template>
  <div class="chi-transfer-list">
    <div class="chi-transfer-list__content">
      <TransferListColumn
        type="from"
        :title="config.columns.from.title"
        :description="config.columns.from.description"
        :items="getColumnItems('from')"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput" />

      <TransferListActions
        move="transfer"
        @chiTransferListItemMoved="updateListOnItemsMoved"
        @chiTransferListItemMoveAll="updateListOnAllItemsMoved" />

      <TransferListColumn
        type="to"
        :title="config.columns.to.title"
        :description="config.columns.to.description"
        :items="getColumnItems('to')"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput" />

      <TransferListActions move="sort" @chiTransferListItemSorted="updateListOnItemsSorted" />
    </div>

    <TransferListFooter />
  </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import TransferListColumn from './TransferListColumn.vue';
import TransferListActions from './TransferListActions.vue';
import TransferListFooter from './TransferListFooter.vue';
import { TransferListConfig, TransferListItem } from '@/constants/types';
import { swapElementsInArray } from '@/utils/utils';

@Component({
  components: {
    TransferListColumn,
    TransferListActions,
    TransferListFooter,
  },
})
export default class TransferList extends Vue {
  @Prop() transferListData!: TransferListItem[];
  @Prop() config!: TransferListConfig;

  list = this.transferListData || [];

  getColumnItems(column: 'from' | 'to'): TransferListItem[] {
    return this.list.filter(({ selected }) => {
      return column === 'from' ? !selected : selected;
    });
  }

  updateListOnItemsMoved(items: string[]) {
    const newList = this.list.map((item: TransferListItem) => {
      const shouldMove = items.includes(item.value);

      return {
        ...item,
        ...(shouldMove && { selected: !item.selected }),
      };
    });

    this.list = newList;
  }

  updateListOnAllItemsMoved(column: 'from' | 'to') {
    const columnType = this.getColumnItems(column);
    const items = columnType.map((item) => item.value);

    this.updateListOnItemsMoved(items);
  }

  updateListOnItemsSorted({ direction, items }: { direction: 'up' | 'down'; items: string[] }) {
    items.forEach((item) => {
      const currItemIndex = this.list.findIndex(({ value }) => value === item);
      const currItem = this.list[currItemIndex];
      const itemToSwapIndex = direction === 'up' ? currItemIndex - 1 : currItemIndex + 1;
      const itemToSwap = this.list[itemToSwapIndex];

      if (!itemToSwap || (itemToSwap.locked && !currItem.wildcard)) {
        return;
      }

      swapElementsInArray(this.list, currItemIndex, itemToSwapIndex);
    });
  }
}
</script>
