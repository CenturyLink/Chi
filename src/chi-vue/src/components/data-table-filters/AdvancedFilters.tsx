import { Component, Prop, Vue } from 'vue-property-decorator';
import { copyArrayOfObjects, findComponent, uuid4 } from '@/utils/utils';
import { DataTableFilter, DataTableFormElementFilters } from '@/constants/types';
import {
  ACCORDION_CLASSES,
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  FORM_CLASSES,
  ICON_CLASS,
  INPUT_CLASSES,
  PORTAL_CLASS,
  SELECT_CLASSES,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { compareFilters, getElementFilterData, updateFilterData } from '@/components/data-table-filters/FilterUtils';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';

Vue.config.ignoredElements = ['chi-popover'];
// This element ignore is necessary as currently chi-popover is not a
// Chi Vue component but a web component loaded from an external source

// eslint-disable-next-line
declare const chi: any;
@Component
export default class AdvancedFilters extends Vue {
  @Prop() filtersData?: DataTableFilter[];

  advancedFiltersData?: DataTableFilter[] = [];
  _advancedFilterUuid?: string;
  _advancedFilterButtonId?: string;
  _advancedFilterPopoverId?: string;
  _advancedFilterAccordionId?: string;
  // eslint-disable-next-line
  _advancedFiltersAccordion?: any;

  created() {
    this.advancedFiltersData = copyArrayOfObjects(this.$props.filtersData);
    this._advancedFilterUuid = uuid4();
    this._advancedFilterButtonId = `button__${this._advancedFilterUuid}`;
    this._advancedFilterPopoverId = `popover__${this._advancedFilterUuid}`;
    this._advancedFilterAccordionId = `accordion__${this._advancedFilterUuid}`;
  }

  _changeFormElementFilter(ev: Event, elementType: DataTableFormElementFilters) {
    if (ev.target) {
      const newFilterData: { name: string; checked?: boolean; value?: string } | null = getElementFilterData(
        ev,
        elementType
      );

      if (newFilterData && this.advancedFiltersData) {
        updateFilterData(this.advancedFiltersData, newFilterData);
      }
    }
  }

  _calculateFilterId(filterName: string) {
    return `${this._advancedFilterPopoverId}_${filterName}`;
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
      <div
        id={this._calculateFilterId(filter.name)}
        class={`${FORM_CLASSES.FORM_ITEM} ${index !== 0 && !filter.advanced ? '-ml--2' : ''} ${
          // Todo
          !filter.advanced ? 'chi-data-table-filter__select ' : ''
        }`}>
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
        id={this._calculateFilterId(filter.name)}
        // Todo
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
          value={filter.value || ''}
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter, index: number) {
    return (
      // Todo
      <div
        class={`${FORM_CLASSES.FORM_ITEM} ${
          index !== 0 && !filter.advanced ? 'chi-data-table-filter__input -ml--2' : ''
        }`}>
        <textarea
          id={this._calculateFilterId(filter.name)}
          aria-label={`Filter by ${filter.label || filter.name}`}
          data-filter={filter.name}
          class={`${INPUT_CLASSES.INPUT} -lg`}
          placeholder={filter.placeholder || null}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'textarea')}
          value={filter.value || ''}
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

  _emitAdvancedFiltersChange() {
    this.$emit(DATA_TABLE_EVENTS.ADVANCED_FILTERS_CHANGE);
  }

  _applyAdvancedFiltersChange() {
    this._emitAdvancedFiltersChange();
    this._toggleAdvancedFiltersPopover();
    this._advancedFiltersAccordion.collapseAll();
  }

  _toggleAdvancedFiltersPopover() {
    if (this._advancedFilterPopoverId) {
      const popover = this.$refs.popover;

      if (popover) {
        // eslint-disable-next-line
        // @ts-ignore
        popover.toggle();
      }
    }
  }

  _resetAdvancedFilters() {
    this.advancedFiltersData = copyArrayOfObjects(this.$props.filtersData);
    this._advancedFiltersAccordion.collapseAll();
  }

  mounted() {
    const dataTableFiltersComponent = findComponent(this, 'DataTableFilters');

    if (this._advancedFilterAccordionId) {
      const advancedFiltersAccordion = this.$refs.advancedFiltersAccordion;

      if (advancedFiltersAccordion) {
        this._advancedFiltersAccordion = chi.accordion(advancedFiltersAccordion);
      }
    }

    if (dataTableFiltersComponent) {
      (dataTableFiltersComponent as DataTableFilters)._advancedFilterComponent = this;
    }
  }

  render() {
    const advancedFilters: JSX.Element[] = [];
    this.advancedFiltersData &&
      this.advancedFiltersData.forEach((filter: DataTableFilter, index: number) => {
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
          const accordionItem = (
            <div class={ACCORDION_CLASSES.ITEM}>
              <button class={ACCORDION_CLASSES.TRIGGER}>
                <i class={`${ICON_CLASS} icon-chevron-down`} />
                <div class={`${ACCORDION_CLASSES.TITLE}`}>{filter.label || filter.name}</div>
              </button>
              <div class={ACCORDION_CLASSES.CONTENT}>{filterElement}</div>
            </div>
          );
          advancedFilters.push(accordionItem);
        }
      });
    const advancedFiltersButton = (
      <button
        id={this._advancedFilterButtonId}
        onclick={() => this._toggleAdvancedFiltersPopover()}
        class={`${BUTTON_CLASSES.BUTTON} ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.FLAT}`}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-filter`} />
        </div>
      </button>
    );
    const advancedFiltersPopover = (
      <chi-popover
        ref="popover"
        position="bottom"
        reference={`#${this._advancedFilterButtonId}`}
        title="Filters"
        portal
        drag
        closable>
        <div class={`${ACCORDION_CLASSES.ACCORDION} -sm`} ref="advancedFiltersAccordion">
          {advancedFilters}
        </div>
        <div class={`advanced-filters__actions -mt--2`}>
          <button
            onclick={() => this._applyAdvancedFiltersChange()}
            class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY}`}
            ref="advancedFiltersApplyButton"
            disabled={
              this.advancedFiltersData &&
              compareFilters &&
              compareFilters(this.$props.filtersData, this.advancedFiltersData)
            }>
            APPLY
          </button>
          <button onclick={() => this._toggleAdvancedFiltersPopover()} class={`${BUTTON_CLASSES.BUTTON} -ml--2`}>
            CANCEL
          </button>
          <button
            class={`
              ${BUTTON_CLASSES.BUTTON}
              ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON}
              ${BUTTON_CLASSES.PRIMARY}
              ${BUTTON_CLASSES.FLAT} -ml--2 -bl--1`}
            aria-label="Reset advanced filters"
            onclick={() => this._resetAdvancedFilters()}>
            <div class={BUTTON_CLASSES.CONTENT}>
              <i class={`${ICON_CLASS} icon-reload`} />
            </div>
          </button>
        </div>
      </chi-popover>
    );

    return (
      <div>
        {advancedFiltersButton}
        {advancedFiltersPopover}
      </div>
    );
  }
}
