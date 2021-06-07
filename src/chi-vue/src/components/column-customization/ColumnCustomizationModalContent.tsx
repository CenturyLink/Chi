import { Component, Prop, Vue } from 'vue-property-decorator';
import SelectedColumns from './SelectedColumns';
import AvailableColumns from './AvailableColumns';
import { DataTableColumn } from '@/constants/types';
import { UTILITY_CLASSES } from '@/constants/classes';

@Component
export default class ColumnCustomizationContent extends Vue {
  @Prop() columnsData?: DataTableColumn[];

  _availableColumns?: DataTableColumn[] = [];
  _selectedColumns?: DataTableColumn[] = [];
  _availableColumnsComponent?: AvailableColumns;
  _selectedColumnsComponent?: SelectedColumns;
  _optionsToSelect?: DataTableColumn[] = [];
  _optionsToDeselect?: DataTableColumn[] = [];

  beforeCreate() {
    this._availableColumns = [];
    this._optionsToDeselect = [];
    this._optionsToSelect = [];
    this._selectedColumns = [];
  }

  created() {
    this.$props.columnsData.forEach((column: DataTableColumn) => {
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
    if (this._availableColumnsComponent) {
      (this._availableColumnsComponent as Vue).$on('availableOptionsChange', (options: HTMLOptionElement[]) => {
        this._updateOptionsToSelect(options);
      });
    }

    if (this._selectedColumnsComponent) {
      (this._selectedColumnsComponent as Vue).$on('selectedOptionsChange', (options: HTMLOptionElement[]) => {
        this._updateOptionsToDeSelect(options);
      });
    }
  }

  _controlButton(icon: string, action: Function) {
    const icons = ['chevron-up', 'chevron-down', 'chevron-left', 'chevron-right'];

    if (icons.includes(icon)) {
      return (
        <button onclick={() => action()} class="chi-button -icon -flat" aria-label="Button action">
          <div class="chi-button__content">
            <i class={`chi-icon icon-${icon}`} />
          </div>
        </button>
      );
    }
    return null;
  }

  _deselect() {
    if (this._optionsToDeselect && this._availableColumns) {
      const newAvailableColumns: DataTableColumn[] = [...this._availableColumns];

      this._optionsToDeselect.forEach((column: DataTableColumn) => {
        if (this._selectedColumns && this._availableColumns) {
          newAvailableColumns.push(column);
          this._selectedColumns = this._selectedColumns.filter((oldColumn: DataTableColumn) => column !== oldColumn);
        }
      });
      this._availableColumns = newAvailableColumns;
      this._optionsToDeselect = [];
    }
    this.$forceUpdate();
  }

  _select() {
    if (this._optionsToSelect && this._selectedColumns) {
      const newSelectedColumns: DataTableColumn[] = [...this._selectedColumns];

      this._optionsToSelect.forEach((column: DataTableColumn) => {
        if (this._selectedColumns && this._availableColumns) {
          newSelectedColumns.push(column);
          this._availableColumns = this._availableColumns.filter((oldColumn: DataTableColumn) => column !== oldColumn);
        }
      });
      this._selectedColumns = newSelectedColumns;
      this._optionsToSelect = [];
    }
    this.$forceUpdate();
  }

  _updateOptionsToSelect(selectedOptions: HTMLOptionElement[]) {
    if (this._optionsToSelect) {
      this._optionsToSelect.length = 0;
      selectedOptions.forEach((option: HTMLOptionElement) => {
        const column = this.$props.columnsData.find((column: DataTableColumn) => column.name === option.value);

        if (this._optionsToSelect) {
          this._optionsToSelect.push(column);
        }
      });
    }
  }

  _updateOptionsToDeSelect(options: HTMLOptionElement[]) {
    if (this._optionsToDeselect) {
      this._optionsToDeselect.length = 0;
      options.forEach((option: HTMLOptionElement) => {
        const column = this.$props.columnsData.find((column: DataTableColumn) => column.name === option.value);

        if (this._optionsToDeselect && !column.locked) {
          this._optionsToDeselect.push(column);
        }
      });
    }
  }

  // eslint-disable-next-line
  _changeOrder(arr: any, oldIndex: number, newIndex: number) {
    if (newIndex >= arr.length) {
      let k = newIndex - arr.length + 1;

      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
  }

  _moveUp() {
    const columns = this._selectedColumnsComponent?._standardColumns;

    Array.from((this._selectedColumnsComponent?.$refs.select as HTMLSelectElement).selectedOptions).forEach(
      (option: HTMLOptionElement) => {
        const columnName = option.value;

        option.selected = false;
        if (columnName && columns) {
          const columnData = columns.find(columnData => columnData.name === columnName);

          if (columnData) {
            const index = columns.indexOf(columnData);

            this._changeOrder(columns, index, index - 1);
          }
        }
      }
    );
    this._selectedColumnsComponent?.$forceUpdate();
  }

  render() {
    const selectButton = this._controlButton('chevron-right', this._select);
    const deselectButton = this._controlButton('chevron-left', this._deselect);
    const moveUpButton = this._controlButton('chevron-up', this._moveUp);
    const moveDownButton = this._controlButton('chevron-down', this._select);

    return (
      <div class={UTILITY_CLASSES.DISPLAY.FLEX}>
        <div class="-flex--grow1">
          <AvailableColumns data={this._availableColumns} />
        </div>
        <div class="-px--1 -d--flex -align-items--center">
          <div class="-d--flex -flex--column">
            {selectButton}
            {deselectButton}
          </div>
        </div>
        <div class="-flex--grow1">
          <SelectedColumns data={this._selectedColumns} />
        </div>
        <div class="-px--1 -d--flex -align-items--center">
          <div class={`${UTILITY_CLASSES.DISPLAY.FLEX} -flex--column`}>
            {moveUpButton}
            {moveDownButton}
          </div>
        </div>
      </div>
    );
  }
}
