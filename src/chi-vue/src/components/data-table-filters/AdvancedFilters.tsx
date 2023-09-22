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
import { Prop } from 'vue-property-decorator';
import { compareFilters, getElementFilterData } from './FilterUtils';
import { findComponent, uuid4 } from '@/utils/utils';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import AdvancedFiltersPopoverFooter from './AdvancedFiltersPopoverFooter.vue';
import { Component, Vue } from '@/build/vue-wrapper';

Vue.config.ignoredElements = [
  'chi-alert',
  'chi-app-layout',
  'chi-badge',
  'chi-brand',
  'chi-button',
  'chi-carousel',
  'chi-date',
  'chi-date-picker',
  'chi-drawer',
  'chi-expansion-panel',
  'chi-icon',
  'chi-label',
  'chi-link',
  'chi-marketing-icon',
  'chi-number-input',
  'chi-pagination',
  'chi-phone-input',
  'chi-popover',
  'chi-progress',
  'chi-search-input',
  'chi-spinner',
  'chi-text-input',
  'chi-textarea',
  'chi-time',
  'chi-time-picker',
  'chi-toggle-switch',
];

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

    if (!this.storeModule && this.$store) {
      this.storeModule = getModule(store, this.$store);
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

    if (!this._filtersTooltip) {
      this._filtersTooltip = chi.tooltip(this.$refs.filtersButton as HTMLElement);
    }
  }

  _calculateFilterId(filterName: string) {
    return `${this.popoverFilterID}_${filterName}`;
  }

  _createSelectFilter(filter: DataTableFilter) {
    const options = filter.options?.map(option => {
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
        class={`${FORM_CLASSES.FORM_ITEM}`}>
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
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select')}>
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

      this.storeModule.updateFilterConfigLive({
        ...this.filterElementValueLive,
        ...{
          [newFilterData?.id.replace(/-desktop|-mobile/gi, '') || 'no-id']:
            elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
        },
      });
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
              ${FORM_CLASSES.FORM_ITEM}`}>
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

  _createCheckboxFilter(filter: DataTableFilter) {
    return (
      <div
        class={`
              ${FORM_CLASSES.FORM_ITEM}
              ${UTILITY_CLASSES.DISPLAY.FLEX}
              ${UTILITY_CLASSES.JUSTIFY.CENTER}`}>
        <div
          class={[
            CHECKBOX_CLASSES.CHECKBOX,
            this.mobile
              ? `${UTILITY_CLASSES.ALIGN_SELF.LEFT} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}`
              : UTILITY_CLASSES.ALIGN_SELF.CENTER,
          ]}>
          <input
            id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
            aria-label={`Filter by ${filter.label || filter.name}`}
            data-filter={filter.name}
            type="checkbox"
            class={`${CHECKBOX_CLASSES.INPUT} ${this.mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}
            checked={this.filterElementValueLive[filter.id]}
            onChange={(ev: Event) => this._changeFormElementFilter(ev, 'checkbox')}
          />
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={CHECKBOX_CLASSES.LABEL}>
            {filter.label}
          </label>
        </div>
      </div>
    );
  }

  beforeDestroy() {
    this._filtersTooltip.dispose();
  }

  _createCustomItem(filter: DataTableCustomItem) {
    const customItemSlot =
      this.$scopedSlots?.default &&
      this.$scopedSlots.default(null)?.find(item => item[filter.template as keyof typeof item]);

    return (
      <div class={`${FORM_CLASSES.FORM_ITEM}`}>
        {this.mobile && (
          <label
            for={this.mobile ? `${filter.template}-mobile` : `${filter.template}-desktop`}
            class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        {customItemSlot && customItemSlot[filter.template as keyof typeof customItemSlot]}
      </div>
    );
  }

  render() {
    const advancedFilters: JSX.Element[] = [];
    const disabledFooterButtons =
      this.filterElementValueLive && compareFilters(this.filterElementValue, this.filterElementValueLive);

    this.advancedFiltersData &&
      this.advancedFiltersData.forEach((filter: DataTableFilter) => {
        const filterElement =
          filter.type === 'select'
            ? this._createSelectFilter(filter)
            : filter.type === 'input'
            ? this._createInputFilter(filter)
            : filter.type === 'checkbox'
            ? this._createCheckboxFilter(filter)
            : filter.type === 'textarea'
            ? this._createTextareaFilter(filter)
            : null;

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
          `}>
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
            closable>
            <button
              class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.FLAT} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.SIZES.SM} ${BUTTON_CLASSES.NO_HOVER} ${UTILITY_CLASSES.PADDING.X[0]} ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_NORMAL} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}`}
              onClick={(event: Event) => this._expandCollapseAccordions(event)}>
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

  _emitAdvancedFiltersChange() {
    this.$emit(DATA_TABLE_EVENTS.ADVANCED_FILTERS_CHANGE);
  }

  _applyAdvancedFiltersChange() {
    this.storeModule.updateFilterConfig(this.filterElementValue, false);
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
    if (this.advancedFiltersData) {
      this.advancedFiltersData?.forEach((currentValue: any) => {
        const filterPayload = {
          id: currentValue.id,
          value: currentValue.type === 'checkbox' ? false : currentValue.value || '',
        };

        this.storeModule.updateFilterConfig({ ...this.filterElementValue, ...filterPayload });
        this.storeModule.updateFilterConfigLive({ ...this.filterElementValueLive, ...filterPayload });
      });
    }

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
