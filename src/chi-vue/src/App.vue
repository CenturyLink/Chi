<template>
  <div class="-p--4">
    <h1>Chi Vue 3</h1>
    <DataTableClientView />
    <DataTableServerView />
    <ExpansionPanelView />
    <PaginationView />
    <DrawerView />
    <TooltipView />
    <SearchInputView />
    <SaveViewView />
    <CheckboxView />
  </div>
</template>

<script lang="ts" setup>
import CheckboxView from './views/CheckboxView.vue';
import DataTableClientView from './views/DataTable/ClientSide/DataTableClientView.vue';
import DataTableServerView from './views/DataTable/ServerSide/DataTableServerView.vue';
import DrawerView from './views/DrawerView.vue';
import ExpansionPanelView from './views/ExpansionPanelView.vue';
import PaginationView from './views/PaginationView.vue';
import SaveViewView from './views/SaveView.vue';
import SearchInputView from './views/SearchInputView.vue';
import TooltipView from './views/TooltipView.vue';
</script>
