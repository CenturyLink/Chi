<template>
  <div :class="[TRANSFER_LIST_CLASSES.TRANSFER_LIST]">
    <div :class="[TRANSFER_LIST_CLASSES.CONTENT]">
      <TransferListColumn
        type="from"
        :title="config.columns.from.title"
        :description="config.columns.from.description"
        :items="getColumnItems('from')"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />

      <TransferListActions move="transfer" />

      <TransferListColumn
        type="to"
        :title="config.columns.to.title"
        :description="config.columns.to.description"
        :items="getColumnItems('to')"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />

      <TransferListActions move="sort" />
    </div>

    <TransferListFooter :original="transferListData" />
  </div>
</template>

<script lang="ts">
import { Prop, Watch } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import TransferListColumn from './TransferListColumn.vue';
import TransferListActions from './TransferListActions.vue';
import TransferListFooter from './TransferListFooter.vue';
import { TransferListConfig, TransferListItem } from '@/constants/types';
import EventBus from '@/utils/EventBus';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { TRANSFER_LIST_CLASSES } from '@/constants/classes';

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

  currentTransferList: TransferListItem[] = [];

  TRANSFER_LIST_CLASSES = TRANSFER_LIST_CLASSES;

  onLoadOriginalList() {
    this.currentTransferList = this.transferListData;
  }

  mounted() {
    this.onLoadOriginalList();

    EventBus.on(TRANSFER_LIST_EVENTS.ITEMS_MOVED, this.updateListOnItemsMoved);
    EventBus.on(TRANSFER_LIST_EVENTS.ITEMS_MOVE_ALL, this.updateListOnAllItemsMovedFromColumn);
    EventBus.on(TRANSFER_LIST_EVENTS.ITEMS_SORTED, this.updateListOnItemsSorted);
    EventBus.on(TRANSFER_LIST_EVENTS.RESET_LIST, this.onLoadOriginalList);
    EventBus.on(TRANSFER_LIST_EVENTS.CANCEL, () => console.log('cancel'));
    EventBus.on(TRANSFER_LIST_EVENTS.SAVE, () => console.log('cancel'));
  }

  @Watch('currentTransferList')
  onChangeCurrentTransferList() {
    EventBus.emit(TRANSFER_LIST_EVENTS.CURRENT_LIST, this.currentTransferList);
  }

  getColumnItems(column: 'from' | 'to'): TransferListItem[] {
    return this.currentTransferList.filter(({ selected }) => {
      return column === 'from' ? !selected : selected;
    });
  }

  updateListOnItemsMoved(items) {
    this.currentTransferList = this.currentTransferList.map((item: TransferListItem) => {
      const shouldMove = items.includes(item.value);
      return { ...item, ...(shouldMove && { selected: !item.selected }) };
    });
  }

  updateListOnAllItemsMovedFromColumn(column) {
    let options = this.getColumnItems(column);

    if (column === 'to') {
      options = options.filter(({ locked }) => !locked);
    }

    this.updateListOnItemsMoved(options.map(({ value }) => value));
  }

  updateListOnItemsSorted(list) {
    this.currentTransferList = list;
  }
}
</script>
