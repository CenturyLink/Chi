<template>
  <div :class="TRANSFER_LIST_CLASSES.TRANSFER_LIST">
    <div :class="TRANSFER_LIST_CLASSES.CONTENT">
      <TransferListColumn
        type="from"
        :title="config?.columns?.from?.title || ''"
        :description="config.columns.from.description"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />
      <TransferListActions move="transfer" />
      <TransferListColumn
        type="to"
        :title="config.columns.to.title || ''"
        :description="config.columns.to.description"
        :checkbox="config.checkbox"
        :searchInput="config.searchInput"
      />
      <TransferListActions move="sort" />
    </div>
    <TransferListFooter />
  </div>
</template>

<script lang="ts" setup>
import { TransferListConfig } from '@/constants/types';
import { TRANSFER_LIST_CLASSES } from '@/constants/classes';
import TransferListColumn from './TransferListColumn.vue';
import TransferListActions from './TransferListActions.vue';
import TransferListFooter from './TransferListFooter.vue';

const props = defineProps<{
  config: TransferListConfig;
}>();
</script>
