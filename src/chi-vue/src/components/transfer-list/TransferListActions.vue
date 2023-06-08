<template>
  <div :class="[TRANSFER_LIST_CLASSES.ACTIONS]">
    <chi-button v-for="(button, index) in buttons" :key="index" variant="flat" type="icon">
      <chi-icon :icon="button" />
    </chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { TRANSFER_LIST_CLASSES } from '../../constants/classes';

@Component({})
export default class TransferListActions extends Vue {
  TRANSFER_LIST_CLASSES = TRANSFER_LIST_CLASSES;
  buttons: Array<string> = ['chevron-left', 'chevron-right'];
}
</script>
