<template>
  <footer class="chi-transfer-list__footer">
    <button data-tooltip="Reset to default columns and order" disabled="disabled" class="chi-button -icon -flat -xs">
      <div class="chi-button__content -flex--column -align-items--center">
        <i aria-hidden="true" class="chi-icon icon-reset -sm--2" />
        <span class="-text--uppercase -text--2xs">Reset</span>
      </div>
    </button>
    <button class="chi-button">Cancel</button>
    <button disabled="disabled" class="chi-button -primary">Save</button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
@Component({})
export default class TransferListFooter extends Vue {}
</script>
