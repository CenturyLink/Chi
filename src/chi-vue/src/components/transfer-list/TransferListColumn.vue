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
        :selected="isSelected(item.value)"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, Ref } from 'vue';
import { TransferListItem, TransferListColumnItemsActive } from '@/constants/types';
import SearchInput from '@/components/search-input/SearchInput';
import { TRANSFER_LIST_CLASSES, SELECT_CLASSES } from '@/constants/classes';

const props = defineProps<{
  title: string;
  type: 'from' | 'to';
  description?: string;
  searchInput?: boolean;
  checkbox?: boolean;
}>();
const filter = ref<string>('');
const column = props.type;
const isToColumn = props.type === 'to';

const { transferList, selectedItems, onSelectItem } = inject('transferList') as {
  transferList: Ref<TransferListItem[]>;
  selectedItems: Ref<TransferListColumnItemsActive>;
  onSelectItem: (list: TransferListColumnItemsActive) => void;
};

const handleFilter = (value: string) => {
  filter.value = value;
};

const handleClearFilter = () => {
  filter.value = '';
};

const handleSelectItem = (event: Event) => {
  const items = Array.from((event.target as HTMLSelectElement).selectedOptions, ({ value }) => value);

  onSelectItem({ ...selectedItems.value, [column]: items });
};

const getFilteredList = () => {
  const value = filter.value.toLowerCase();
  const items = transferList.value.filter(({ selected }) => (isToColumn ? selected : !selected));

  return items?.filter(({ label }) => label.toLowerCase().includes(value));
};

const isSelected = (value: string) => {
  return selectedItems.value[column].includes(value);
};

const getMenuItemClasses = ({ locked }: TransferListItem) => {
  const classes = [TRANSFER_LIST_CLASSES.MENU_ITEM];
  const paddingClass = _getPaddingClass();
  const checkboxClass = _getCheckboxClass();
  const lockedClass = _getLockedClass(locked);

  classes.push(paddingClass, checkboxClass, lockedClass);

  return classes.join(' ');
};

const _getPaddingClass = () => {
  return props.checkbox || isToColumn ? '-pl--4' : '';
};

const _getCheckboxClass = () => {
  return props.checkbox ? '-checkbox' : '';
};

const _getLockedClass = (locked: boolean | undefined) => {
  return locked && isToColumn ? '-locked' : '';
};

const toggleInfoPopover = () => {
  const popover = document.querySelector(`#transfer-list-popover-${props.title}`) as any;

  popover.toggle();
};
</script>
