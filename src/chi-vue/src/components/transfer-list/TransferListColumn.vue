<template>
  <div :class="[TRANSFER_LIST_CLASSES.COLUMN]">
    <div :class="[TRANSFER_LIST_CLASSES.HEADER]">
      <p :class="[TRANSFER_LIST_CLASSES.TITLE]">
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
      <div :class="[TRANSFER_LIST_CLASSES.HEADER_ACTIONS]">
        <slot name="header-actions"></slot>
      </div>
    </div>
    <div :class="[TRANSFER_LIST_CLASSES.SEARCH]">
      <SearchInput placeholder="Filter" @chiInput="handleFilter" @chiClean="handleClearFilter" />
    </div>
    <select multiple :class="[SELECT_CLASSES.SELECT, TRANSFER_LIST_CLASSES.MENU]" @change="handleSelectItem">
      <option
        v-for="(item, index) in getFilteredList()"
        :key="index"
        :value="item.value"
        :disabled="isToColumn && item.locked"
        :class="getMenuItemClasses(item)"
        :selected="selectedItems.includes(item.value)"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Prop, Emit } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import { TransferListItem } from '@/constants/types';
import SearchInput from '../search-input/SearchInput';
import { TRANSFER_LIST_EVENTS } from '@/constants/events';
import EventBus from '@/utils/EventBus';
import Tooltip from '../tooltip/tooltip';
import { TRANSFER_LIST_CLASSES, SELECT_CLASSES } from '@/constants/classes';

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

  TRANSFER_LIST_CLASSES = TRANSFER_LIST_CLASSES;
  SELECT_CLASSES = SELECT_CLASSES;

  filter = '';
  isToColumn = this.type === 'to';
  hasLockedItems = this.items?.some((item) => item.locked);
  selectedItems: string[] = [];

  mounted() {
    EventBus.on(TRANSFER_LIST_EVENTS.CLEAR_SELECTION, this.onClearSelection);
  }

  handleFilter(value: string) {
    this.filter = value;
  }

  handleClearFilter() {
    this.filter = '';
  }

  onClearSelection() {
    this.selectedItems = [];
  }

  @Emit(TRANSFER_LIST_EVENTS.ITEMS_SELECTED)
  handleSelectItem(event: Event) {
    const items = Array.from((event.target as HTMLSelectElement).selectedOptions, ({ value }) => value);
    const column = this.type as string;
    this.selectedItems = items;

    EventBus.emit(TRANSFER_LIST_EVENTS.ITEMS_SELECTED, { [column]: items });
  }

  getFilteredList() {
    const filter = this.filter.toLowerCase();
    return this.items?.filter(({ label }) => label.toLowerCase().includes(filter)) || [];
  }

  getMenuItemClasses({ locked }: TransferListItem) {
    const classes = [TRANSFER_LIST_CLASSES.MENU_ITEM];
    const paddingClass = this._getPaddingClass();
    const checkboxClass = this._getCheckboxClass();
    const lockedClass = this._getLockedClass(locked);

    classes.push(paddingClass, checkboxClass, lockedClass);

    return classes.join(' ');
  }

  _getPaddingClass() {
    return this.checkbox || (this.hasLockedItems && this.isToColumn) ? '-pl--4' : '';
  }

  _getCheckboxClass() {
    return this.checkbox ? '-checkbox' : '';
  }

  _getLockedClass(locked: boolean | undefined) {
    return locked && this.isToColumn ? '-locked' : '';
  }

  toggleInfoPopover() {
    const popover = document.querySelector(`#transfer-list-popover-${this.title}`) as any;

    popover.toggle();
  }
}
</script>
