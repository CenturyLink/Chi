<template>
  <div class="chi-transfer-list__actions">
    <chi-button variant="flat" type="icon">
      <chi-icon icon="chevron-left" />
    </chi-button>

    <chi-button variant="flat" type="icon">
      <chi-icon icon="chevron-right" />
    </chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
@Component({})
export default class TransferListActions extends Vue {}
</script>
