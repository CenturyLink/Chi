<template>
  <h2>Modal + Data Table</h2>

  <!-- Trigger -->
  <button id="modal-trigger" class="chi-button chi-modal__trigger" data-target="#modal">Open modal</button>

  <!-- Modal -->
  <div class="chi-backdrop -closed">
    <div class="chi-backdrop__wrapper">
      <section id="modal" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
        <header class="chi-modal__header">
          <h2 class="chi-modal__title">Chi Data Table</h2>
          <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
            <div class="chi-button__content">
              <i class="chi-icon icon-x" aria-hidden="true"></i>
            </div>
          </button>
        </header>
        <div class="chi-modal__content">
          <DataTable :config="config" :dataTableData="table" />
        </div>
        <footer class="chi-modal__footer">
          <button class="chi-button" data-dismiss="modal">Cancel</button>
          <button class="chi-button -primary">Save</button>
        </footer>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import DataTable from '../components/data-table/DataTable';

declare const chi: any;

const config = {
  columnResize: true,
  style: {
    portal: true,
    noBorder: false,
    bordered: false,
    hover: false,
    size: 'md',
    striped: true,
  },
  pagination: {
    activePage: 1,
    compact: true,
    firstLast: true,
    pageJumper: false,
  },
  resultsPerPage: 3,
};

const table = {
  head: {
    name: { label: 'Name', key: true, bold: true },
    id: { label: 'ID', key: true },
    lastLogin: { label: 'Last Login' },
  },
  body: [
    {
      id: 'name-1',
      data: ['Name 1', 'name-1', '18 Dec 2020 3:26 p.m.'],
    },
    {
      id: 'name-2',
      data: ['Name 2', 'name-2', '18 Dec 2020 2:38 a.m.'],
    },
    {
      id: 'name-3',
      data: ['Name 3', 'name-3', '5 Nov 2020 10:15 a.m.'],
    },
    {
      id: 'name-4',
      data: ['Name 4', 'name-4', '18 Dec 2020 3:26 p.m.'],
    },
    {
      id: 'name-5',
      data: ['Name 5', 'name-5', '18 Dec 2020 2:38 a.m.'],
    },
    {
      id: 'name-6',
      data: ['Name 6', 'name-6', '5 Nov 2020 10:15 a.m.'],
    },
  ],
};

onMounted(() => {
  chi.modal(document.getElementById('modal-trigger'));
});
</script>
