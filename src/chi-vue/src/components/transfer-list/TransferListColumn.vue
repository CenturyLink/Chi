<template>
  <div class="transfer-list-column">
    <p class="transfer-list-column__title">{{ title }}</p>
    <div class="transfer-list-column-box">
      <div class="transfer-list-column-box__header">
        <chi-search-input placeholder="Filter" />
      </div>
      <div class="transfer-list-column-box__content">
        <div v-for="(item, index) in list" :key="index" class="transfer-list-column-box__item">
          <chi-checkbox :id="item.name" :label="item.label" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import list from './__mock__/list.json';

@Component({
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
