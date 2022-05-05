<template>
  <div class="-d--flex" slot="chi-popover__footer">
    <button
      @click="clear"
      class="chi-button -flat -icon -py--0"
      aria-label="Clear all filters"
      :disabled="disabledButtons"
    >
      <div class="chi-button__content -flex--column -align-items--center">
        <i class="chi-icon icon-reset" aria-hidden="true"></i>
        <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
      </div>
    </button>
    <div class="chi-divider -vertical"></div>
    <chi-button @chiClick="cancel">Cancel</chi-button>
    <chi-button @chiClick="apply" :disabled="disabledButtons" color="primary">Apply</chi-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class AdvancedFiltersPopoverFooter extends Vue {
  @Prop() disabledButtons?: boolean;

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
