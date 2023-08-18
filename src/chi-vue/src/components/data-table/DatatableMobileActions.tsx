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
export default class DatatableMobileActions extends Vue {
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

  render() {
    return (
      <div class="chi-data-table__cell-mobile -actions">
        <button
          ref="modalTrigger"
          class="chi-button -icon -flat -centered chi-modal__trigger"
          data-target="#modal-actions">
          <div class="chi-button__content">
            <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
          </div>
        </button>

        <div class="chi-backdrop -mobile-bottom -closed">
          <div class="chi-backdrop__wrapper">
            <section
              id="modal-actions"
              class="chi-modal"
              role="dialog"
              aria-label="Modal description"
              aria-modal="true">
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
                  {this.actions?.map((button, index) => {
                    if (this.showOnMobile(button.hide)) {
                      return (
                        <a
                          key={index}
                          class="chi-dropdown__menu-item -text--lg -text--bold -text--primary -py--4 -bb--1"
                          onClick={() => button.onClick(this.rowData)}>
                          {button.label}
                        </a>
                      );
                    }
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
