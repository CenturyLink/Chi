<template>
  <div class="advanced-filters__actions -d--flex" slot="chi-popover__footer">
    <button
      @click="clear"
      class="chi-button -flat -icon -xs -py--0"
      slot="chi-popover__footer"
      data-tooltip="Clear all filters"
    >
      <div class="chi-button__content -flex--column -align-items--center">
        <i class="chi-icon icon-reset -sm--2 -mr--0"></i
        ><span class="-text--uppercase -text--primary -text--2xs">Clear</span>
      </div>
    </button>
    <div class="chi-divider -vertical" slot="chi-popover__footer"></div>
    <chi-button @chiClick="cancel" slot="chi-popover__footer">Cancel</chi-button>
    <chi-button @chiClick="apply" slot="chi-popover__footer" color="primary">Apply</chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AdvancedFiltersPopoverFooter extends Vue {
  clear() {
    this.$emit('chiFiltersClear');
  }

  cancel() {
    this.$emit('chiFiltersCancel');
  }

  apply() {
    this.$emit('chiFiltersApply');
  }
}
</script>
