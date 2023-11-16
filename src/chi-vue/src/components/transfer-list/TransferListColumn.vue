<template>
  <div class="chi-transfer-list__column">
    <div class="chi-transfer-list__header">
      <p class="chi-transfer-list__title">
        {{ title }}

        <ChiTooltip :message="description" v-if="description">
          <chi-icon icon="circle-info-outline" size="xs" />
        </ChiTooltip>
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
        v-for="(item, index) in list"
        :key="index"
        :value="item.name"
        :disabled="item.locked"
        :class="getMenuItemClasses(item)">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import list from './__mock__/list.json';
import Tooltip from '../tooltip/tooltip';
import { TransferListItem } from './TransferList';
@Component({
  components: {
    ChiTooltip: Tooltip,
  },
  data() {
    return {
      list,
    };
  },
})
export default class TransferListColumn extends Vue {
  @Prop() title!: string;
  @Prop() description?: string;
  @Prop() withSearch?: boolean;
  @Prop() withCheckbox?: boolean;

  getMenuItemClasses({ locked }: TransferListItem) {
    const classes = ['chi-transfer-list__menu-item'];

    if (this.withCheckbox) {
      classes.push('-checkbox');
    }

    if (locked) {
      classes.push('-locked');
    }

    return classes.join(' ');
  }
}
</script>
