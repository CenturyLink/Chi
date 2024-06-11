import {
  ACCORDION_CLASSES,
  BUTTON_CLASSES,
  ICON_CLASS,
  CHECKBOX_CLASSES,
  FORM_CLASSES,
  INPUT_CLASSES,
  SELECT_CLASSES,
  UTILITY_CLASSES,
  GENERIC_SIZE_CLASSES,
} from '@/constants/classes';
import { DataTableCustomItem, DataTableFilter, DataTableFormElementFilters } from '@/constants/types';
import { Emit, Prop } from 'vue-property-decorator';
import { getElementFilterData, updateFilterData } from './FilterUtils';
import { findComponent, uuid4 } from '@/utils/utils';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import { useFilterStore } from '@/store/index';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import AdvancedFiltersPopoverFooter from './AdvancedFiltersPopoverFooter.vue';
import { Component, Vue } from '@/build/vue-wrapper';
import { Compare } from '@/utils/Compare';
import { JSX } from 'vue/jsx-runtime';

declare const chi: any;

@Component({
  components: {
    AdvancedFiltersPopoverFooter,
  },
})
export default class AdvancedFilters extends Vue {
  @Prop() advancedFiltersData?: DataTableFilter[];
  @Prop() popoverFilterID?: string;
  @Prop() filterUniqueID?: string;
  @Prop() mobile?: boolean;
  @Prop() customItems?: DataTableCustomItem[];

  _advancedFiltersAccordion?: any;
  _advancedFilterAccordionId?: string;
  _advancedFilterUuid?: string;
  _advancedFilterButtonId?: string;
  _advancedFilterPopoverId?: string;
  storeModule?: any;
  isExpanded = false;
  _filtersTooltip?: any;

  get filterElementValue() {
    return this.storeModule.filterConfig;
  }

  get filterElementValueLive() {
    return this.storeModule.filterConfigLive;
  }

  created() {
    this._advancedFilterAccordionId = `accordion__${this.filterUniqueID}`;
    this._advancedFilterUuid = uuid4();
    this._advancedFilterButtonId = `button__${this._advancedFilterUuid}`;
    this._advancedFilterPopoverId = `popover__${this._advancedFilterUuid}`;

    if (!this.storeModule) {
      this.storeModule = useFilterStore();
    }
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

    if (!this._filtersTooltip && this.$refs.filtersButton) {
      this._filtersTooltip = chi.tooltip(this.$refs.filtersButton as HTMLElement);
    }
  }

  _calculateFilterId(filterName: string) {
    return `${this.popoverFilterID}_${filterName}`;
  }

