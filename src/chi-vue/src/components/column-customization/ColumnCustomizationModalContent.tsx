import { Emit, Prop, Watch } from 'vue-property-decorator';
import SelectedColumns from './SelectedColumns';
import AvailableColumns from './AvailableColumns';
import { DataTableColumn } from '@/constants/types';
import { BUTTON_CLASSES, ICON_CLASS, UTILITY_CLASSES } from '@/constants/classes';
import { copyArrayOfObjects, findComponent } from '@/utils/utils';
import ColumnCustomization from '@/components/column-customization/ColumnCustomization';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { _changeOrder } from '@/components/column-customization/utils';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class ColumnCustomizationContent extends Vue {
  @Prop() availableColumns!: DataTableColumn[];
  @Prop() selectedColumns!: DataTableColumn[];

  name = 'ColumnCustomizationContent';

  columnsSelected?: DataTableColumn[] = [];
  columnsAvailable?: DataTableColumn[] = [];

  canMoveUp = true;
  canMoveDown = true;
  key = 0;
  _preSelection?: HTMLOptionElement;
  _availableColumnsComponent?: AvailableColumns;
  _selectedColumnsComponent?: SelectedColumns;

  @Emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE)
  _emitSelectedColumnsChange() {
    if (this.columnsSelected) {
      const eventData = [...this.columnsSelected];

      return eventData;
    }
  }

  beforeCreate() {
    this.columnsAvailable = [];
    this.columnsSelected = [];
  }

  created() {
    this._processData();
  }

  @Watch('availableColumns')
  @Watch('selectedColumns')
  _processData() {
    this.columnsAvailable = copyArrayOfObjects(this.availableColumns);
    this.columnsSelected = copyArrayOfObjects(this.selectedColumns).sort(this.sortByLocked);
  }

  sortByLocked = (a: DataTableColumn, b: DataTableColumn): number => {
    if (a.locked && !b.locked) {
      return -1;
    }
    if (b.locked && !a.locked) {
      return 1;
    }
    return 0;
  };

  _controlButton(icon: string, action: () => void) {
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
      } else if (icon === 'chevron-up') {
        refButton = 'buttonMoveUp';
      } else if (icon === 'chevron-down') {
        refButton = 'buttonMoveDown';
      }

      const everyColumnLocked = (this.columnsSelected as DataTableColumn[]).every(
        (column: DataTableColumn) => column.locked
      );

      const isDisabled =
        (icon === 'chevron-up' && !this.canMoveUp) ||
        (icon === 'chevron-down' && !this.canMoveDown) ||
        (icon === 'chevron-right' && this.columnsAvailable?.length === 0) ||
        (icon !== 'chevron-right' && everyColumnLocked);

      return (
        <button
          disabled={isDisabled}
          ref={refButton}
          onClick={action}
          class={`
            ${BUTTON_CLASSES.BUTTON}
            ${BUTTON_CLASSES.ICON_BUTTON}
            ${BUTTON_CLASSES.FLAT}
          `}
          aria-label={ariaLabel}
        >
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
      this.columnsSelected &&
      this.columnsAvailable
    ) {
      const newAvailableColumns: DataTableColumn[] = [...this.columnsAvailable];
      const selectedColumnsComponentSelect = this._selectedColumnsComponent.$refs.select;

      if (selectedColumnsComponentSelect) {
        Array.from((selectedColumnsComponentSelect as HTMLSelectElement).selectedOptions).forEach(
          (option: HTMLOptionElement) => {
            const column = this.columnsSelected?.find((column: DataTableColumn) => column.name === option.value);

            if (column) {
              newAvailableColumns.push(column);
              this.columnsSelected = this.columnsSelected?.filter((oldColumn: DataTableColumn) => column !== oldColumn);
            }
          }
        );
        this.columnsAvailable = newAvailableColumns;
      }
    }
    this.key += 1;
    this.canMoveUp = this.canMoveDown = !!this.columnsSelected?.length;
    this._emitSelectedColumnsChange();
  }

  _select() {
    if (
      this._availableColumnsComponent &&
      this._selectedColumnsComponent &&
      this.columnsSelected &&
      this.columnsAvailable
    ) {
      const newSelectedStandardColumns: DataTableColumn[] = [...this.columnsSelected];
      const availableColumnsSelect = this._availableColumnsComponent.$refs.select;

      if (availableColumnsSelect) {
        Array.from((availableColumnsSelect as HTMLSelectElement).selectedOptions).forEach(
          (option: HTMLOptionElement) => {
            const column = this.columnsAvailable?.find((column: DataTableColumn) => column.name === option.value);

            if (column) {
              newSelectedStandardColumns.push(column);
              this.columnsAvailable = this.columnsAvailable?.filter(
                (oldColumn: DataTableColumn) => column !== oldColumn
              );
            }
          }
        );
        this.columnsSelected = newSelectedStandardColumns;
      }
      this.key += 1;
      this.canMoveUp = this.canMoveDown = !!this.columnsSelected?.length;
      this._emitSelectedColumnsChange();
    }
  }

  _move(direction: 'up' | 'down') {
    const columns = this.columnsSelected ? [...this.columnsSelected] : [];

    Array.from((this._selectedColumnsComponent?.$refs.select as HTMLSelectElement).selectedOptions).forEach(
      (option: HTMLOptionElement) => {
        const columnName = option.value;

        option.selected = false;
        this._preSelection = option;
        if (columnName && columns) {
          const columnData = columns.find((columnData: DataTableColumn) => columnData.name === columnName);

          if (columnData) {
            const index = columns.indexOf(columnData);
            const newIndex = index + (direction === 'up' ? -1 : 1);

            _changeOrder(columns, index, newIndex);

            const lastLockedColumnIndex = this.getLastLockedColumnIndex(columns);

            this.canMoveUp = columnData.wildcard ? newIndex !== 0 : newIndex !== lastLockedColumnIndex + 1;
            this.canMoveDown = newIndex !== columns.length - 1;
          }
        }
      }
    );
    this.columnsSelected = columns;
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

    if (this.columnsSelected) {
      Array.from((this._selectedColumnsComponent?.$refs.select as HTMLSelectElement).selectedOptions).forEach(
        (option: HTMLOptionElement) => {
          columnsSelected.push(option.value);
        }
      );

      columnsSelected.forEach((columnSelected: string) => {
        this.columnsSelected?.forEach((standardColumn: DataTableColumn) => {
          if (columnSelected === standardColumn.name) {
            filterSelectedColumns.push(standardColumn);
          }
        });
      });
    }

    const selectElement = this._selectedColumnsComponent?.$refs.select as HTMLSelectElement;
    const selectedOptionIndex = Array.from(selectElement.options).indexOf(selectElement.selectedOptions[0]);
    const lastLockedColumnIndex = this.getLastLockedColumnIndex(this.columnsSelected as DataTableColumn[]);
    const isSomeWildColumns = filterSelectedColumns.some((column: DataTableColumn) => column.wildcard);
    const buttonMoveUpIsDisabled = isSomeWildColumns
      ? selectedOptionIndex === 0
      : selectedOptionIndex === lastLockedColumnIndex + 1;

    (this.$refs.buttonMoveUp as HTMLButtonElement).disabled = buttonMoveUpIsDisabled;
    (this.$refs.buttonMoveDown as HTMLButtonElement).disabled = selectedOptionIndex === selectElement.length - 1;
  }

  getLastLockedColumnIndex(columns: DataTableColumn[]): number {
    return columns.reduceRight((acc: number, column: DataTableColumn, index: number) => {
      if (column.locked && acc === -1) {
        return index;
      }
      return acc;
    }, -1);
  }

  render() {
    const selectButton = this._controlButton('chevron-right', this._select);
    const deselectButton = this._controlButton('chevron-left', this._deselect);
    const moveUpButton = this._controlButton('chevron-up', () => this._move('up'));
    const moveDownButton = this._controlButton('chevron-down', () => this._move('down'));

    return (
      <div class={UTILITY_CLASSES.DISPLAY.FLEX} key={this.key}>
        <div class={UTILITY_CLASSES.FLEX.FLEX_GROW1}>
          <AvailableColumns available-columns={this.columnsAvailable} />
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
            standard-columns={this.columnsSelected}
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
