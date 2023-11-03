<template>
  <div class="transfer-list-column">
    <div class="transfer-list-column-header">
      <p class="transfer-list-column-header__title">
        {{ title }}
        <ChiTooltip message="Your tooltip text">
          <chi-icon icon="circle-info-outline" size="xs" />
        </ChiTooltip>
      </p>
      <div class="transfer-list-column-header__actions">
        <chi-icon icon="atom" size="sm--3" />
        <chi-icon icon="atom" size="sm--3" />
      </div>
    </div>
    <div class="transfer-list-column__search">
      <chi-search-input placeholder="Filter" />
    </div>
    <div class="transfer-list-column__content">
      <div v-for="(item, index) in list" :key="index" class="transfer-list-item">
        <chi-checkbox :id="item.name" :label="item.label" />
      </div>
    </div>
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
