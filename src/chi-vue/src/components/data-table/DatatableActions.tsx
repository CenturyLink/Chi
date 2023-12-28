import { Component, Vue } from '@/build/vue-wrapper';
import { Prop } from 'vue-property-decorator';
import { DataTableAction, DataTableActionItemResponsiveness, DataTableColumnProps } from '@/constants/types';

declare const chi: any;

@Component({})
export default class DataTableActions extends Vue {
  @Prop() actions?: DataTableAction[];
  @Prop() rowData?: DataTableColumnProps;
  @Prop() dataTableNumber!: number;

  dropdown: any;
  modal: any;

  _hideOn(value: DataTableActionItemResponsiveness[] = [], device: DataTableActionItemResponsiveness) {
    return value.includes(device);
  }

  _desktopActions() {
    return (
      <div class="chi-data-table__cell-desktop">
        <div class="chi-dropdown">
          <button
            ref="dropdownTrigger"
            class="chi-button -icon -flat"
            aria-label="More options"
            data-position="left-start"
          >
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
          <div class="chi-dropdown__menu">
            {this.actions?.map((item, index) => {
              if (!this._hideOn(item.hide, DataTableActionItemResponsiveness.DESKTOP)) {
                return (
                  <a key={index} onClick={() => item.onClick(this.rowData)} class="chi-dropdown__menu-item">
                    <i class={`chi-icon -sm -icon--primary ${item.icon}`} aria-hidden="true" />
                    {item.label}
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }

  _mobileActions() {
    return (
      <div class="chi-data-table__cell-mobile -actions">
        <button
          ref="modalTrigger"
          class="chi-button -icon -flat -centered chi-modal__trigger"
          data-target={`#modal-actions-${this.dataTableNumber}`}
        >
          <div class="chi-button__content">
            <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
          </div>
        </button>

        <div class="chi-backdrop -mobile-bottom -closed">
          <div class="chi-backdrop__wrapper">
            <section
              id={`modal-actions-${this.dataTableNumber}`}
              class="chi-modal"
              role="dialog"
              aria-label="Modal description"
              aria-modal="true"
            >
              <header class="chi-modal__header">
                <h2 class="chi-modal__title">Actions</h2>
                <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-x" aria-hidden="true"></i>
                  </div>
                </button>
              </header>
              <div class="chi-modal__content -p--0">
                {this.actions?.map((button, index) => {
                  if (!this._hideOn(button.hide, DataTableActionItemResponsiveness.MOBILE)) {
                    return (
                      <a
                        key={index}
                        class="-d--block -text--lg -text--bold -text--primary -p--3 -bb--1"
                        onClick={() => button.onClick(this.rowData)}
                      >
                        {button.label}
                      </a>
                    );
                  }
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  mounted() {
    if (this.$refs.dropdownTrigger) {
      this.dropdown = chi.dropdown(this.$refs.dropdownTrigger);
    }

    if (this.$refs.modalTrigger) {
      this.modal = chi.modal(this.$refs.modalTrigger);
    }
  }

  beforeDestroy() {
    this.dropdown?.dispose();
    this.modal?.dispose();
  }

  render() {
    return (
      <div>
        {this._desktopActions()}
        {this._mobileActions()}
      </div>
    );
  }
}
