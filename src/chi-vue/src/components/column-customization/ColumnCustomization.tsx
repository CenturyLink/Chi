import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { findComponent, uuid4 } from '@/utils/utils';
import {
  BACKDROP_CLASSES,
  BUTTON_CLASSES,
  CLOSED_CLASS,
  DATA_TABLE_CLASSES,
  ICON_CLASS,
  MODAL_CLASSES,
  PORTAL_CLASS,
} from '@/constants/classes';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';
import { DataTableColumn, DataTableColumnsData } from '@/constants/types';
import ColumnCustomizationContent from './ColumnCustomizationModalContent';
import { checkColumns } from './utils';

declare const chi: any;

@Component
export default class ColumnCustomization extends Vue {
  @Prop() columnsData?: DataTableColumnsData;

  key = 0;
  _chiModal: any;
  _availableColumns?: DataTableColumn[] = [];
  _selectedLockedColumns?: DataTableColumn[] = [];
  _selectedStandardColumns?: DataTableColumn[] = [];
  _ColumnCustomizationContentComponent?: ColumnCustomizationContent;
  _selectedData?: DataTableColumn[];
  _modalId?: string;

  _modal() {
    return (
      <div class={`${BACKDROP_CLASSES.BACKDROP} ${CLOSED_CLASS}`}>
        <div class={BACKDROP_CLASSES.WRAPPER}>
          <section
            id={this._modalId}
            class={`${MODAL_CLASSES.MODAL} ${PORTAL_CLASS}`}
            role="dialog"
            aria-label="Column Customization"
            aria-modal="true">
            <header class={MODAL_CLASSES.HEADER}>
              <h2 class={MODAL_CLASSES.TITLE}>Customize columns</h2>
              <button class={`${BUTTON_CLASSES.BUTTON} ${ICON_CLASS} -close`} data-dismiss="modal" aria-label="Close">
                <div class={BUTTON_CLASSES.CONTENT}>
                  <i class={`${ICON_CLASS} icon-x`}></i>
                </div>
              </button>
            </header>
            <div class={MODAL_CLASSES.CONTENT} key={this.key}>
              <ColumnCustomizationContent
                available-columns={this._availableColumns}
                selected-locked-columns={this._selectedLockedColumns}
                selected-standard-columns={this._selectedStandardColumns}
              />
            </div>
            <footer class={MODAL_CLASSES.FOOTER}>
              <button
                ref="saveButton"
                onclick={this._submitColumnsChange}
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY} -lg -uppercase -px--4`}
                disabled>
                Save
              </button>
              <button
                ref="resetButton"
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.OUTLINE} ${BUTTON_CLASSES.SIZES.LG} -bg--white -uppercase -px--4`}
                onclick={this._reset}
                disabled>
                Reset
              </button>
              <button
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.OUTLINE} ${BUTTON_CLASSES.SIZES.LG} -bg--white -uppercase -px--4`}
                data-dismiss="modal">
                Cancel
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
      this._selectedLockedColumns = [];
      this._selectedStandardColumns = [];
      this._processData();
      (this.$refs.saveButton as HTMLButtonElement).disabled = true;
      (this.$refs.resetButton as HTMLButtonElement).disabled = true;
      this.key += 1;
    }
  }

  _submitColumnsChange() {
    this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, this._selectedData);
    (this.$refs.saveButton as HTMLButtonElement).disabled = true;
    this._chiModal.hide();
  }

  beforeCreate() {
    this._availableColumns = [];
    this._selectedLockedColumns = [];
    this._selectedStandardColumns = [];
  }

  created() {
    this._processData();
    this._modalId = `modal-${uuid4()}`;
  }

  @Watch('columnsData')
  _processData() {
    this.$props.columnsData.columns.forEach((column: DataTableColumn) => {
      if (column.selected && this._selectedLockedColumns && this._selectedStandardColumns) {
        if (column.locked) {
          this._selectedLockedColumns.push(column);
        } else {
          this._selectedStandardColumns.push(column);
        }
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

        this._selectedData = ev;
        if (originalSelectedColumns) {
          (this.$refs.saveButton as HTMLButtonElement).disabled = checkColumns(originalSelectedColumns, ev);
          (this.$refs.resetButton as HTMLButtonElement).disabled = checkColumns(originalSelectedColumns, ev);
        }
      });
    }
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
