<template>
  <div style="width: 50vw">
    <TransferList :transferListData="list" :config="config" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import TransferList from '../components/transfer-list/TransferList.vue';
import list from './__mock__/transferList.json';

@Component({
  components: {
    TransferList,
  },
  data() {
    return {
      list,
      config: {
        searchInput: true,
        checkbox: true,
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
      },
    };
  },
})
export default class TransferListView extends Vue {}
</script>
