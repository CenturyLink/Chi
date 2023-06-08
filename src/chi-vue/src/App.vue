<template>
  <div class="-p--4">
    <h1>Chi Vue 3</h1>
    <DataTableClientView />
    <DataTableServerView class="-mt--10" />

    <ExpansionPanelView />
    <PaginationView />
    <DrawerView />
    <TooltipView />
    <SearchInputView />
    <SaveViewView />
    <CheckboxView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import CheckboxView from './views/CheckboxView.vue';
import DataTableClientView from './views/DataTable/ClientSide/DataTableClientView.vue';
import DataTableServerView from './views/DataTable/ServerSide/DataTableServerView.vue';
import DrawerView from './views/DrawerView.vue';
import ExpansionPanelView from './views/ExpansionPanelView.vue';
import PaginationView from './views/PaginationView.vue';
import SaveViewView from './views/SaveView.vue';
import SearchInputView from './views/SearchInputView.vue';
import TooltipView from './views/TooltipView.vue';

@Component({
  components: {
    CheckboxView,
    DataTableClientView,
    DataTableServerView,
    DrawerView,
    ExpansionPanelView,
    PaginationView,
    SaveViewView,
    SearchInputView,
    TooltipView,
  },
})
export default class App extends Vue {}
</script>
