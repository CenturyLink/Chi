import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableFilter, DataTableFiltersData, DataTableFormElementFilters } from '@/constants/types';
import { copyArrayOfObjects, findComponent } from '@/utils/utils';
import {
  CHECKBOX_CLASSES,
  DATA_TABLE_CLASSES,
  FORM_CLASSES,
  INPUT_CLASSES,
  SELECT_CLASSES,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { getElementFilterData, updateFilterData } from './FilterUtils';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import AdvancedFilters from './AdvancedFilters';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';

@Component
export default class DataTableFilters extends Vue {
  @Prop() filtersData?: DataTableFiltersData;

  _filtersData?: DataTableFiltersData;
  _advancedFiltersData?: DataTableFilter[];
  _advancedFilterComponent?: AdvancedFilters;

  beforeCreate() {
    this._filtersData = {
      filters: [],
    };
    this._advancedFiltersData = [];
  }

  created() {
    const advancedFilters = this.$props.filtersData.filter((filter: DataTableFilter) => filter.advanced);

    if (this._filtersData) {
      this._filtersData = {
        filters: copyArrayOfObjects(this.$props.filtersData),
      };
    }
    this._advancedFiltersData = copyArrayOfObjects(advancedFilters);
  }

  _createSelectFilter(filter: DataTableFilter, index: number) {
    const options = filter.options?.map(option => {
      return (
        <option value={option.value} selected={filter.value === option.value}>
          {option.label}
        </option>
      );
    });

    return (
      // Todo - class name needs to be updated once the Toolbar HTML blueprint is available
      <div
        class={`
          ${FORM_CLASSES.FORM_ITEM} ${index !== 0 && !filter.advanced ? '-ml--2' : ''}
          ${!filter.advanced ? 'chi-data-table-filter__select ' : ''}`}>
        <select
          aria-label={`Filter by ${filter.label || filter.name}`}
          class={`${SELECT_CLASSES.SELECT} -lg`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select')}>
          {options}
        </select>
      </div>
    );
  }

  _createInputFilter(filter: DataTableFilter, index: number) {
    return (
      <div
        // Todo - class name needs to be updated once the Toolbar HTML blueprint is available
        class={`
          ${FORM_CLASSES.FORM_ITEM}
          ${index !== 0 && !filter.advanced ? 'chi-data-table-filter__input -ml--2' : ''}`}>
        <input
          aria-label={`Filter by ${filter.label || filter.name}`}
          class={`${INPUT_CLASSES.INPUT} -lg`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'input')}
          placeholder={filter.placeholder || null}
          type="text"
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter, index: number) {
    return (
      // Todo - class name needs to be updated once the Toolbar HTML blueprint is available
      <div
        class={`
          ${FORM_CLASSES.FORM_ITEM}
          ${index !== 0 && !filter.advanced ? 'chi-data-table-filter__input -ml--2' : ''}`}>
        <textarea
          aria-label={`Filter by ${filter.label || filter.name}`}
          data-filter={filter.name}
          class={`${INPUT_CLASSES.INPUT} -lg`}
          placeholder={filter.placeholder || null}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'textarea')}
        />
      </div>
    );
  }

  _createCheckboxFilter(filter: DataTableFilter, index: number) {
    return (
      <div
        class={`
          ${FORM_CLASSES.FORM_ITEM}
          ${index !== 0 && !filter.advanced ? '-ml--2' : ''}
          ${UTILITY_CLASSES.DISPLAY.FLEX}
        ${UTILITY_CLASSES.JUSTIFY.CENTER}`}>
        <div class={`${CHECKBOX_CLASSES.checkbox} ${UTILITY_CLASSES.ALIGN_SELF.CENTER}`}>
          <input
            id={`toolbar-filter-checkbox__${filter.name}`}
            aria-label={`Filter by ${filter.label || filter.name}`}
            data-filter={filter.name}
            type="checkbox"
            class={CHECKBOX_CLASSES.INPUT}
            checked={filter.checked}
            onChange={(ev: Event) => this._changeFormElementFilter(ev, 'checkbox')}
          />
          <label for={`toolbar-filter-checkbox__${filter.name}`} class={CHECKBOX_CLASSES.LABEL}>
            {filter.name}
          </label>
        </div>
      </div>
    );
  }

  _changeFormElementFilter(ev: Event, elementType: DataTableFormElementFilters) {
    if (ev.target) {
      const newFilterData = getElementFilterData(ev, elementType);

      if (this._filtersData && newFilterData) {
        updateFilterData(this._filtersData.filters, newFilterData);
        this._emitFiltersChanged();
      }
    }
  }

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._filters = this;
    }
    if (this._advancedFilterComponent) {
      this._advancedFilterComponent.$on(DATA_TABLE_EVENTS.ADVANCED_FILTERS_CHANGE, this._updateAdvancedFilters);
    }
  }

  _updateAdvancedFilters() {
    if (this._advancedFilterComponent) {
      const advancedFilters = this._advancedFilterComponent?.advancedFiltersData;

      if (this._filtersData && advancedFilters) {
        // eslint-disable-next-line
        const advancedFiltersObject = advancedFilters.reduce((filtersObject: any, filter) => {
          filtersObject[filter.name] = { ...filter };
          return filtersObject;
        }, {});

        this._filtersData.filters
          .filter((filter: DataTableFilter) => filter.advanced)
          .forEach((filter: DataTableFilter) => {
            if (filter.name) {
              const { checked, value } = advancedFiltersObject[filter.name];

              if (filter.type === 'checkbox') {
                filter.checked = checked;
              } else {
                filter.value = value;
              }
            }
          });
        this.$emit(DATA_TABLE_EVENTS.FILTERS_CHANGE, this._filtersData);
      }
    }
  }

  _emitFiltersChanged() {
    this.$emit(DATA_TABLE_EVENTS.FILTERS_CHANGE, this._filtersData);
  }

  _advancedFilters() {
    if (this._advancedFiltersData) {
      return <AdvancedFilters filters-data={this._advancedFiltersData} />;
    }
    return null;
  }

  render() {
    const standardFilters: JSX.Element[] = [];
    const advancedFilters = this._advancedFilters();

    this.$props.filtersData.forEach((filter: DataTableFilter, index: number) => {
      const filterElement =
        filter.type === 'select'
          ? this._createSelectFilter(filter, index)
          : filter.type === 'input'
          ? this._createInputFilter(filter, index)
          : filter.type === 'checkbox'
          ? this._createCheckboxFilter(filter, index)
          : filter.type === 'textarea'
          ? this._createTextareaFilter(filter, index)
          : null;

      if (filterElement) {
        if (!filter.advanced) {
          standardFilters.push(filterElement);
        }
      }
    });

    return (
      <div class={DATA_TABLE_CLASSES.FILTERS}>
        {standardFilters}
        {advancedFilters}
      </div>
    );
  }
}
