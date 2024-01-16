<script lang="ts" setup>
import { DATA_TABLE_CLASSES } from '@/constants/classes';
</script>

<template>
  <div :class="DATA_TABLE_CLASSES.TOOLBAR">
    <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__header`">
      <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__start`">
        <slot name="start"></slot>
      </div>
      <div :class="`${DATA_TABLE_CLASSES.TOOLBAR}__end`">
        <slot name="end"></slot>
      </div>
    </div>
  </div>
</template>
