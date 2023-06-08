<template>
  <div :class="[UTILITY_CLASSES.DISPLAY.FLEX]" slot="chi-popover__footer">
    <button
      @click="clear"
      :class="[
        BUTTON_CLASSES.BUTTON,
        BUTTON_CLASSES.FLAT,
        BUTTON_CLASSES.ICON_BUTTON,
        BUTTON_CLASSES.SIZES.XS,
        UTILITY_CLASSES.PADDING.Y[0],
      ]"
      aria-label="Clear all filters"
      :disabled="disabledButtons"
    >
      <div :class="[BUTTON_CLASSES.CONTENT, UTILITY_CLASSES.FLEX.COLUMN, UTILITY_CLASSES.ALIGN_ITEMS.CENTER]">
        <i :class="[ICON_CLASS, 'icon-reset', '-sm--2', UTILITY_CLASSES.MARGIN.RIGHT[0]]" aria-hidden="true"></i>
        <span
          :class="[
            UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE,
            UTILITY_CLASSES.TYPOGRAPHY.COLOR.PRIMARY,
            UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS,
          ]"
          >Clear</span
        >
      </div>
    </button>
    <div :class="[DIVIDER_CLASSES.DIVIDER, DIVIDER_CLASSES.VERTICAL]"></div>
    <chi-button @chiClick="cancel">Cancel</chi-button>
    <chi-button @chiClick="apply" :disabled="disabledButtons" color="primary">Apply</chi-button>
  </div>
</template>

<script lang="ts">
import { Emit, Prop } from 'vue-property-decorator';
import { ADVANCED_FILTER_EVENTS, GENERIC_EVENTS } from '../../constants/events';
import { BUTTON_CLASSES, DIVIDER_CLASSES, ICON_CLASS, UTILITY_CLASSES } from '../../constants/classes';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class AdvancedFiltersPopoverFooter extends Vue {
  @Prop() disabledButtons?: boolean;

  BUTTON_CLASSES = BUTTON_CLASSES;
  DIVIDER_CLASSES = DIVIDER_CLASSES;
  ICON_CLASS = ICON_CLASS;
  UTILITY_CLASSES = UTILITY_CLASSES;

  @Emit(ADVANCED_FILTER_EVENTS.CLEAR)
  clear() {
    // This is intentional
  }

  @Emit(GENERIC_EVENTS.CANCEL)
  cancel() {
    // This is intentional
  }

  @Emit(ADVANCED_FILTER_EVENTS.APPLY)
  apply() {
    // This is intentional
  }
}
</script>
