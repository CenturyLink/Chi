<template>
  <div class="chi-data-table__cell-mobile -actions">
    <button ref="modalTrigger" class="chi-button -icon -flat chi-modal__trigger" data-target="#modal-actions">
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>

    <div class="chi-backdrop -mobile-bottom -closed">
      <div class="chi-backdrop__wrapper">
        <section id="modal-actions" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
          <header class="chi-modal__header">
            <h2 class="chi-modal__title">Actions</h2>
            <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
              <div class="chi-button__content">
                <i class="chi-icon icon-x" aria-hidden="true"></i>
              </div>
            </button>
          </header>
          <div class="chi-modal__content -p--0">
            <div class="chi-dropdown__menu -active -py--0">
              <template v-for="(button, index) in actions">
                <a
                  :key="index"
                  v-if="showOnMobile(button.hide)"
                  class="chi-dropdown__menu-item -text--lg -text--bold -text--primary -py--4 -bb--1"
                  @click="button.onClick(rowData)"
                >
                  {{ button.label }}
                </a>
              </template>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
.chi-backdrop {
  height: 100vh;
  width: 100vw;
}
.chi .chi-data-table__cell-mobile.-actions .chi-button.-icon.-flat {
  top: 50%;
  transform: translateY(-50%);
}
</style>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { DataTableAction, DataTableColumnProps, DataTableActionItemResponsiveness } from '@/constants/types';
import { Prop } from 'vue-property-decorator';

declare const chi: any;

@Component({
  methods: {
    showOnMobile(value: DataTableActionItemResponsiveness[] = []) {
      return !value.includes(DataTableActionItemResponsiveness.MOBILE);
    },
  },
})
export default class MobileActions extends Vue {
  modalTrigger: any;
  showOnMobile: any;
  @Prop() actions?: DataTableAction[];
  @Prop() rowData?: DataTableColumnProps;

  mounted() {
    this.modalTrigger = chi.modal(this.$refs.modalTrigger);
  }

  beforeDestroy() {
    this.modalTrigger.dispose();
  }
}
</script>
