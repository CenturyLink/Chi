<script lang="ts" setup>
import { DATA_TABLE_CLASSES } from '@/constants/classes';
import ColumnCustomization from '../../components/column-customization/ColumnCustomization';
import { DataTableColumnsData } from '@/constants/types';

const props = defineProps<{
  columnCustomizationBtn?: boolean;
  columnsData?: DataTableColumnsData | {};
}>();
</script>

<template>
  <div :class="DATA_TABLE_CLASSES.TOOLBAR">
    <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__header`">
      <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__start`">
        <slot name="start"></slot>
      </div>
      <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__end`">
        <slot name="end"></slot>
        <ColumnCustomization v-if="columnCustomizationBtn" :columnsData="columnsData" />
      </div>
    </div>
  </div>
</template>
