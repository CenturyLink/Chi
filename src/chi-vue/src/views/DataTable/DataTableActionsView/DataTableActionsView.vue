<template>
  <div id="DataTableActionsView">
    <div class="-d--flex -justify-content--between -align-items--baseline">
      <h2>Data Table - Actions View</h2>
    </div>
    <ChiDataTable :data="table" :config="config" ref="dataTableClient" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import DataTable from '@/components/data-table/DataTable';
import { exampleConfig, exampleTableHead, exampleTableBody } from './fixtures';

@Component({
  components: {
    ChiDataTable: DataTable,
  },
  data: () => {
    return {
      config: exampleConfig,
      table: {
        head: exampleTableHead,
        body: exampleTableBody,
      },
    };
  },
})
export default class DataTableActionsView extends Vue {}
</script>
