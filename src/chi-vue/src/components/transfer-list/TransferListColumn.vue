<template>
  <div class="chi-transfer-list">
    <div class="chi-transfer-list__header">
      <p class="chi-transfer-list__title">
        {{ title }}
        <slot name="chi-transfer-list-title-tooltip"></slot>
      </p>
      <div class="chi-transfer-list__header-actions">
        <slot name="chi-transfer-list-header-actions"></slot>
      </div>
    </div>
    <div class="chi-transfer-list__search">
      <chi-search-input placeholder="Filter" />
    </div>
    <select multiple class="chi-transfer-list__menu">
      <option
        v-for="(item, index) in list"
        :key="index"
        :value="item.name"
        :class="`chi-transfer-list__menu-item ${withCheckbox ? '-checkbox' : null}`">
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
  @Prop() withSearch?: boolean;
  @Prop() withCheckbox?: boolean;
}
</script>
