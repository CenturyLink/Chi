<template>
  <div class="chi-transfer-list">
    <div class="chi-transfer-list__content">
      <TransferListColumn
        type="from"
        :title="config.columns.from.title"
        :description="config.columns.from.description"
        :list="listFrom"
        :withCheckbox="config.withCheckbox"
        :withSearch="config.withSearch"
      />

      <TransferListActions />

      <TransferListColumn
        type="to"
        :title="config.columns.to.title"
        :description="config.columns.to.description"
        :list="listTo"
        :withCheckbox="config.withCheckbox"
        :withSearch="config.withSearch"
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
import Tooltip from '../tooltip/tooltip';
import { TransferListConfig, TransferListItem } from '@/constants/types';

@Component({
  components: {
    TransferListColumn,
    TransferListActions,
    TransferListFooter,
    ChiTooltip: Tooltip,
  },
})
export default class TransferList extends Vue {
  @Prop() data!: TransferListItem[];
  @Prop() config!: TransferListConfig;

  listFrom = this.data.filter(item => !item.selected);
  listTo = this.data.filter(item => item.selected);
}
</script>
