import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableFilter, DataTableFiltersData } from '@/constants/types';
import { findComponent } from '@/utils/utils';
import { CHECKBOX_CLASSES, DATA_TABLE_CLASSES, INPUT_CLASSES, UTILITY_CLASSES } from '@/constants/classes';

@Component
export default class DataTableFilters extends Vue {
  @Prop() filtersData?: DataTableFiltersData;

  _advancedFiltersPopoverVisible = false;

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      // eslint-disable-next-line
      // @ts-ignore
      dataTableToolbarComponent._filters = this;
    }
  }

  filtersChange(ev: Event) {
    this.$emit('chiFiltersChange', ev);
  }

  _createSelectFilter(filter: DataTableFilter, index: number) {
    const options = filter.options?.map(option => {
      return (
        <option value={option.value} selected={option.selected}>
          {option.label}
        </option>
      );
    });

    return (
      <div class={`chi-form__item chi-data-table-filter__select ${index !== 0 ? '-ml--2' : ''}`}>
        <select class="chi-select -lg" onChange={(ev: Event) => this.filtersChange(ev)}>
          <option>{filter.label || filter.name}</option>
          {options}
        </select>
      </div>
    );
  }

  _createInputFilter(filter: DataTableFilter, index: number) {
    return (
      <div class={`chi-form__item chi-data-table-filter__input ${index !== 0 ? '-ml--2' : ''}`}>
        <input
          type="text"
          class={`${INPUT_CLASSES.INPUT} -lg`}
          id="example__base"
          placeholder={filter.placeholder || null}
          onChange={(ev: Event) => this.filtersChange(ev)}
        />
      </div>
    );
  }

  _createCheckboxFilter(filter: DataTableFilter, index: number) {
    return (
      <div class={`chi-form__item ${index !== 0 ? '-ml--2' : ''} -d--flex ${UTILITY_CLASSES.JUSTIFY.CENTER}`}>
        <div class={`${CHECKBOX_CLASSES.checkbox} ${UTILITY_CLASSES.ALIGN_SELF.CENTER}`}>
          <input type="checkbox" class={CHECKBOX_CLASSES.INPUT} onChange={(ev: Event) => this.filtersChange(ev)} />
          <label class={CHECKBOX_CLASSES.LABEL}>{filter.name}</label>
        </div>
      </div>
    );
  }

  render() {
    const standardFilters: JSX.Element[] = [];
    const advancedFilters: JSX.Element[] = [];

    this.$props.filtersData.forEach((filter: DataTableFilter, index: number) => {
      if (filter.advanced) {
        console.log(filter);
      } else {
        const filterElement =
          filter.type === 'select'
            ? this._createSelectFilter(filter, index)
            : filter.type === 'input'
            ? this._createInputFilter(filter, index)
            : filter.type === 'checkbox'
            ? this._createCheckboxFilter(filter, index)
            : null;

        if (filterElement) {
          standardFilters.push(filterElement);
        }
      }
    });
    const advancedFiltersButton = (
      <button
        onclick={() => {
          this._advancedFiltersPopoverVisible = !this._advancedFiltersPopoverVisible;
        }}
        class="chi-button -portal -icon -primary -flat"
        aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-filter" />
        </div>
      </button>
    );

    const advancedFiltersPopover = (
      <chi-popover portal drag active={this._advancedFiltersPopoverVisible}>
        {advancedFilters}
      </chi-popover>
    );

    return (
      <div class={DATA_TABLE_CLASSES.FILTERS}>
        {standardFilters}
        {advancedFiltersButton}
        {advancedFiltersPopover}
      </div>
    );
  }
}
