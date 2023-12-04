<template>
  <div id="app">
    <div class="-p--4">
      <TransferListView />
      <DataTableClientView />
      <DataTableServerView class="-mt--10" />
      <ExpansionPanelView />
      <PaginationView />
      <DrawerView />
      <TooltipView />
      <SearchInputView />
      <SaveViewView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import ExpansionPanelView from './views/ExpansionPanelView.vue';
import PaginationView from './views/PaginationView.vue';
import DrawerView from './views/DrawerView.vue';
import TooltipView from './views/TooltipView.vue';
import DataTableClientView from './views/DataTable/ClientSide/DataTableClientView.vue';
import DataTableServerView from './views/DataTable/ServerSide/DataTableServerView.vue';
import SearchInputView from './views/SearchInputView.vue';
import SaveViewView from './views/SaveView.vue';
import TransferListView from './views/TransferList.vue';

@Component({
  components: {
    DataTableClientView,
    DataTableServerView,
    DrawerView,
    ExpansionPanelView,
    PaginationView,
    SaveViewView,
    SearchInputView,
    TooltipView,
    TransferListView,
  },
})
export default class App extends Vue {}
</script>
