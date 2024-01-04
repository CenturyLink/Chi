<template>
  <div style="width: 50vw">
    <TransferList
      :transferListData="list"
      :config="config"
      @chiTransferListSave="onSaveTransferList"
      @chiTransferListReset="onResetTransferList"
      @chiTransferListChange="onChangeTransferList"
    />
  </div>
</template>

<script lang="ts" setup>
import TransferList from '@/components/transfer-list/TransferList.vue';
import { exampleData } from './fixtures';

const list = exampleData;
const config = {
  searchInput: true,
  checkbox: false,
  columns: {
    from: {
      title: 'From',
      description: 'Description from',
    },
    to: {
      title: 'To',
      description: 'Description to',
    },
  },
};

const onSaveTransferList = (list) => {
  console.log('onSaveTransferList', list);
};

const onResetTransferList = (list) => {
  console.log('onResetTransferList', list);
};

const onChangeTransferList = (list) => {
  console.log('onChangeTransferList', list);
};
</script>
