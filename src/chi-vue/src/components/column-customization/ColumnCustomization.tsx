import { Component, Prop, Vue } from 'vue-property-decorator';
import { findComponent, copyArrayOfObjects, uuid4 } from '@/utils/utils';
import { BUTTON_CLASSES, DATA_TABLE_CLASSES, ICON_CLASS, PORTAL_CLASS } from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';
import { DataTableColumn, DataTableColumnsData } from '@/constants/types';
import ColumnCustomizationContent from './ColumnCustomizationModalContent';

// eslint-disable-next-line
declare const chi: any;

@Component
export default class ColumnCustomization extends Vue {
  // eslint-disable-next-line
  @Prop() columnsData?: any;

  _columnsData?: DataTableColumnsData;
  _selectedColumns: DataTableColumn[] = [];
  _modalId?: string;

  beforeCreate() {
    this._columnsData = {
      columns: [],
    };
  }

  created() {
    if (this._columnsData) {
      this._columnsData = {
        columns: copyArrayOfObjects(this.$props.columnsData.columns),
      };
    }
    this._modalId = `modal-${uuid4()}`;
  }

  _emitColumnsChanged() {
    this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, this._columnsData);
  }

  _modal() {
    return (
      <div class="chi-backdrop -closed">
        <div class="chi-backdrop__wrapper">
          <section
            id={this._modalId}
            class="chi-modal -portal"
            role="dialog"
            aria-label="Modal description"
            aria-modal="true">
            <header class="chi-modal__header">
              <h2 class="chi-modal__title">Customize columns</h2>
              <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x"></i>
                </div>
              </button>
            </header>
            <div class="chi-modal__content">
              <ColumnCustomizationContent columns-data={this.$props.columnsData.columns} />
            </div>
            <footer class="chi-modal__footer">
              <button class="chi-button" data-dismiss="modal">
                Cancel
              </button>
              <button class="chi-button -primary">Save</button>
            </footer>
          </section>
        </div>
      </div>
    );
  }

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');
    const modalButton = this.$refs.modalButton;

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._columns = this;
    }
    chi.modal(modalButton);
  }

  render() {
    const modalButton = (
      <button
        ref="modalButton"
        data-target={`#${this._modalId}`}
        class={`${BUTTON_CLASSES.BUTTON} ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.FLAT}`}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-table-column-settings`} />
        </div>
      </button>
    );
    const modal = this._modal();

    return (
      <div class={DATA_TABLE_CLASSES.COLUMNS}>
        {modalButton}
        {modal}
      </div>
    );
  }
}
