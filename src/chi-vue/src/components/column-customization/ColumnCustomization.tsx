import { Emit, Prop, Watch } from 'vue-property-decorator';
import { findComponent, uuid4 } from '@/utils/utils';
import {
  BACKDROP_CLASSES,
  BUTTON_CLASSES,
  CLOSED_CLASS,
  DATA_TABLE_CLASSES,
  DIVIDER_CLASSES,
  UTILITY_CLASSES,
  ICON_CLASS,
  MODAL_CLASSES,
} from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';
import { DataTableColumn, DataTableColumnsData } from '@/constants/types';
import ColumnCustomizationContent from './ColumnCustomizationModalContent';
import { checkColumns } from './utils';
import { Component, Vue } from '@/build/vue-wrapper';
import Tooltip from '@/components/tooltip/tooltip';
import EventBus from '@/utils/EventBus';

declare const chi: any;

@Component({})
export default class ColumnCustomization extends Vue {
  @Prop() columnsData!: DataTableColumnsData;

  name = 'ColumnCustomization';

  columnsAvailableColumns?: DataTableColumn[] = [];
  columnsSelectedColumns?: DataTableColumn[] = [];

  key = 0;
  _chiModal: any;
  _ColumnCustomizationContentComponent?: ColumnCustomizationContent;
  _selectedData?: DataTableColumn[];
  _modalId?: string;
  _previousSelected?: DataTableColumn[];
  _resetTooltip?: any;

