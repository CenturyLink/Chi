<template>
  <div class="chi-transfer-list__column">
    <div class="chi-transfer-list__header">
      <p class="chi-transfer-list__title">
        {{ title }}

        <template v-if="description">
          <chi-button
            :id="`transfer-list-info-popover-${title}`"
            variant="flat"
            type="icon"
            size="xs"
            alternative-text="Info icon"
            @chiClick="toggleInfoPopover"
          >
            <chi-icon icon="circle-info-outline" size="xs" />
          </chi-button>

          <chi-popover
            arrow
            variant="text"
            :id="`transfer-list-popover-${title}`"
            :reference="`#transfer-list-info-popover-${title}`"
          >
            {{ description }}
          </chi-popover>
        </template>
      </p>
      <div class="chi-transfer-list__header-actions">
        <slot name="header-actions"></slot>
      </div>
    </div>
    <div class="chi-transfer-list__search">
      <chi-search-input placeholder="Filter" />
    </div>
    <select multiple class="chi-select chi-transfer-list__menu">
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.name"
        :disabled="isToColumn && item.locked"
        :class="getMenuItemClasses(item)"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import Tooltip from '../tooltip/tooltip';
import { TransferListItem } from '@/constants/types';

@Component({
  components: {
    ChiTooltip: Tooltip,
  },
})
export default class TransferListColumn extends Vue {
  @Prop() title!: string;
  @Prop() type?: 'from' | 'to';
  @Prop() description?: string;
  @Prop() searchInput?: boolean;
  @Prop() checkbox?: boolean;
  @Prop() items!: TransferListItem[];

  isToColumn = this.type === 'to';
  hasLockedItems = this.items?.some(item => item.locked);

  getMenuItemClasses({ locked }: TransferListItem) {
    const classes = ['chi-transfer-list__menu-item'];

    if (this.checkbox) {
      classes.push('-checkbox');
    }

    if (locked && this.isToColumn) {
      classes.push('-locked');
    }

    if (this.checkbox || (this.hasLockedItems && this.isToColumn)) {
      classes.push('-pl--4');
    }

    return classes.join(' ');
  }

  toggleInfoPopover() {
    const popover = document.querySelector(`#transfer-list-popover-${this.title}`) as any;
    popover.toggle();
  }
}
</script>
