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

      <TransferListActions />

      <TransferListColumn
        type="to"
        :title="config.columns.to.title"
        :description="config.columns.to.description"
        :items="getColumnItems('to')"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput" />
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
import { TRANSFER_LIST_EVENTS } from '@/constants/events';

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

  list = this.transferListData;

  mounted() {
    const actions = this.$children.find(({ $options }: any) => $options.name === 'TransferListActions');
    actions.$on(TRANSFER_LIST_EVENTS.ITEMS_MOVED, this.updateListOnItemsMoved);
    actions.$on(TRANSFER_LIST_EVENTS.ITEMS_MOVE_ALL, this.updateListOnAllItemsMoved);
  }

  getColumnItems(column: 'from' | 'to'): TransferListItem[] {
    return this.list?.filter((item) => (column === 'from' ? !item.selected : item.selected)) || [];
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
}
</script>
