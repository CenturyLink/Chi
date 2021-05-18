import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataTableFilter, DataTableFiltersData, DataTableFormElementFilters } from '@/constants/types';
import { findComponent, uuid4 } from '@/utils/utils';
import {
  CHECKBOX_CLASSES,
  DATA_TABLE_CLASSES,
  INPUT_CLASSES,
  PORTAL_CLASS,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { copyArrayOfObjects } from '@/utils/utils';
import { BUTTON_CLASSES } from '@/constants/classes';

Vue.config.ignoredElements = ['chi-popover'];
// This element ignore is necessary as currently chi-popover is not a
// Chi Vue component but a web component loaded from an external source

// eslint-disable-next-line
declare const chi: any;
@Component
export default class DataTableFilters extends Vue {
  @Prop() filtersData?: DataTableFiltersData;

  _advancedFilterUuid?: string;
  _advancedFilterAccordionId?: string;
  _advancedFilterPopoverId?: string;
  // eslint-disable-next-line
  _advancedFiltersAccordion?: any;
  _filtersData?: DataTableFiltersData;

  beforeCreate() {
    this._filtersData = {
      filters: [],
    };
  }

  created() {
    this._advancedFilterUuid = uuid4();
    if (this._filtersData) {
      this._filtersData = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        filters: copyArrayOfObjects(this.$props.filtersData),
      };
    }
    this._validateFiltersData();
  }

  _validateFiltersData() {
    console.log('valid');
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
        class={`chi-form__item ${index !== 0 && !filter.advanced ? '-ml--2' : ''} ${
          !filter.advanced ? 'chi-data-table-filter__select ' : ''
        }`}>
        <select
          aria-label={`Filter by ${filter.label || filter.name}`}
          class="chi-select -lg"
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select', !!filter.advanced)}>
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
          aria-label={`Filter by ${filter.label || filter.name}`}
          class={`${INPUT_CLASSES.INPUT} -lg`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'input', !!filter.advanced)}
          placeholder={filter.placeholder || null}
          type="text"
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter, index: number) {
    return (
      <div class={`chi-form__item ${index !== 0 && !filter.advanced ? 'chi-data-table-filter__input -ml--2' : ''}`}>
        <textarea
          aria-label={`Filter by ${filter.label || filter.name}`}
          data-filter={filter.name}
          class="chi-input -lg"
          placeholder={filter.placeholder || null}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'textarea', !!filter.advanced)}
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
          <input
            id={`toolbar-filter-checkbox__${filter.name}`}
            aria-label={`Filter by ${filter.label || filter.name}`}
            data-filter={filter.name}
            type="checkbox"
            class={CHECKBOX_CLASSES.INPUT}
            checked={filter.checked}
            onChange={(ev: Event) => this._changeFormElementFilter(ev, 'checkbox', !!filter.advanced)}
          />
          <label for={`toolbar-filter-checkbox__${filter.name}`} class={CHECKBOX_CLASSES.LABEL}>
            {filter.name}
          </label>
        </div>
      </div>
    );
  }

  _getElementFilterData(
    ev: Event,
    elementType: DataTableFormElementFilters
  ): { name: string; checked?: boolean; value?: string } | void {
    const element = ev.target as HTMLFormElement;
    const elementDataset = element.dataset;

    if (elementDataset.filter) {
      if (elementType === 'checkbox') {
        const elementChecked = element.checked || false;

        return {
          name: elementDataset.filter,
          checked: elementChecked,
        };
      } else {
        const elementValue = element.value || '';

        return {
          name: elementDataset.filter,
          value: elementValue,
        };
      }
    }
  }

  _updateFilterData(newFilterData: { name: string; value?: string; checked?: boolean }, advanced: boolean) {
    if (this._filtersData && newFilterData) {
      const currentFilterData = this._filtersData.filters.find(
        (filter: DataTableFilter) => filter.name === newFilterData.name
      );

      if (currentFilterData) {
        const valueData = currentFilterData.type === 'checkbox' ? 'checked' : 'value';
        const fallbackValue = currentFilterData.type === 'checkbox' ? false : '';

        if (currentFilterData[valueData] !== newFilterData[valueData]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          currentFilterData[valueData] = newFilterData[valueData] || fallbackValue;

          if (advanced) {
            const originalFilterData = this.$props.filtersData.find(
              (originalFilter: DataTableFilter) => originalFilter.name === newFilterData.name
            );
            const currentValue = currentFilterData[valueData];
            const originalValue = originalFilterData[valueData] || fallbackValue;

            if (currentValue !== originalValue) {
              this._advancedFiltersApplyButtonEnable();
            } else {
              this._advancedFiltersApplyButtonDisable();
            }
          } else {
            this._emitFiltersChanged();
          }
        }
      }
    }
  }

  _changeFormElementFilter(ev: Event, elementType: 'select' | 'input' | 'textarea' | 'checkbox', advanced: boolean) {
    if (ev.target) {
      const newFilterData = this._getElementFilterData(ev, elementType);

      if (newFilterData) {
        this._updateFilterData(newFilterData, advanced);
      }
    }
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
        this._advancedFiltersAccordion = chi.accordion(advancedFiltersAccordion);
      }
    }
  }

  _emitFiltersChanged() {
    this.$emit('chiFiltersChange', this._filtersData);
  }

  _locateAdvancedFiltersApplyButton() {
    return this.$refs.advancedFiltersApplyButton as HTMLButtonElement;
  }

  _advancedFiltersApplyButtonEnable() {
    const applyButton = this._locateAdvancedFiltersApplyButton();

    applyButton.disabled = false;
    applyButton.classList.add('-primary');
  }

  _advancedFiltersApplyButtonDisable() {
    const applyButton = this._locateAdvancedFiltersApplyButton();

    applyButton.disabled = true;
    applyButton.classList.remove('-primary');
  }

  _toggleAdvancedFiltersPopover() {
    if (this._advancedFilterPopoverId) {
      const popover = document.getElementById(this._advancedFilterPopoverId);

      if (popover) {
        // eslint-disable-next-line
        // @ts-ignore
        popover.toggle();
      }
    }
  }

  _applyAdvancedFiltersChange() {
    this._emitFiltersChanged();
    this._advancedFiltersApplyButtonDisable();
    this._toggleAdvancedFiltersPopover();
    this._advancedFiltersAccordion.collapseAll();
  }

  render() {
    const advancedFilterButtonId = `button__${this._advancedFilterUuid}`;
    const advancedFilterPopoverId = `popover__${this._advancedFilterUuid}`;
    const advancedFilterAccordionId = `accordion__${this._advancedFilterUuid}`;
    const standardFilters: JSX.Element[] = [];
    const advancedFilters: JSX.Element[] = [];

    this._advancedFilterAccordionId = advancedFilterPopoverId;
    this._advancedFilterPopoverId = advancedFilterPopoverId;
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
        onclick={() => this._toggleAdvancedFiltersPopover()}
        class={`${BUTTON_CLASSES.BUTTON} -portal -icon -primary -flat`}
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
        title="Filters"
        portal
        drag
        closable>
        <div class="chi-accordion -sm" id={advancedFilterAccordionId}>
          {advancedFilters}
        </div>
        <div class="advanced-filters__actions -mt--2">
          <button
            onclick={() => this._applyAdvancedFiltersChange()}
            class={BUTTON_CLASSES.BUTTON}
            ref="advancedFiltersApplyButton"
            disabled>
            APPLY
          </button>
          <button onclick={() => this._toggleAdvancedFiltersPopover()} class={`${BUTTON_CLASSES.BUTTON} -ml--2`}>
            CANCEL
          </button>
          <button
            class={`${BUTTON_CLASSES.BUTTON} ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON} -primary ${BUTTON_CLASSES.FLAT} -ml--2 -bl--1`}
            aria-label="Button action">
            <div class={BUTTON_CLASSES.CONTENT}>
              <i class="chi-icon icon-reload" />
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
