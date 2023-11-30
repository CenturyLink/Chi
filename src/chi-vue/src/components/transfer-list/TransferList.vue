<template>
  <div class="chi-transfer-list">
    <div class="chi-transfer-list__content">
      <TransferListColumn
        type="from"
        :title="config.columns.from.title"
        :description="config.columns.from.description"
        :items="listFrom"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />

      <TransferListActions />

      <TransferListColumn
        type="to"
        :title="config.columns.to.title"
        :description="config.columns.to.description"
        :items="listTo"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />
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

  listFrom = this.transferListData.filter(item => !item.selected);
  listTo = this.transferListData.filter(item => item.selected);
}
</script>
