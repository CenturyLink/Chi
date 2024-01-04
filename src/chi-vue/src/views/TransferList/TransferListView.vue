<template>
  <div style="width: 50vw">
    <TransferList :transferListData="list" :config="config" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import TransferList from '../../components/transfer-list/TransferList.vue';
import { exampleData } from './fixtures';

@Component({
  components: {
    TransferList,
  },
})
export default class TransferListView extends Vue {
  list = exampleData;
  config = {
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
}
</script>
