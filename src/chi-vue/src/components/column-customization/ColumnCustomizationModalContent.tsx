import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import SelectedColumns from './SelectedColumns';
import AvailableColumns from './AvailableColumns';
import { DataTableColumn } from '@/constants/types';
import { BUTTON_CLASSES, ICON_CLASS, PORTAL_CLASS, UTILITY_CLASSES } from '@/constants/classes';
import { copyArrayOfObjects, findComponent } from '@/utils/utils';
import ColumnCustomization from '@/components/column-customization/ColumnCustomization';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { _changeOrder } from '@/components/column-customization/utils';

@Component
export default class ColumnCustomizationContent extends Vue {
  @Prop() availableColumns?: DataTableColumn[];
  @Prop() version?: number;
  @Prop() selectedColumns?: DataTableColumn[];

  key = 0;
  _availableColumns?: DataTableColumn[] = [];
  _selectedColumns?: DataTableColumn[] = [];
  _preSelection?: HTMLOptionElement;
  _availableColumnsComponent?: AvailableColumns;
  _selectedColumnsComponent?: SelectedColumns;
  _canMoveColumnLocked = false;

  beforeCreate() {
    this._availableColumns = [];
    this._selectedColumns = [];
  }

  created() {
    this._processData();
  }

  @Watch('availableColumns')
  @Watch('selectedColumns')
  _processData() {
    this._availableColumns = copyArrayOfObjects(this.$props.availableColumns);
    this._selectedColumns = copyArrayOfObjects(this.$props.selectedColumns);
  }

  _controlButton(icon: string, action: Function) {
    const icons = ['chevron-up', 'chevron-down', 'chevron-left', 'chevron-right'];
    const ariaLabel =
      icon === 'chevron-up'
        ? 'Move Up'
        : icon === 'chevron-down'
        ? 'Move Down'
        : icon === 'chevron-left'
        ? 'Deselect'
        : icon === 'chevron-right'
        ? 'select'
        : '';

    if (icons.includes(icon)) {
      let refButton = 'buttonRows';

      if (icon === 'chevron-left') {
        refButton = 'buttonDeselect';
      }

      return (
        <button
          ref={refButton}
          onclick={() => action()}
          class={`
            ${BUTTON_CLASSES.BUTTON}
            ${BUTTON_CLASSES.ICON_BUTTON}
            ${BUTTON_CLASSES.FLAT}
            ${this.$props.version === 4 ? `${BUTTON_CLASSES.PRIMARY} ${PORTAL_CLASS}` : ''}
          `}
          aria-label={ariaLabel}>
          <div class={BUTTON_CLASSES.CONTENT}>
            <i class={`${ICON_CLASS} icon-${icon}`} aria-hidden="true" />
          </div>
        </button>
      );
    }
    return null;
  }

  _deselect() {
    if (
      this._availableColumnsComponent &&
      this._selectedColumnsComponent &&
      this._selectedColumns &&
      this._availableColumns
    ) {
      const newAvailableColumns: DataTableColumn[] = [...this._availableColumns];
      const selectedColumnsComponentSelect = this._selectedColumnsComponent.$refs.select;

      if (selectedColumnsComponentSelect) {
        Array.from((selectedColumnsComponentSelect as HTMLSelectElement).selectedOptions).forEach(
          (option: HTMLOptionElement) => {
            const column = this._selectedColumns?.find((column: DataTableColumn) => column.name === option.value);

            if (column) {
              newAvailableColumns.push(column);
              this._selectedColumns = this._selectedColumns?.filter(
                (oldColumn: DataTableColumn) => column !== oldColumn
              );
            }
          }
        );
        this._availableColumns = newAvailableColumns;
      }
    }
    this.key += 1;
    this._emitSelectedColumnsChange();
  }

