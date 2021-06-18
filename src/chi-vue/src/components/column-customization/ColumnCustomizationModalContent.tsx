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
  @Prop() selectedLockedColumns?: DataTableColumn[];
  @Prop() selectedStandardColumns?: DataTableColumn[];

  key = 0;
  _availableColumns?: DataTableColumn[] = [];
  _selectedLockedColumns?: DataTableColumn[] = [];
  _selectedStandardColumns?: DataTableColumn[] = [];
  _availableColumnsComponent?: AvailableColumns;
  _selectedColumnsComponent?: SelectedColumns;

  beforeCreate() {
    this._availableColumns = [];
    this._selectedLockedColumns = [];
    this._selectedStandardColumns = [];
  }

  created() {
    this._processData();
  }

  @Watch('availableColumns')
  @Watch('selectedLockedColumns')
  @Watch('selectedStandardColumns')
  _processData() {
    this._availableColumns = copyArrayOfObjects(this.$props.availableColumns);
    this._selectedLockedColumns = copyArrayOfObjects(this.$props.selectedLockedColumns);
    this._selectedStandardColumns = copyArrayOfObjects(this.$props.selectedStandardColumns);
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
      return (
        <button
          onclick={() => action()}
          class={`${BUTTON_CLASSES.BUTTON} ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.FLAT}`}
          aria-label={ariaLabel}>
          <div class={BUTTON_CLASSES.CONTENT}>
            <i class={`${ICON_CLASS} icon-${icon}`} />
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
      this._selectedLockedColumns &&
      this._selectedStandardColumns &&
      this._availableColumns
    ) {
      const newAvailableColumns: DataTableColumn[] = [...this._availableColumns];
      const selectedColumnsComponentSelect = this._selectedColumnsComponent.$refs.select;

      if (selectedColumnsComponentSelect) {
        Array.from((selectedColumnsComponentSelect as HTMLSelectElement).selectedOptions).forEach(
          (option: HTMLOptionElement) => {
            const column = this._selectedStandardColumns?.find(
              (column: DataTableColumn) => column.name === option.value
            );

            if (column) {
              newAvailableColumns.push(column);
              this._selectedStandardColumns = this._selectedStandardColumns?.filter(
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
    if (this._selectedLockedColumns && this._selectedStandardColumns) {
      const eventData = [...this._selectedLockedColumns, ...this._selectedStandardColumns];

      this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, eventData);
    }
  }

  _select() {
    if (
      this._availableColumnsComponent &&
      this._selectedColumnsComponent &&
      this._selectedLockedColumns &&
      this._selectedStandardColumns &&
      this._availableColumns
    ) {
      const newSelectedStandardColumns: DataTableColumn[] = [...this._selectedStandardColumns];
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
        this._selectedStandardColumns = newSelectedStandardColumns;
      }
      this.key += 1;
      this._emitSelectedColumnsChange();
    }
  }

  _move(direction: 'up' | 'down') {
    const columns = this._selectedStandardColumns ? [...this._selectedStandardColumns] : [];

    Array.from((this._selectedColumnsComponent?.$refs.select as HTMLSelectElement).selectedOptions).forEach(
      (option: HTMLOptionElement) => {
        const columnName = option.value;

        option.selected = false;
        if (columnName && columns) {
          const columnData = columns.find(columnData => columnData.name === columnName);

          if (columnData) {
            const index = columns.indexOf(columnData);

            _changeOrder(columns, index, index + (direction === 'up' ? -1 : 1));
          }
        }
      }
    );
    this._selectedStandardColumns = columns;
    this.key += 1;
    this._emitSelectedColumnsChange();
  }

  mounted() {
    const columnCustomizationComponent = findComponent(this, 'ColumnCustomization');

    if (columnCustomizationComponent) {
      (columnCustomizationComponent as ColumnCustomization)._ColumnCustomizationContentComponent = this;
    }
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
            locked-columns={this._selectedLockedColumns}
            standard-columns={this._selectedStandardColumns}
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
