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
      <chi-search-input placeholder="Filter" />
    </div>
    <select multiple :class="[SELECT_CLASSES.SELECT, TRANSFER_LIST_CLASSES.MENU]">
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.value"
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
import { TransferListItem } from '@/constants/types';
import { SELECT_CLASSES, TRANSFER_LIST_CLASSES } from '@/constants/classes';

@Component({})
export default class TransferListColumn extends Vue {
  @Prop() title!: string;
  @Prop() type?: 'from' | 'to';
  @Prop() description?: string;
  @Prop() searchInput?: boolean;
  @Prop() checkbox?: boolean;
  @Prop() items!: TransferListItem[];

  TRANSFER_LIST_CLASSES = TRANSFER_LIST_CLASSES;
  SELECT_CLASSES = SELECT_CLASSES;

  isToColumn = this.type === 'to';
  hasLockedItems = this.items?.some((item) => item.locked);

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
