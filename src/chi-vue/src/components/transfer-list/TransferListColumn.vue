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
            @chiClick="toggleInfoPopover">
            <chi-icon icon="circle-info-outline" size="xs" />
          </chi-button>

          <chi-popover
            arrow
            variant="text"
            :id="`transfer-list-popover-${title}`"
            :reference="`#transfer-list-info-popover-${title}`">
            {{ description }}
          </chi-popover>
        </template>
      </p>
      <div class="chi-transfer-list__header-actions">
        <slot name="header-actions"></slot>
      </div>
    </div>
    <div class="chi-transfer-list__search">
      <SearchInput placeholder="Filter" @chiInput="handleFilter" @chiClean="handleClearFilter" />
    </div>
    <select multiple class="chi-select chi-transfer-list__menu" @change="handleSelectItem">
      <option
        v-for="(item, index) in getFilteredList()"
        :key="index"
        :value="item.value"
        :disabled="isToColumn && item.locked"
        :class="getMenuItemClasses(item)">
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
import SearchInput from '../search-input/SearchInput';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import { Event } from '@/utils/event';

@Component({
  components: {
    ChiTooltip: Tooltip,
    SearchInput,
  },
})
export default class TransferListColumn extends Vue {
  @Prop() title!: string;
  @Prop() type?: 'from' | 'to';
  @Prop() description?: string;
  @Prop() searchInput?: boolean;
  @Prop() checkbox?: boolean;
  @Prop() items!: TransferListItem[];

  filter = '';
  isToColumn = this.type === 'to';
  hasLockedItems = this.items?.some((item) => item.locked);

  mounted() {
    window.addEventListener(TRANSFER_LIST_EVENTS.CLEAR_SELECTION, () => {
      const select = this.$el.querySelector('select') as HTMLSelectElement;
      select.selectedIndex = -1;
    });
  }

  handleFilter(value: string) {
    this.filter = value;
  }

  handleClearFilter() {
    this.filter = '';
  }

  handleSelectItem(event: Event) {
    const items = Array.from((event.target as HTMLSelectElement).selectedOptions, (option) => option.value);
    const column = this.type as string;

    const evt = Event(TRANSFER_LIST_EVENTS.ITEMS_SELECTED, { [column]: items });
    window.dispatchEvent(evt);
  }

  getFilteredList() {
    const filter = this.filter.toLowerCase();
    return this.items?.filter(({ label }) => label.toLowerCase().includes(filter)) || [];
  }

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
