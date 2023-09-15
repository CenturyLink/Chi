import { Prop, Watch } from 'vue-property-decorator';
import SelectedColumns from './SelectedColumns';
import AvailableColumns from './AvailableColumns';
import { DataTableColumn, DataTableColumnDefinition } from '@/constants/types';
import { BUTTON_CLASSES, ICON_CLASS, UTILITY_CLASSES } from '@/constants/classes';
import { findComponent } from '@/utils/utils';
import ColumnCustomization from '@/components/column-customization/ColumnCustomization';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { _changeOrder, changeMultiplesColumnIndex, icons } from '@/components/column-customization/utils';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class ColumnCustomizationContent extends Vue {
  @Prop() columnsDefinition?: DataTableColumnDefinition;

  _availableColumnsComponent?: AvailableColumns;
  _selectedColumnsComponent?: SelectedColumns;

  mounted() {
    const columnCustomizationComponent = findComponent(this, 'ColumnCustomization');

    if (columnCustomizationComponent) {
      (columnCustomizationComponent as ColumnCustomization)._ColumnCustomizationContentComponent = this;
    }
  }

  _getAvailableColumns(): DataTableColumn[] {
    return this.$props.columnsDefinition.availables;
  }

  _getSelectedColumn(): DataTableColumn[] {
    return this.$props.columnsDefinition.selecteds;
  }

  _controlButton(icon: keyof typeof icons, action: () => void) {
    const { ariaLabel, ref } = icons[icon];

    return (
      <button
        ref={ref}
        onClick={action}
        class={`
            ${BUTTON_CLASSES.BUTTON}
            ${BUTTON_CLASSES.ICON_BUTTON}
            ${BUTTON_CLASSES.FLAT}
          `}
        aria-label={ariaLabel}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-${icon}`} aria-hidden="true" />
        </div>
      </button>
    );
  }

  _emitColumnsChange(newColumns: DataTableColumnDefinition) {
    this.$emit(DATA_TABLE_EVENTS.COLUMNS_CHANGE, newColumns);
  }

  _getFocusedItems(component: HTMLSelectElement) {
    return Array.from(component?.selectedOptions).map(({ value }) => value);
  }

  _handleDeselectOptions() {
    const focusedOptions = this._getFocusedItems(this._selectedColumnsComponent?.$refs.select as HTMLSelectElement);
    const selectedColumn: DataTableColumn[] = this._getSelectedColumn();

    const { removedItems, updatedColumn } = selectedColumn.reduce(
      (acc: any, column: DataTableColumn) => {
        const shouldRemove = focusedOptions.includes(column.name);

        return shouldRemove
          ? { ...acc, removedItems: [...acc.removedItems, { name: column.name, label: column.label }] }
          : { ...acc, updatedColumn: [...acc.updatedColumn, column] };
      },
      { removedItems: [], updatedColumn: [] }
    );

    this._emitColumnsChange({
      availables: [...this._getAvailableColumns(), ...removedItems],
      selecteds: updatedColumn,
    });
  }

  _handleSelectOptions() {
    const focusedOptions = this._getFocusedItems(this._availableColumnsComponent?.$refs.select as HTMLSelectElement);
    const availableColumn: DataTableColumn[] = this._getAvailableColumns();

    const { removedItems, updatedColumn } = availableColumn.reduce(
      (acc: any, column: DataTableColumn) => {
        const shouldRemove = focusedOptions.includes(column.name);

        return shouldRemove
          ? { ...acc, removedItems: [...acc.removedItems, { ...column, selected: true }] }
          : { ...acc, updatedColumn: [...acc.updatedColumn, column] };
      },
      { removedItems: [], updatedColumn: [] }
    );

    this._emitColumnsChange({
      selecteds: [...this._getSelectedColumn(), ...removedItems],
      availables: updatedColumn,
    });
  }

  _findColumnIndexes(value: string[], columns: DataTableColumn[]) {
    return value.map((name: string) => {
      return columns.findIndex((column: DataTableColumn) => column.name === name);
    });
  }

  _handleMoveOption(direction: 'up' | 'down') {
    const selectedOptions = this._getFocusedItems(this._selectedColumnsComponent?.$refs.select as HTMLSelectElement);

    const columns = this._getSelectedColumn();
    const indexes = this._findColumnIndexes(selectedOptions, columns);
    const newOrder = changeMultiplesColumnIndex(columns, indexes, direction);

    this._emitColumnsChange({
      selecteds: newOrder,
      availables: this._getAvailableColumns(),
    });
  }

  render() {
    const selectButton = this._controlButton('chevron-right', this._handleSelectOptions);
    const deselectButton = this._controlButton('chevron-left', this._handleDeselectOptions);
    const moveUpButton = this._controlButton('chevron-up', () => this._handleMoveOption('up'));
    const moveDownButton = this._controlButton('chevron-down', () => this._handleMoveOption('down'));

    return (
      <div class={UTILITY_CLASSES.DISPLAY.FLEX}>
        <div class={UTILITY_CLASSES.FLEX.FLEX_GROW1}>
          <AvailableColumns available-columns={this.$props.columnsDefinition.availables} />
        </div>
        <div class={`-px--1 ${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.ALIGN_ITEMS.CENTER}`}>
          <div class={`${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.FLEX.COLUMN}`}>
            {selectButton}
            {deselectButton}
          </div>
        </div>
        <div class={UTILITY_CLASSES.FLEX.FLEX_GROW1}>
          <SelectedColumns standard-columns={this.$props.columnsDefinition.selecteds} />
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
