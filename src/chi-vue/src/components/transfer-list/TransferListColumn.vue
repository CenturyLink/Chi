<template>
  <div :class="TRANSFER_LIST_CLASSES.COLUMN">
    <div :class="TRANSFER_LIST_CLASSES.HEADER">
      <p :class="TRANSFER_LIST_CLASSES.TITLE">
        {{ title }}
        <template v-if="description">
          <chi-button
            :id="`transfer-list-info-popover-${id}`"
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
            position="right"
            :id="`transfer-list-popover-${id}`"
            :reference="`#transfer-list-info-popover-${id}`"
          >
            {{ description }}
          </chi-popover>
        </template>
      </p>
      <div :class="TRANSFER_LIST_CLASSES.HEADER_ACTIONS">
        <slot name="header-actions"></slot>
      </div>
    </div>
    <div :class="TRANSFER_LIST_CLASSES.SEARCH" v-if="searchInput">
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
import { ref, inject } from 'vue';
import { uuid4 } from '@/utils/utils';
import { TransferListItem, TransferListActions } from '@/constants/types';
import { TRANSFER_LIST_CLASSES, SELECT_CLASSES, UTILITY_CLASSES } from '@/constants/classes';
import { CHI_VUE_KEYS } from '@/constants/constants';
import SearchInput from '@/components/search-input/SearchInput';

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
const id = uuid4();
const { currentList, selectedItems, onSelectItem } = inject(CHI_VUE_KEYS.TRANSFER_LIST) as TransferListActions;

const handleFilter = (value: string) => (filter.value = value);

const handleClearFilter = () => (filter.value = '');

const handleSelectItem = (event: Event) => {
  const items = Array.from((event.target as HTMLSelectElement).selectedOptions, ({ value }) => value);

  onSelectItem({ ...selectedItems.value, [column]: items });
};

const getFilteredList = () => {
  const value = filter.value.toLowerCase();
  const items = currentList.value.filter(({ selected }) => (isToColumn ? selected : !selected));

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
  return props.checkbox || isToColumn ? UTILITY_CLASSES.PADDING.LEFT[4] : '';
};

const _getCheckboxClass = () => {
  return props.checkbox ? '-checkbox' : '';
};

const _getLockedClass = (locked: boolean | undefined) => {
  return locked && isToColumn ? '-locked' : '';
};

const toggleInfoPopover = () => {
  const popover = document.querySelector(`#transfer-list-popover-${id}`) as any;

  popover.toggle();
};
</script>
