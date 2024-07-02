<template>
  <h2>Transfer list</h2>
  <TransferList
    :transferListData="list"
    :config="config"
    @chiTransferListSave="chiTransferListSave"
    @chiTransferListReset="chiTransferListReset"
    @chiTransferListChange="chiTransferListChange"
    @chiTransferListCancel="chiTransferListCancel"
  />

  <h2>Transfer list modal</h2>
  <div class="chi-grid -w--100">
    <div class="chi-col -w--6 -d--flex -flex--column -align-items--center">
      <h3>Column customization config</h3>
      <TransferList
        :transferListData="list"
        modal
        @chiTransferListSave="chiTransferListSave"
        @chiTransferListReset="chiTransferListReset"
        @chiTransferListChange="chiTransferListChange"
        @chiTransferListCancel="chiTransferListCancel"
      />
    </div>
    <div class="chi-col -w--6 -d--flex -flex--column -align-items--center">
      <h3>Custom config</h3>
      <TransferList
        :transferListData="list"
        :config="config"
        :modal
        @chiTransferListSave="chiTransferListSave"
        @chiTransferListReset="chiTransferListReset"
        @chiTransferListChange="chiTransferListChange"
        @chiTransferListCancel="chiTransferListCancel"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TransferList from '@/components/transfer-list/TransferList.vue';
import { exampleData, exampleConfig } from './fixtures';

const list = exampleData;
const config = exampleConfig;
const modal = {
  tooltipMsg: 'Custom tooltip msg',
  icon: 'atom',
  title: 'My awesome title',
  ariaLabel: 'custom aria label',
};

const logEvent = (event?, payload?) => console.log(event, payload);
const chiTransferListSave = (payload) => logEvent('chiTransferListSave', payload);
const chiTransferListReset = (payload) => logEvent('chiTransferListReset', payload);
const chiTransferListChange = (payload) => logEvent('chiTransferListChange', payload);
const chiTransferListCancel = () => logEvent('chiTransferListCancel');
</script>
