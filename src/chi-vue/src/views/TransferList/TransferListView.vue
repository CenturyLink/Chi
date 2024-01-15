<template>
  <h2>Transfer List</h2>
  <TransferList
    :transferListData="list"
    :config="config"
    @chiTransferListSave="console.log"
    @chiTransferListReset="console.log"
    @chiTransferListChange="console.log"
  />
</template>

<script lang="ts" setup>
import TransferList from '@/components/transfer-list/TransferList.vue';
import { exampleData, exampleConfig } from './fixtures';

const list = exampleData;
const config = exampleConfig;
</script>
