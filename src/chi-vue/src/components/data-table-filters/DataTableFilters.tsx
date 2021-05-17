import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableFilter, DataTableFiltersData } from '@/constants/types';
import { findComponent, uuid4 } from '@/utils/utils';
import { CHECKBOX_CLASSES, DATA_TABLE_CLASSES, INPUT_CLASSES, UTILITY_CLASSES } from '@/constants/classes';

// eslint-disable-next-line
declare const chi: any;
@Component
export default class DataTableFilters extends Vue {
  @Prop() filtersData?: DataTableFiltersData;

  _advancedFiltersVisible = false;
  _advancedFilterUuid?: string;
  _advancedFilterAccordionId?: string;

  created() {
    this._advancedFilterUuid = uuid4();
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
      <div class={`chi-form__item ${index !== 0 && !filter.advanced ? 'chi-data-table-filter__select -ml--2' : ''}`}>
        <select class="chi-select -lg" onChange={(ev: Event) => this.filtersChange(ev)}>
          <option>{filter.label || filter.name}</option>
          {options}
        </select>
      </div>
    );
  }

  _createInputFilter(filter: DataTableFilter, index: number) {
    return (
      <div class={`chi-form__item ${index !== 0 && !filter.advanced ? 'chi-data-table-filter__input -ml--2' : ''}`}>
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
      <div
        class={`chi-form__item ${index !== 0 && !filter.advanced ? '-ml--2' : ''} -d--flex ${
          UTILITY_CLASSES.JUSTIFY.CENTER
        }`}>
        <div class={`${CHECKBOX_CLASSES.checkbox} ${UTILITY_CLASSES.ALIGN_SELF.CENTER}`}>
          <input type="checkbox" class={CHECKBOX_CLASSES.INPUT} onChange={(ev: Event) => this.filtersChange(ev)} />
          <label class={CHECKBOX_CLASSES.LABEL}>{filter.name}</label>
        </div>
      </div>
    );
  }

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      // eslint-disable-next-line
      // @ts-ignore
      dataTableToolbarComponent._filters = this;
    }
    if (this._advancedFilterAccordionId) {
      const advancedFiltersAccordion = document.getElementById(this._advancedFilterAccordionId);

      if (advancedFiltersAccordion) {
        chi.accordion(advancedFiltersAccordion);
      }
    }
  }

  render() {
    const advancedFilterButtonId = `button__${this._advancedFilterUuid}`;
    const advancedFilterPopoverId = `popover__${this._advancedFilterUuid}`;
    const advancedFilterAccordionId = `accordion__${this._advancedFilterUuid}`;
    const standardFilters: JSX.Element[] = [];
    const advancedFilters: JSX.Element[] = [];

    this._advancedFilterAccordionId = advancedFilterPopoverId;
    function toggleAdvancedFiltersPopover() {
      const popover = document.getElementById(advancedFilterPopoverId);

      if (popover) {
        // eslint-disable-next-line
        // @ts-ignore
        popover.toggle();
      }
    }

    this.$props.filtersData.forEach((filter: DataTableFilter, index: number) => {
      const filterElement =
        filter.type === 'select'
          ? this._createSelectFilter(filter, index)
          : filter.type === 'input'
          ? this._createInputFilter(filter, index)
          : filter.type === 'checkbox'
          ? this._createCheckboxFilter(filter, index)
          : null;

      if (filterElement) {
        if (filter.advanced) {
          const accordionItem = (
            <div class="chi-accordion__item -active">
              <button class="chi-accordion__trigger">
                <i class="chi-icon icon-chevron-down" />
                <div class="chi-accordion__title">{filter.label || filter.name}</div>
              </button>
              <div class="chi-accordion__content">{filterElement}</div>
            </div>
          );
          advancedFilters.push(accordionItem);
        } else {
          standardFilters.push(filterElement);
        }
      }
    });
    const advancedFiltersButton = (
      <button
        id={advancedFilterButtonId}
        onclick={() => toggleAdvancedFiltersPopover()}
        class="chi-button -portal -icon -primary -flat"
        aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-filter" />
        </div>
      </button>
    );
    const advancedFiltersPopover = (
      <chi-popover
        id={advancedFilterPopoverId}
        position="bottom"
        reference={`#${advancedFilterButtonId}`}
        title="Advanced filters"
        portal
        drag
        closable>
        <div class="chi-accordion -portal" id={advancedFilterAccordionId}>
          {advancedFilters}
        </div>
        <div class="advanced-filters__actions -mt--2">
          <chi-button disabled>APPLY</chi-button>
          <chi-button class="-ml--2">CANCEL</chi-button>
          <button class="chi-button -portal -icon -primary -flat -ml--2 -bl--1" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-reload"></i>
            </div>
          </button>
        </div>
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
