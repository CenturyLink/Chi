<template>
  <span>
    <DesktopActions :actions="actions" :rowData="rowData" />
    <MobileActions :actions="actions" :rowData="rowData" />
  </span>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { DataTableAction, DataTableColumnProps } from '@/constants/types';
import { Prop } from 'vue-property-decorator';

import DesktopActions from './desktop-actions.vue';
import MobileActions from './mobile-actions.vue';

@Component({
  components: {
    DesktopActions,
    MobileActions,
  },
})
export default class DataTableActions extends Vue {
  @Prop() actions?: DataTableAction[];
  @Prop() rowData?: DataTableColumnProps;
}
</script>