  @Emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE)
  _emitColumnsChange() {
    EventBus.emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, this._selectedData);

    return this._selectedData;
  }

  _modal() {
    return (
      <div class={`${BACKDROP_CLASSES.BACKDROP} ${CLOSED_CLASS}`}>
        <div class={BACKDROP_CLASSES.WRAPPER}>
          <section
            data-cy="chi-modal"
            id={this._modalId}
            class={`${MODAL_CLASSES.MODAL}`}
            role="dialog"
            aria-label="Customize Columns"
            aria-modal="true"
          >
            <header class={MODAL_CLASSES.HEADER}>
              <h2 class={MODAL_CLASSES.TITLE}>Customize Columns</h2>
              <button
                class={`${BUTTON_CLASSES.BUTTON} -icon -close`}
                onClick={this._cancelColumnsChange}
                aria-label="Close"
              >
                <div class={BUTTON_CLASSES.CONTENT}>
                  <i class={`${ICON_CLASS} icon-x`} aria-hidden="true"></i>
                </div>
              </button>
            </header>
            <div class={MODAL_CLASSES.CONTENT} key={this.key}>
              <ColumnCustomizationContent
                onChiColumnsChange={(ev: DataTableColumn[]) => this._watchContentComponentChanges(ev)}
                available-columns={this.columnsAvailableColumns}
                selected-columns={this.columnsSelectedColumns}
              />
            </div>
            <footer class={MODAL_CLASSES.FOOTER}>
              <button
                ref="resetButton"
                data-tooltip="Reset to default columns and order"
                class={`
                  ${BUTTON_CLASSES.BUTTON}
                  ${BUTTON_CLASSES.ICON_BUTTON}
                  ${BUTTON_CLASSES.FLAT}
                  ${BUTTON_CLASSES.SIZES.XS}
                  ${UTILITY_CLASSES.PADDING.Y[0]}
                  chi-column-customization__reset-button
                `}
                onClick={this._reset}
                disabled
              >
                <div
                  class={`${BUTTON_CLASSES.CONTENT} ${UTILITY_CLASSES.FLEX.COLUMN} ${UTILITY_CLASSES.ALIGN_ITEMS.CENTER}`}
                >
                  <i
                    aria-hidden="true"
                    class={`${ICON_CLASS} icon-reset -sm--2 ${UTILITY_CLASSES.MARGIN.RIGHT[0]}`}
                  ></i>
                  <span
                    class={`${UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE} ${UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS}`}
                  >
                    Reset
                  </span>
                </div>
              </button>
              <div
                class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL} ${UTILITY_CLASSES.MARGIN.RIGHT[2]}`}
              ></div>
              <button class={`${BUTTON_CLASSES.BUTTON}`} onClick={this._cancelColumnsChange}>
                Cancel
              </button>
              <button
                ref="saveButton"
                onClick={this._submitColumnsChange}
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY}`}
                disabled
              >
                Save
              </button>
            </footer>
          </section>
        </div>
      </div>
    );
  }

  _reset() {
    if (this._ColumnCustomizationContentComponent) {
      this.columnsAvailableColumns = [];
      this.columnsSelectedColumns = [];
      this._selectedData = this.columnsData?.columns.filter((column: DataTableColumn) => column.selected);
      this._processData();
      (this.$refs.saveButton as HTMLButtonElement).disabled = false;
      (this.$refs.resetButton as HTMLButtonElement).disabled = true;

      this._resetTooltip?.hide();
      this.key += 1;
    }
  }

  _submitColumnsChange() {
    this._previousSelected = this._selectedData;
    this._emitColumnsChange();
    (this.$refs.saveButton as HTMLButtonElement).disabled = true;
    this._chiModal.hide();
  }

  _cancelColumnsChange() {
    const originalSelectedColumns = this.columnsData?.columns.filter((column) => column.selected);
    const previousSelected = this._previousSelected || (originalSelectedColumns as DataTableColumn[]);
    const selectedNames = previousSelected.map(({ name }) => name);

    if (originalSelectedColumns) {
      (this.$refs.resetButton as HTMLButtonElement).disabled = checkColumns(originalSelectedColumns, previousSelected);
    }

    (this.$refs.saveButton as HTMLButtonElement).disabled = true;
    this._chiModal.hide();
    this.key += 1;

    this._selectedData = previousSelected;
    this.columnsSelectedColumns = previousSelected;
    this.columnsAvailableColumns = this.columnsData?.columns.filter(({ name }) => !selectedNames.includes(name));
  }

  beforeCreate() {
    this.columnsAvailableColumns = [];
    this.columnsSelectedColumns = [];
  }

  created() {
    this._processData();
    this._modalId = `modal-${uuid4()}`;
  }

  @Watch('columnsData')
  _processData() {
    this.columnsData.columns.forEach((column: DataTableColumn) => {
      if (column.selected && this.columnsSelectedColumns) {
        this.columnsSelectedColumns.push(column);
      } else {
        if (this.columnsAvailableColumns) {
          this.columnsAvailableColumns.push(column);
        }
      }
    });
  }

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');
    const modalButton = this.$refs.modalButton;

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._columns = this;
    }

    this._chiModal = chi.modal(modalButton);
  }

  beforeDestroy() {
    this._resetTooltip?.dispose();
  }

  _watchContentComponentChanges(columns: DataTableColumn[]) {
    if (this._ColumnCustomizationContentComponent) {
      const originalSelectedColumns = this.columnsData?.columns.filter((column: DataTableColumn) => column.selected);
      const resetButton = this.$refs.resetButton as HTMLButtonElement;

      if (!this._previousSelected) {
        this._previousSelected = originalSelectedColumns;
      }

      this._selectedData = columns;

      if (this._previousSelected && originalSelectedColumns) {
        (this.$refs.saveButton as HTMLButtonElement).disabled = checkColumns(this._previousSelected, columns);
        resetButton.disabled = checkColumns(originalSelectedColumns, columns);
      }

      this._resetTooltip = chi.tooltip(resetButton);
    }
  }

  render() {
    const modalButton = (
      <button
        ref="modalButton"
        data-cy="chi-modal__trigger"
        data-target={`#${this._modalId}`}
        class={`
          ${BUTTON_CLASSES.BUTTON}
          ${BUTTON_CLASSES.ICON_BUTTON}
          ${BUTTON_CLASSES.FLAT}
          `}
      >
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-table-column-settings`} aria-hidden="true" />
        </div>
      </button>
    );
    const modalTooltip = <Tooltip message="Customize columns">{modalButton}</Tooltip>;
    const modal = this._modal();

    return (
      <div class={DATA_TABLE_CLASSES.COLUMNS}>
        {modalTooltip}
        {modal}
      </div>
    );
  }
}
