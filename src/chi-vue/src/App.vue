<template>
  <div id="app">
    <div class="-p--4">
      <DataTableClientView />
      <DataTableServerView />
      <PaginationView />
      <DrawerView />
      <TooltipView />
      <SearchInputView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaginationView from './views/PaginationView.vue';
import DrawerView from './views/DrawerView.vue';
import TooltipView from './views/TooltipView.vue';
import DataTableClientView from './views/DataTable/ClientSide/DataTableClientView.vue';
import DataTableServerView from './views/DataTable/ServerSide/DataTableServerView.vue';
import SearchInputView from './views/SearchInputView.vue';

@Component({
  components: {
    DataTableClientView,
    DataTableServerView,
    DrawerView,
    PaginationView,
    SearchInputView,
    TooltipView,
  },
})
export default class App extends Vue {}
</script>
