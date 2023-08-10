<template>
  <div class="chi-data-table__cell-desktop">
    <div class="chi-dropdown">
      <button ref="dropdownTrigger" class="chi-button -icon -flat" aria-label="More options" data-position="left-start">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-dropdown__menu">
        <template v-for="(button, index) in actions">
          <a
            :key="index"
            v-if="showOnDesktop(button.hide)"
            @click="button.onClick(rowData)"
            class="chi-dropdown__menu-item"
          >
            <i :class="`chi-icon -sm -icon--primary ${button.icon}`" aria-hidden="true" />
            {{ button.label }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { DataTableAction, DataTableColumnProps, DataTableVisibilityAction } from '@/constants/types';
import { Prop } from 'vue-property-decorator';

declare const chi: any;

@Component({
  methods: {
    showOnDesktop(value: DataTableVisibilityAction[] = []) {
      return !value.includes(DataTableVisibilityAction.DESKTOP);
    },
  },
})
export default class DesktopActions extends Vue {
  dropdown: any;
  showOnDesktop: any;
  @Prop() actions?: DataTableAction[];
  @Prop() rowData?: DataTableColumnProps;

  mounted() {
    this.dropdown = chi.dropdown(this.$refs.dropdownTrigger);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>
