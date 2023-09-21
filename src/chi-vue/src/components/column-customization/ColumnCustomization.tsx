import { Prop, Watch } from 'vue-property-decorator';
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
import { DataTableColumn, DataTableColumnDefinition, DataTableColumnsData } from '@/constants/types';
import ColumnCustomizationContent from './ColumnCustomizationModalContent';
import { checkColumnsChanged } from './utils';
import Tooltip from '../tooltip/tooltip';
import { Component, Vue } from '@/build/vue-wrapper';

declare const chi: any;

@Component({})
export default class ColumnCustomization extends Vue {
  @Prop() columnsData?: DataTableColumnsData;

  key = 0;
  columnsDefinition?: DataTableColumnDefinition;
  prevColumnsDefinition?: DataTableColumnDefinition;
  originalColumnsDefinition?: DataTableColumnDefinition;

  _chiModal: any;
  _ColumnCustomizationContentComponent?: ColumnCustomizationContent;
  _modalId?: string;

  _resetTooltip?: any;

  /**
   * Hooks
   */
  created() {
    this._processDataOnLoad();
    this._modalId = `modal-${uuid4()}`;
  }

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar') as DataTableToolbar;

    if (dataTableToolbarComponent) {
      dataTableToolbarComponent._columns = this;
    }

    this._chiModal = chi.modal(this.$refs.modalButton);
    this._watchContentComponentChanges();
  }

  updated() {
    this._watchContentComponentChanges();
  }

  beforeDestroy() {
    this._resetTooltip?.dispose();
  }

  /**
   * Private methods
   */
  @Watch('columnsData')
  _processDataOnLoad() {
    const columnDefinition = this.$props.columnsData.columns.reduce(
      (acc: DataTableColumnDefinition, column: DataTableColumn) => {
        return column.selected
          ? { ...acc, selecteds: [...acc.selecteds, column] }
          : { ...acc, availables: [...acc.availables, column] };
      },
      { availables: [], selecteds: [] }
    );

    this.columnsDefinition = columnDefinition;
    this.prevColumnsDefinition = columnDefinition;
    this.originalColumnsDefinition = columnDefinition;
  }

  _getOriginalColumnsDefinition() {
    return this.originalColumnsDefinition;
  }

  _getColumnsDefinition() {
    return this.columnsDefinition;
  }

  _watchContentComponentChanges() {
    if (!this._ColumnCustomizationContentComponent) {
      return;
    }

    this._ColumnCustomizationContentComponent.$on(
      DATA_TABLE_EVENTS.COLUMNS_CHANGE,
      (event: DataTableColumnDefinition) => {
        this.columnsDefinition = event;
        this.key += 1;

        this._updateButtonsState();
      }
    );
  }

  _updateButtonsState() {
    const originalColumns = this._getOriginalColumnsDefinition()?.selecteds as DataTableColumn[];
    const currentColumns = this._getColumnsDefinition()?.selecteds as DataTableColumn[];
    const prevColumnsDefinition = this.prevColumnsDefinition?.selecteds as DataTableColumn[];

    const saveButton = this.$refs.saveButton as HTMLButtonElement;
    const resetButton = this.$refs.resetButton as HTMLButtonElement;

    saveButton.disabled = checkColumnsChanged(prevColumnsDefinition, currentColumns);
    resetButton.disabled = checkColumnsChanged(originalColumns, currentColumns);

    this._resetTooltip = chi.tooltip(resetButton);
  }

  _handleResetColumns() {
    this._processDataOnLoad();

    this._resetTooltip?.hide();
    this._updateButtonsState();
    this.key += 1;
  }

  _handleSubmitColumns() {
    this.prevColumnsDefinition = this._getColumnsDefinition();
    this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, this._getColumnsDefinition());

    this._updateButtonsState();
    this._chiModal.hide();
    this.key += 1;
  }

  _handleCancelChanges() {
    this.columnsDefinition = this.prevColumnsDefinition;
    this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, this.prevColumnsDefinition);

    this._updateButtonsState();
    this._chiModal.hide();
    this.key += 1;
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
            aria-modal="true">
            <header class={MODAL_CLASSES.HEADER}>
              <h2 class={MODAL_CLASSES.TITLE}>Customize Columns</h2>
              <button
                class={`${BUTTON_CLASSES.BUTTON} -icon -close`}
                onClick={this._handleCancelChanges}
                aria-label="Close">
                <div class={BUTTON_CLASSES.CONTENT}>
                  <i class={`${ICON_CLASS} icon-x`} aria-hidden="true"></i>
                </div>
              </button>
            </header>
            <div class={MODAL_CLASSES.CONTENT} key={this.key}>
              <ColumnCustomizationContent columns-definition={this.columnsDefinition} />
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
                  chi-column-customization__reset-button`}
                onClick={this._handleResetColumns}
                disabled>
                <div
                  class={`${BUTTON_CLASSES.CONTENT} ${UTILITY_CLASSES.FLEX.COLUMN} ${UTILITY_CLASSES.ALIGN_ITEMS.CENTER}`}>
                  <i
                    aria-hidden="true"
                    class={`${ICON_CLASS} icon-reset -sm--2 ${UTILITY_CLASSES.MARGIN.RIGHT[0]}`}></i>
                  <span
                    class={`${UTILITY_CLASSES.TYPOGRAPHY.TEXT_UPPERCASE} ${UTILITY_CLASSES.TYPOGRAPHY.SIZE.TWO_XS}`}>
                    Reset
                  </span>
                </div>
              </button>
              <div
                class={`${DIVIDER_CLASSES.DIVIDER} ${DIVIDER_CLASSES.VERTICAL} ${UTILITY_CLASSES.MARGIN.RIGHT[2]}`}></div>
              <button class={`${BUTTON_CLASSES.BUTTON}`} onClick={this._handleCancelChanges}>
                Cancel
              </button>
              <button
                ref="saveButton"
                onClick={this._handleSubmitColumns}
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