  _createSelectFilter(filter: DataTableFilter) {
    const options = filter.options?.map((option) => {
      return (
        <option value={option.value} selected={filter.value === option.value}>
          {option.label}
        </option>
      );
    });

    return (
      <div
        id={
          !this.mobile
            ? `${this._calculateFilterId(filter.name)}-desktop`
            : `${this._calculateFilterId(filter.name)}-mobile`
        }
        class={`${FORM_CLASSES.FORM_ITEM}`}
      >
        {this.mobile && (
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <select
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          value={this.filterElementValueLive[filter.id]}
          class={`${SELECT_CLASSES.SELECT} ${this.mobile ? UTILITY_CLASSES.MARGIN.BOTTOM[1] : ''}`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select')}
        >
          {options}
        </select>
      </div>
    );
  }

  _changeFormElementFilter(ev: Event, elementType: DataTableFormElementFilters) {
    if (ev.target) {
      const newFilterData: {
        name: string;
        checked?: boolean;
        value?: string;
        id: string;
      } | null = getElementFilterData(ev, elementType);
      const filterPayload = {
        id: newFilterData?.id.replace(/-desktop|-mobile/gi, '') || 'no-id',
        value: elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
      };

      this.storeModule.updateFilterConfigLive(filterPayload);
    }
  }

  _createInputFilter(filter: DataTableFilter) {
    return (
      <div
        id={
          !this.mobile
            ? `${this._calculateFilterId(filter.name)}-desktop`
            : `${this._calculateFilterId(filter.name)}-mobile`
        }
        class={`
              ${FORM_CLASSES.FORM_ITEM}`}
      >
        {this.mobile && (
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <input
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          class={`${INPUT_CLASSES.INPUT} ${this.mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'input')}
          placeholder={filter.placeholder || ''}
          type="text"
          value={this.filterElementValueLive[filter.id]}
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter) {
    return (
      <div class={`${FORM_CLASSES.FORM_ITEM}`}>
        {this.mobile && (
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <textarea
          id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          value={this.filterElementValueLive[filter.id]}
          aria-label={`Filter by ${filter.label || filter.name}`}
          data-filter={filter.name}
          class={`${INPUT_CLASSES.INPUT} ${this.mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}
          placeholder={filter.placeholder || ''}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'textarea')}
        />
      </div>
    );
  }

  _getCheckbox(id: string, label: string, filterName: string) {
    return (
      <div
        class={[
          CHECKBOX_CLASSES.CHECKBOX,
          this.mobile
            ? `${UTILITY_CLASSES.ALIGN_SELF.LEFT} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}`
            : UTILITY_CLASSES.ALIGN_SELF.LEFT,
        ]}
      >
        <input
          id={this.mobile ? `${id}-mobile` : `${id}-desktop`}
          aria-label={`Filter by ${label || filterName}`}
          data-filter={filterName}
          type="checkbox"
          class={`${CHECKBOX_CLASSES.INPUT} ${this.mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}
          checked={this.filterElementValueLive[id]}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'checkbox')}
        />
        <label for={this.mobile ? `${id}-mobile` : `${id}-desktop`} class={CHECKBOX_CLASSES.LABEL}>
          {label}
        </label>
      </div>
    );
  }

  _createCheckboxFilter(filter: DataTableFilter) {
    const checkboxes = filter.options?.map((checkbox, index) =>
      this._getCheckbox(`${filter.id}-option-${index}`, checkbox.label, filter.name)
    );

    const defaultCheckbox = this._getCheckbox(filter.id, filter.label, filter.name);

    return (
      <div
        class={`
              ${FORM_CLASSES.FORM_ITEM}
              ${UTILITY_CLASSES.DISPLAY.FLEX}
              ${UTILITY_CLASSES.FLEX.ALIGN.START}`}
      >
        {filter.options ? checkboxes : defaultCheckbox}
      </div>
    );
  }

  beforeUnmount() {
    this._filtersTooltip?.dispose();
  }

  _createCustomItem(filter: DataTableCustomItem) {
    const slot = this.$slots[filter.template];
    const customItemSlot = slot ? slot({}) : null;

    return (
      <div class={`${FORM_CLASSES.FORM_ITEM}`}>
        {this.mobile && (
          <label
            for={this.mobile ? `${filter.template}-mobile` : `${filter.template}-desktop`}
            class={FORM_CLASSES.LABEL}
          >
            {filter.label}
          </label>
        )}
        {customItemSlot}
      </div>
    );
  }

  render() {
    const advancedFilters: JSX.Element[] = [];
    const disabledFooterButtons =
      this.filterElementValueLive && Compare.deepEqual(this.filterElementValue, this.filterElementValueLive);

    this.advancedFiltersData &&
      this.advancedFiltersData.forEach((filter: DataTableFilter) => {
        const filterTypes = {
          select: this._createSelectFilter,
          input: this._createInputFilter,
          checkbox: this._createCheckboxFilter,
          textarea: this._createTextareaFilter,
        };
        const filterElement = filterTypes[filter.type] ? filterTypes[filter.type](filter) : null;

        if (filterElement) {
          const accordionItem = (
            <div class={ACCORDION_CLASSES.ITEM}>
              <button class={ACCORDION_CLASSES.TRIGGER}>
                <div class={`${ACCORDION_CLASSES.TITLE}`}>{filter.label || filter.name}</div>
                <i class={`${ICON_CLASS} icon-chevron-down`} aria-hidden="true" />
              </button>
              <div class={ACCORDION_CLASSES.CONTENT}>{filterElement}</div>
            </div>
          );
          this.mobile ? advancedFilters.push(filterElement) : advancedFilters.push(accordionItem);
        }
      });

    const advancedFiltersButton = (
      <button
        id={this._advancedFilterButtonId}
        onClick={() => this._toggleAdvancedFiltersPopover()}
        data-tooltip="Filters"
        ref="filtersButton"
        class={`
          ${BUTTON_CLASSES.BUTTON}
          ${BUTTON_CLASSES.ICON_BUTTON}
          ${BUTTON_CLASSES.FLAT}
          `}
      >
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-filter`} aria-hidden="true" />
        </div>
      </button>
    );

    this.customItems &&
      this.customItems.forEach((filter: DataTableCustomItem) => {
        const customItem = this._createCustomItem(filter);
        const accordionItem = (
          <div class={ACCORDION_CLASSES.ITEM}>
            <button class={ACCORDION_CLASSES.TRIGGER}>
              <div class={`${ACCORDION_CLASSES.TITLE}`}>{filter.label || filter.template}</div>
              <i class={`${ICON_CLASS} icon-chevron-down`} aria-hidden="true" />
            </button>
            <div class={ACCORDION_CLASSES.CONTENT}>{customItem}</div>
          </div>
        );

        this.mobile ? advancedFilters.push(customItem) : advancedFilters.push(accordionItem);
      });

    const advancedFiltersRender = (
      <div>
        {!this.mobile && [
          advancedFiltersButton,
          <chi-popover
            ref="popover"
            position="bottom"
            reference={`#${this._advancedFilterButtonId}`}
            title="Filters"
            modal
            drag
            closable
          >
            <button
              class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.FLAT} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.SIZES.SM} ${BUTTON_CLASSES.NO_HOVER} ${UTILITY_CLASSES.PADDING.X[0]} ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_NORMAL} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}
              onClick={(event: Event) => this._expandCollapseAccordions(event)}
            >
              {this.isExpanded ? 'Collapse All' : 'Expand All'}
            </button>
            <div class={`${ACCORDION_CLASSES.ACCORDION} ${GENERIC_SIZE_CLASSES.SM}`} ref="advancedFiltersAccordion">
              {advancedFilters}
            </div>
            <AdvancedFiltersPopoverFooter
              disabledButtons={disabledFooterButtons}
              onChiFiltersClear={() => this._resetAdvancedFilters()}
              onChiCancel={() => this._toggleAdvancedFiltersPopover()}
              onChiFiltersApply={() => this._applyAdvancedFiltersChange()}
            />
          </chi-popover>,
        ]}
        {this.mobile && advancedFilters}
      </div>
    );

    return advancedFiltersRender;
  }

  @Emit(DATA_TABLE_EVENTS.ADVANCED_FILTERS_CHANGE)
  _emitAdvancedFiltersChange() {
    // This is intentional
  }

  _applyAdvancedFiltersChange() {
    this._emitAdvancedFiltersChange();
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
    if (!this.advancedFiltersData) {
      return;
    }

    this.advancedFiltersData?.forEach((currentValue: DataTableFilter) => {
      updateFilterData(
        currentValue,
        this.storeModule,
        currentValue.type === 'checkbox' ? false : currentValue.value || ''
      );
    });

    this._emitAdvancedFiltersChange();
  }

  private _expandCollapseAccordions(event: Event) {
    event.preventDefault();
    if (this._advancedFiltersAccordion) {
      this.isExpanded ? this._advancedFiltersAccordion.collapseAll() : this._advancedFiltersAccordion.expandAll();
      this.isExpanded = !this.isExpanded;
    }
  }
}
