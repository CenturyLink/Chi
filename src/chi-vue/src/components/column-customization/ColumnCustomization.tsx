import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
import Tooltip from '../tooltip/tooltip';

declare const chi: any;

@Component
export default class ColumnCustomization extends Vue {
  @Prop() columnsData?: DataTableColumnsData;

  key = 0;
  _chiModal: any;
  _availableColumns?: DataTableColumn[] = [];
  _selectedColumns?: DataTableColumn[] = [];
  _ColumnCustomizationContentComponent?: ColumnCustomizationContent;
  _selectedData?: DataTableColumn[];
  _modalId?: string;
  _previousSelected?: DataTableColumn[];

  _modal() {
    return (
      <div class={`${BACKDROP_CLASSES.BACKDROP} ${CLOSED_CLASS}`}>
        <div class={BACKDROP_CLASSES.WRAPPER}>
          <section
            data-cy="chi-modal"
            id={this._modalId}
            class={`${MODAL_CLASSES.MODAL}`}
            role="dialog"
            aria-label="Column Customization"
            aria-modal="true">
            <header class={MODAL_CLASSES.HEADER}>
              <h2 class={MODAL_CLASSES.TITLE}>Customize Columns</h2>
              <button
                class={`${BUTTON_CLASSES.BUTTON} -icon -close`}
                onClick={this._cancelColumnsChange}
                aria-label="Close">
                <div class={BUTTON_CLASSES.CONTENT}>
                  <i class={`${ICON_CLASS} icon-x`} aria-hidden="true"></i>
                </div>
              </button>
            </header>
            <div class={MODAL_CLASSES.CONTENT} key={this.key}>
              <ColumnCustomizationContent
                available-columns={this._availableColumns}
                selected-columns={this._selectedColumns}
              />
            </div>
            <footer class={MODAL_CLASSES.FOOTER}>
              <button
                ref="resetButton"
                class={`
                  ${BUTTON_CLASSES.BUTTON}
                  ${BUTTON_CLASSES.ICON_BUTTON}
                  ${BUTTON_CLASSES.FLAT}
                  ${BUTTON_CLASSES.SIZES.XS}
                  ${UTILITY_CLASSES.PADDING.Y[0]}`}
                onClick={this._reset}
                disabled>
                <div
                  class={`${BUTTON_CLASSES.CONTENT} ${UTILITY_CLASSES.FLEX.COLUMN} ${UTILITY_CLASSES.ALIGN_ITEMS.CENTER}`}>
                  <i
                    aria-hidden="true"
                    class={`${ICON_CLASS} icon-reload -sm--2 ${UTILITY_CLASSES.MARGIN.RIGHT[0]}`}></i>
                  <span
                    class={`${UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE} ${UTILITY_CLASSES.TYPOGRAPHY.COLOR.PRIMARY} ${UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS}`}>
                    Reset
                  </span>
                </div>
              </button>
              <div
                class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL} ${UTILITY_CLASSES.MARGIN.RIGHT[2]}`}></div>
              <button class={`${BUTTON_CLASSES.BUTTON}`} onClick={this._cancelColumnsChange}>
                Cancel
              </button>
              <button
                ref="saveButton"
                onClick={this._submitColumnsChange}
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY}`}
                disabled>
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
      this._availableColumns = [];
      this._selectedColumns = [];
      this._selectedData = this.columnsData?.columns.filter((column: DataTableColumn) => column.selected);
      this._processData();
      (this.$refs.saveButton as HTMLButtonElement).disabled = false;
      (this.$refs.resetButton as HTMLButtonElement).disabled = true;
      this.key += 1;
    }
  }

  _submitColumnsChange() {
    this._previousSelected = this._selectedData;
    this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, this._selectedData);
    (this.$refs.saveButton as HTMLButtonElement).disabled = true;
    this._chiModal.hide();
  }

  _cancelColumnsChange() {
    const originalSelectedColumns = this.columnsData?.columns.filter((column: DataTableColumn) => column.selected);

    if (this._previousSelected) {
      this._selectedData = this._previousSelected;
      this._selectedColumns = this._selectedData;
      this._availableColumns = this._availableColumns?.filter(
        (columnAvailable: DataTableColumn) =>
          !this._selectedColumns?.some(
            (columnSelected: DataTableColumn) => columnAvailable.name === columnSelected.name
          )
      );

      if (originalSelectedColumns) {
        (this.$refs.resetButton as HTMLButtonElement).disabled = checkColumns(
          originalSelectedColumns,
          this._previousSelected
        );
      }
    }

    (this.$refs.saveButton as HTMLButtonElement).disabled = true;
    this._chiModal.hide();
    this.key += 1;
  }

  beforeCreate() {
    this._availableColumns = [];
    this._selectedColumns = [];
  }

  created() {
    this._processData();
    this._modalId = `modal-${uuid4()}`;
  }

  @Watch('columnsData')
  _processData() {
    this.$props.columnsData.columns.forEach((column: DataTableColumn) => {
      if (column.selected && this._selectedColumns) {
        this._selectedColumns.push(column);
      } else {
        if (this._availableColumns) {
          this._availableColumns.push(column);
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
    this._watchContentComponentChanges();
  }

  updated() {
    this._watchContentComponentChanges();
  }

  _watchContentComponentChanges() {
    if (this._ColumnCustomizationContentComponent) {
      this._ColumnCustomizationContentComponent.$on(DATA_TABLE_EVENTS.COLUMNS_CHANGE, (ev: DataTableColumn[]) => {
        const originalSelectedColumns = this.columnsData?.columns.filter((column: DataTableColumn) => column.selected);

        if (!this._previousSelected) {
          this._previousSelected = originalSelectedColumns;
        }

        this._selectedData = ev;
        if (this._previousSelected && originalSelectedColumns) {
          (this.$refs.saveButton as HTMLButtonElement).disabled = checkColumns(this._previousSelected, ev);
          (this.$refs.resetButton as HTMLButtonElement).disabled = checkColumns(originalSelectedColumns, ev);
        }
      });
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
          `}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-table-column-settings`} aria-hidden="true" />
        </div>
      </button>
    );
    const modalTooltip = <Tooltip message="Column Customization">{modalButton}</Tooltip>;
    const modal = this._modal();

    return (
      <div class={DATA_TABLE_CLASSES.COLUMNS}>
        {modalTooltip}
        {modal}
      </div>
    );
  }
}
