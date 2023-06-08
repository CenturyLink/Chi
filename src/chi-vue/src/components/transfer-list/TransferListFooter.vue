<template>
  <footer :class="[TRANSFER_LIST_CLASSES.FOOTER]">
    <button
      :data-tooltip="TOOLTIP_MESSAGE"
      :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.ICON_BUTTON, BUTTON_CLASSES.FLAT, BUTTON_CLASSES.SIZES.XS]"
      disabled
    >
      <div :class="[BUTTON_CLASSES.CONTENT, UTILITY_CLASSES.FLEX.COLUMN, UTILITY_CLASSES.ALIGN_ITEMS.CENTER]">
        <i aria-hidden="true" class="chi-icon icon-reset -sm--2" />
        <span :class="[UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE, UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS]">Reset</span>
      </div>
    </button>
    <button :class="[BUTTON_CLASSES.BUTTON]">Cancel</button>
    <button :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.PRIMARY]" disabled>Save</button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { BUTTON_CLASSES, TRANSFER_LIST_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

@Component({})
export default class TransferListFooter extends Vue {
  TRANSFER_LIST_CLASSES = TRANSFER_LIST_CLASSES;
  BUTTON_CLASSES = BUTTON_CLASSES;
  UTILITY_CLASSES = UTILITY_CLASSES;

  TOOLTIP_MESSAGE = 'Reset to default columns and order';
}
</script>
