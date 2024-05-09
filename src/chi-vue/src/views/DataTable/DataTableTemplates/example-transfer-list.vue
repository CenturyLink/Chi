<template>
  <Tooltip message="Customize Columns">
    <button
      id="modal-transfer-list"
      class="chi-button chi-modal__trigger -icon -flat"
      data-target="#modal-1"
      @click="showModal"
    >
      <div class="chi-button__content">
        <i class="chi-icon icon-table-column-settings" aria-hidden="true"></i>
      </div>
    </button>
  </Tooltip>

  <!-- Modal -->
  <div class="chi-backdrop -closed">
    <div class="chi-backdrop__wrapper">
      <section id="modal-1" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
        <header class="chi-modal__header">
          <h2 class="chi-modal__title">Customize columns</h2>
          <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close" >
            <div class="chi-button__content">
              <i class="chi-icon icon-x" aria-hidden="true"></i>
            </div>
          </button>
        </header>
        <div class="chi-modal__content">
          <TransferList
            :transferListData="list"
            :config="config"
            @chiTransferListSave="saveList"
            @chiTransferListReset="console.log"
            @chiTransferListChange="handleChange"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Tooltip from '../../../components/tooltip/tooltip';
import TransferList from '@/components/transfer-list/TransferList.vue';
import { exampleData, exampleConfig } from '../../TransferList/fixtures';
const list = exampleData;
const config = exampleConfig;

declare const chi: any;

const dropdownTrigger = ref(null);

const showModal = () => {
  chi.modal(document.getElementById('modal-transfer-list')).show();
};

const saveList = () => {
  chi.modal(document.getElementById('modal-transfer-list')).hide();
};

const handleChange = (value) => {};

onMounted(() => {
  chi.dropdown(dropdownTrigger.value);
  chi.modal(document.getElementById('modal-transfer-list'));
});
</script>