  _emitSelectedColumnsChange() {
    if (this._selectedColumns) {
      const eventData = [...this._selectedColumns];

      this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, eventData);
    }
  }

  _select() {
    if (
      this._availableColumnsComponent &&
      this._selectedColumnsComponent &&
      this._selectedColumns &&
      this._availableColumns
    ) {
      const newSelectedStandardColumns: DataTableColumn[] = [...this._selectedColumns];
      const availableColumnsSelect = this._availableColumnsComponent.$refs.select;

      if (availableColumnsSelect) {
        Array.from((availableColumnsSelect as HTMLSelectElement).selectedOptions).forEach(
          (option: HTMLOptionElement) => {
            const column = this._availableColumns?.find((column: DataTableColumn) => column.name === option.value);

            if (column) {
              newSelectedStandardColumns.push(column);
              this._availableColumns = this._availableColumns?.filter(
                (oldColumn: DataTableColumn) => column !== oldColumn
              );
            }
          }
        );
        this._selectedColumns = newSelectedStandardColumns;
      }
      this.key += 1;
      this._emitSelectedColumnsChange();
    }
  }

  _move(direction: 'up' | 'down') {
    const columns = this._selectedColumns ? [...this._selectedColumns] : [];

    Array.from((this._selectedColumnsComponent?.$refs.select as HTMLSelectElement).selectedOptions).forEach(
      (option: HTMLOptionElement) => {
        const columnName = option.value;

        option.selected = false;
        this._preSelection = option;
        if (columnName && columns) {
          const columnData = columns.find(columnData => columnData.name === columnName);

          if (columnData) {
            const index = columns.indexOf(columnData);

            _changeOrder(columns, index, index + (direction === 'up' ? -1 : 1));
          }
        }
      }
    );
    this._selectedColumns = columns;
    this.key += 1;
    this._emitSelectedColumnsChange();
  }

  mounted() {
    const columnCustomizationComponent = findComponent(this, 'ColumnCustomization');

    if (columnCustomizationComponent) {
      (columnCustomizationComponent as ColumnCustomization)._ColumnCustomizationContentComponent = this;
    }
  }

  _handleSelectColumn() {
    const columnsSelected: string[] = [];
    const filterSelectedColumns: DataTableColumn[] = [];

    if (this._selectedColumns) {
      Array.from((this._selectedColumnsComponent?.$refs.select as HTMLSelectElement).selectedOptions).forEach(
        (option: HTMLOptionElement) => {
          columnsSelected.push(option.value);
        }
      );

      columnsSelected.forEach((columnSelected: string) => {
        this._selectedColumns?.forEach((standardColumn: DataTableColumn) => {
          if (columnSelected === standardColumn.name) {
            filterSelectedColumns.push(standardColumn);
          }
        });
      });
    }

    this._canMoveColumnLocked = filterSelectedColumns.some((column: DataTableColumn) => column.locked);
    (this.$refs.buttonDeselect as HTMLButtonElement).disabled = this._canMoveColumnLocked;
  }

  render() {
    const selectButton = this._controlButton('chevron-right', this._select);
    const deselectButton = this._controlButton('chevron-left', this._deselect);
    const moveUpButton = this._controlButton('chevron-up', () => this._move('up'));
    const moveDownButton = this._controlButton('chevron-down', () => this._move('down'));

    return (
      <div class={UTILITY_CLASSES.DISPLAY.FLEX} key={this.key}>
        <div class={UTILITY_CLASSES.FLEX.FLEX_GROW1}>
          <AvailableColumns available-columns={this._availableColumns} />
        </div>
        <div class={`-px--1 ${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.ALIGN_ITEMS.CENTER}`}>
          <div class={`${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.FLEX.COLUMN}`}>
            {selectButton}
            {deselectButton}
          </div>
        </div>
        <div class={UTILITY_CLASSES.FLEX.FLEX_GROW1}>
          <SelectedColumns
            onChiToolbarColumnsSelected={this._handleSelectColumn}
            standard-columns={this._selectedColumns}
          />
        </div>
        <div class={`-px--1 ${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.ALIGN_ITEMS.CENTER}`}>
          <div class={`${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.FLEX.COLUMN}`}>
            {moveUpButton}
            {moveDownButton}
          </div>
        </div>
      </div>
    );
  }
}
